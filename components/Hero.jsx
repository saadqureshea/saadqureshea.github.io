import { heroStats, profile } from "../app/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-40 md:pb-28 md:pt-48"
    >
      {/* Graph-paper texture, faded out toward the bottom of the fold. */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_25%,transparent_100%)]"
      />

      {/* Indigo bloom behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(880px,100vw)] -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <span className="pill mb-8">
            <span className="relative mr-2 flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
            </span>
            Available for internships
          </span>
        </div>

        <h1 className="animate-fade-up text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          <span className="text-gradient">{profile.headline[0]}</span>
          <br />
          <span className="text-gradient-dim">{profile.headline[1]}</span>
        </h1>

        <p className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          {profile.subhead}
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-dim hover:shadow-accent/40"
          >
            See the work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="surface surface-hover inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/80"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
            </svg>
            GitHub
          </a>
        </div>

        <dl className="animate-fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-ink px-5 py-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-white/35">
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
