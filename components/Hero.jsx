import { heroStats, profile } from "../app/data";
import ProjectPreview from "./ProjectPreview";

/**
 * The stack reads as a pile of work samples: two cards fanned out behind,
 * the flagship square-on in front. Hover lifts and straightens the pile.
 */
function WorkStack() {
  return (
    <div className="group relative mx-auto w-full max-w-[540px] lg:max-w-none">
      {/* Back card — Process Sync */}
      <div className="absolute inset-x-6 top-2 origin-bottom-left rotate-[-6deg] opacity-55 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:-translate-y-1">
        <div className="surface overflow-hidden p-2 shadow-2xl">
          <ProjectPreview slug="process-sync" />
        </div>
      </div>

      {/* Middle card — SkillSwap */}
      <div className="absolute inset-x-3 top-8 origin-bottom-right rotate-[4deg] opacity-80 transition-transform duration-500 group-hover:rotate-[6deg] group-hover:translate-y-1">
        <div className="surface overflow-hidden p-2 shadow-2xl">
          <ProjectPreview slug="skillswap" />
        </div>
      </div>

      {/* Front card — KAITO, the flagship */}
      <div className="relative translate-y-16 rotate-[-1.5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1 lg:translate-y-20">
        <div className="surface gradient-border overflow-hidden p-2 shadow-2xl">
          <ProjectPreview slug="kaito" />
        </div>

        <a
          href="#work"
          className="absolute -bottom-4 right-2 inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-bg shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
        >
          Open the work
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_25%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="bg-glow pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(880px,100vw)] -translate-x-1/2 rounded-full blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Copy */}
          <div>
            <span className="pill animate-fade-up mb-7">
              <span className="relative mr-2 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
              </span>
              Available for internships
            </span>

            <h1 className="animate-fade-up text-[2.75rem] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[3.35rem] xl:text-[4.25rem]">
              <span className="text-gradient">{profile.headline[0]}</span>
              <br />
              <span className="text-gradient-dim">{profile.headline[1]}</span>
            </h1>

            <p className="animate-fade-up mt-7 max-w-xl leading-relaxed text-fg/55">
              {profile.subhead}
            </p>

            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-dim hover:shadow-accent/40"
              >
                Explore the work
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="border-b border-fg/30 pb-0.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-bright"
              >
                Start a conversation
              </a>
            </div>
          </div>

          {/* Work stack */}
          <div className="animate-fade-up pb-16 lg:pb-24">
            <WorkStack />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-fg/30">
          <span>Selected work</span>
          <span className="hidden sm:inline">Built end to end</span>
        </div>

        <dl className="animate-fade-up mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/[.08] bg-line/[.06] sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-bg px-5 py-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-fg">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-fg/35">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
