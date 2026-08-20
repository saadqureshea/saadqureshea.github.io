/**
 * Project previews.
 *
 * Sites with a live URL use real screenshots captured by `scripts/shots.mjs`
 * (re-run it after a site changes). Anything without a public URL — a mobile
 * app, an unpublished tool — falls back to a mockup drawn in markup, which
 * stays sharp at any size and follows the active theme.
 */

function BrowserChrome({ label, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line/[0.09] bg-fg/[0.015]">
      <div className="flex items-center gap-2 border-b border-line/[0.07] bg-fg/[0.02] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <span className="h-2 w-2 rounded-full bg-fg/15" />
        <div className="ml-2 flex-1 truncate rounded bg-fg/[0.04] px-2 py-1 text-[10px] text-fg/30">
          {label}
        </div>
      </div>
      {children}
    </div>
  );
}

/** A real screenshot framed in browser chrome. */
function Shot({ src, label, alt }) {
  return (
    <BrowserChrome label={label}>
      {/* Plain <img>: the export runs unoptimized, so next/image would only
          add markup without doing any work. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />
    </BrowserChrome>
  );
}

/** SkillSwap: two phone frames — a skill feed and a booking confirmation. */
function MobileMock() {
  return (
    <div className="flex justify-center gap-4 py-2">
      <div className="w-[124px] overflow-hidden rounded-[16px] border border-line/[0.1] bg-fg/[0.02] p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-fg/15" />
        <p className="text-[8px] font-medium text-fg/60">Skills near you</p>
        {["Calculus II", "Figma basics", "Spanish"].map((s, i) => (
          <div
            key={s}
            className="mt-1.5 rounded border border-line/[0.06] bg-fg/[0.02] p-1.5"
          >
            <div className="flex items-center gap-1.5">
              <div
                className={`h-3.5 w-3.5 rounded-full ${
                  i === 0 ? "bg-accent/50" : "bg-fg/10"
                }`}
              />
              <div className="flex-1">
                <p className="text-[7px] text-fg/55">{s}</p>
                <div className="mt-0.5 h-0.5 w-2/3 rounded-full bg-fg/10" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 w-[124px] overflow-hidden rounded-[16px] border border-line/[0.1] bg-fg/[0.02] p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-fg/15" />
        <div className="rounded border border-accent/25 bg-accent/10 p-2 text-center">
          <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent/35">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-fg"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <p className="mt-1.5 text-[7px] text-fg/70">Session booked</p>
          <p className="mt-0.5 text-[6px] text-fg/35">Thu · 4:00 PM</p>
        </div>
        <div className="mt-2 space-y-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-1 rounded-full bg-fg/[0.07]" />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Process Sync: a small Gantt-ish timeline of contending processes. */
function VisualizerMock() {
  const rows = [
    {
      label: "P1",
      bars: [
        [0, 32],
        [58, 22],
      ],
    },
    { label: "P2", bars: [[34, 22]] },
    {
      label: "P3",
      bars: [
        [12, 18],
        [82, 16],
      ],
    },
  ];

  return (
    <BrowserChrome label="process-sync-visualizer">
      <div className="space-y-2 p-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-5 text-[9px] text-fg/35">{row.label}</span>
            <div className="relative h-3 flex-1 rounded bg-fg/[0.03]">
              {row.bars.map(([left, width], i) => (
                <span
                  key={i}
                  className="absolute top-0 h-3 rounded bg-gradient-to-r from-accent/70 to-accent/35"
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <span className="w-5" />
          <div className="flex flex-1 justify-between text-[8px] text-fg/20">
            {["t0", "t1", "t2", "t3", "t4"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

const PREVIEWS = {
  purecheck: () => (
    <Shot
      src="./shots/purecheck.jpg"
      label="purecheckscreening.com"
      alt="PureCheck Screening homepage: a booking widget alongside drug, DNA, and background testing options"
    />
  ),
  kaito: () => (
    <Shot
      src="./shots/kaito.jpg"
      label="kaito-marketplace"
      alt="KAITO MarketPlace homepage: search, buyer and seller entry points, and a grid of live listings"
    />
  ),
  skillswap: MobileMock,
  "process-sync": VisualizerMock,
};

export default function ProjectPreview({ slug }) {
  const Preview = PREVIEWS[slug];
  return Preview ? <Preview /> : null;
}
