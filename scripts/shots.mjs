/**
 * Captures real screenshots of the live project sites into public/shots/.
 *
 *   node scripts/shots.mjs
 *
 * Uses puppeteer-core driving the Edge install already on this machine, so
 * there's no bundled-Chromium download. Re-run whenever a live site changes.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUT = path.join(process.cwd(), "public", "shots");

const TARGETS = [
  { name: "purecheck", url: "https://www.purecheckscreening.com/" },
  { name: "kaito", url: "https://idyllic-lamington-6ac121.netlify.app/" },
];

// 1440 CSS px at 1x is already ~2x the size these render at on the page, so
// it stays crisp while keeping files small. PNG would be several MB each
// because both sites are photo-heavy — JPEG is the right format here.
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1 };
const QUALITY = 82;

async function main() {
  await mkdir(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: "new",
    args: ["--hide-scrollbars", "--disable-features=IsolateOrigins"],
  });

  for (const target of TARGETS) {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    try {
      await page.goto(target.url, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });
      // Let fonts settle and any entrance animations finish.
      await new Promise((r) => setTimeout(r, 2500));

      const file = path.join(OUT, `${target.name}.jpg`);
      await page.screenshot({ path: file, type: "jpeg", quality: QUALITY });
      console.log(`ok   ${target.name} -> ${file}`);
    } catch (err) {
      console.error(`FAIL ${target.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
