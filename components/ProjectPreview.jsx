/**
 * Stylised UI mockups standing in for product screenshots. These are drawn in
 * markup rather than loaded as images so they stay sharp, theme-consistent,
 * and weightless. Swap any of them for a real screenshot by replacing the
 * component body with an <img>.
 */

function BrowserChrome({ label, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.015]">
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <div className="ml-2 flex-1 truncate rounded bg-white/[0.04] px-2 py-1 text-[10px] text-white/30">
          {label}
        </div>
      </div>
      {children}
    </div>
  );
}

/** KAITO: a storefront grid with a checkout summary showing the 80/20 split. */
function MarketplaceMock() {
  return (
    <BrowserChrome label="kaito-marketplace">
      <div className="grid gap-3 p-4 sm:grid-cols-[1.55fr_1fr]">
        <div>
          <div className="flex gap-1.5">
            {["Products", "Made-to-order", "Services", "Work"].map((t, i) => (
              <span
                key={t}
                className={`rounded px-1.5 py-1 text-[9px] ${
                  i === 0
                    ? "bg-accent/25 text-accent-bright"
                    : "bg-white/[0.04] text-white/30"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5"
              >
                <div className="h-8 rounded bg-gradient-to-br from-accent/25 to-white/[0.03]" />
                <div className="mt-1.5 h-1 w-3/4 rounded-full bg-white/12" />
                <div className="mt-1 h-1 w-1/3 rounded-full bg-accent/40" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-white/[0.07] bg-white/[0.02] p-3">
          <p className="text-[9px] uppercase tracking-wider text-white/30">
            Order summary
          </p>
          <div className="mt-2.5 space-y-1.5 text-[10px]">
            <div className="flex justify-between text-white/45">
              <span>Item</span>
              <span className="tabular-nums">$100.00</span>
            </div>
            <div className="flex justify-between text-white/30">
              <span>Marketplace 15%</span>
              <span className="tabular-nums">−$15.00</span>
            </div>
            <div className="flex justify-between text-white/30">
              <span>Processing 5%</span>
              <span className="tabular-nums">−$5.00</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-white/[0.08] pt-2 font-medium text-accent-bright">
              <span>Seller nets</span>
              <span className="tabular-nums">$80.00</span>
            </div>
          </div>
          <div className="mt-3 rounded bg-accent/85 py-1.5 text-center text-[9px] font-medium text-white">
            Pay with Stripe
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/** SkillSwap: two phone frames — a skill feed and a booking confirmation. */
function MobileMock() {
  return (
    <div className="flex justify-center gap-4 py-2">
      <div className="w-[124px] overflow-hidden rounded-[16px] border border-white/[0.1] bg-white/[0.02] p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
        <p className="text-[8px] font-medium text-white/60">Skills near you</p>
        {["Calculus II", "Figma basics", "Spanish"].map((s, i) => (
          <div
            key={s}
            className="mt-1.5 rounded border border-white/[0.06] bg-white/[0.02] p-1.5"
          >
            <div className="flex items-center gap-1.5">
              <div
                className={`h-3.5 w-3.5 rounded-full ${
                  i === 0 ? "bg-accent/50" : "bg-white/10"
                }`}
              />
              <div className="flex-1">
                <p className="text-[7px] text-white/55">{s}</p>
                <div className="mt-0.5 h-0.5 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 w-[124px] overflow-hidden rounded-[16px] border border-white/[0.1] bg-white/[0.02] p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
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
              className="text-white"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <p className="mt-1.5 text-[7px] text-white/70">Session booked</p>
          <p className="mt-0.5 text-[6px] text-white/35">Thu · 4:00 PM</p>
        </div>
        <div className="mt-2 space-y-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-1 rounded-full bg-white/[0.07]" />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Process Sync: a small Gantt-ish timeline of contending processes. */
function VisualizerMock() {
  const rows = [
    { label: "P1", bars: [[0, 32], [58, 22]] },
    { label: "P2", bars: [[34, 22]] },
    { label: "P3", bars: [[12, 18], [82, 16]] },
  ];

  return (
    <BrowserChrome label="process-sync-visualizer">
      <div className="space-y-2 p-4">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-5 text-[9px] text-white/35">{row.label}</span>
            <div className="relative h-3 flex-1 rounded bg-white/[0.03]">
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
          <div className="flex flex-1 justify-between text-[8px] text-white/20">
            {["t0", "t1", "t2", "t3", "t4"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

const MOCKS = {
  kaito: MarketplaceMock,
  skillswap: MobileMock,
  "process-sync": VisualizerMock,
};

export default function ProjectPreview({ slug }) {
  const Mock = MOCKS[slug];
  return Mock ? <Mock /> : null;
}
