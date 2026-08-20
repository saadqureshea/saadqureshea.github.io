import { profile } from "../app/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "@saadqureshea", href: profile.github },
  { label: "LinkedIn", value: "/in/saadqureshea", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[min(680px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[120px]"
        />

        <div className="relative text-center">
          <p className="section-label justify-center">Contact</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
            Building something?
            <br />
            <span className="text-white/40">I&rsquo;d like to hear about it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/50">
            Open to internships, junior roles, and freelance work. The fastest
            way to reach me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            {profile.email}
          </a>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="surface surface-hover p-5 text-left"
              >
                <p className="text-xs uppercase tracking-wider text-white/35">
                  {link.label}
                </p>
                <p className="mt-1.5 truncate text-sm text-white/80">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
