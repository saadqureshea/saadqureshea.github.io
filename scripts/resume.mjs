/**
 * Renders resume/resume.html to public/Saad-Qureshi-CV.pdf.
 *
 *   node scripts/resume.mjs
 *
 * Output lands in public/ so the deployed site can link it directly.
 * Text stays selectable and machine-readable, which matters for applicant
 * tracking systems — this is a real PDF, not an image of one.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const SOURCE = path.join(process.cwd(), "resume", "resume.html");
const OUTPUT = path.join(process.cwd(), "public", "Saad-Qureshi-CV.pdf");

async function main() {
  const html = await readFile(SOURCE, "utf8");
  if (html.includes("DATES_PLACEHOLDER")) {
    console.error(
      "Refusing to build: resume.html still contains DATES_PLACEHOLDER.",
    );
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto(pathToFileURL(SOURCE).href, { waitUntil: "networkidle0" });

  await page.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  const pageCount = await page.evaluate(() => {
    // Rough check: content height vs A4 printable height at 96dpi.
    const A4_PRINTABLE_PX = (297 - 26) * 3.7795;
    return Math.ceil(document.body.scrollHeight / A4_PRINTABLE_PX);
  });

  await browser.close();
  console.log(`ok  ${OUTPUT}`);
  console.log(`    approx pages: ${pageCount}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
