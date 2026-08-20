import { footer, profile } from "../app/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/[0.08]">
      {/* Oversized monogram watermark, echoing the hero's bloom. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[13rem] font-bold leading-none tracking-tighter text-fg/[0.022] lg:block"
      >
        {footer.monogram}
      </span>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,0.75fr))]">
          {/* Identity block */}
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dim text-sm font-bold tracking-tight text-white shadow-lg shadow-accent/20">
              {footer.monogram}
            </span>

            <h2 className="mt-5 text-xl font-semibold tracking-tight text-fg">
              {footer.tagline}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-fg/45">
              {profile.name} — {profile.role}
              <br />
              {footer.availability}
            </p>

            {/* Where the reference puts a newsletter signup. A mailing list
                Saad doesn't have would be a dead control, so this is a real
                mail link instead. */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg/35">
                Get in touch
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-3 inline-flex items-center gap-3 rounded-full border border-line/[0.12] bg-fg/[0.02] py-1.5 pl-5 pr-1.5 text-sm text-fg/75 transition-colors hover:border-accent/40 hover:text-fg"
              >
                {profile.email}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-sm text-fg/45 transition-colors hover:text-accent-bright"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/[0.08] pt-7 text-sm text-fg/35 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            Designed &amp; built by{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent-bright transition-colors hover:text-fg"
            >
              {profile.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
