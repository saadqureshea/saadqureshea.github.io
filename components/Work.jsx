import { projects } from "../app/data";
import ProjectPreview from "./ProjectPreview";
import Reveal from "./Reveal";
import Section from "./Section";

function ArrowLink({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
        primary
          ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-dim hover:shadow-accent/30"
          : "border border-line/[0.12] text-fg/75 hover:border-line/25 hover:text-fg"
      }`}
    >
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}

function StackRow({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span key={tech} className="pill">
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  return (
    <Reveal>
      <article className="surface gradient-border overflow-hidden">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent-bright/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-fg/10" />
              <span className="text-xs text-fg/30">{project.year}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 text-lg text-accent-bright">{project.tagline}</p>
            <p className="mt-5 leading-relaxed text-fg/55">
              {project.summary}
            </p>

            <div className="mt-7">
              <StackRow stack={project.stack} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.live && (
                <ArrowLink href={project.links.live} primary>
                  Live demo
                </ArrowLink>
              )}
              {project.links.code && (
                <ArrowLink href={project.links.code}>Source</ArrowLink>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <ProjectPreview slug={project.slug} />
          </div>
        </div>

        {project.highlights.length > 0 && (
          <div className="grid gap-px bg-fg/[0.06] sm:grid-cols-2">
            {project.highlights.map((h) => (
              <div
                key={h.title}
                className="group bg-bg p-6 transition-colors duration-300 hover:bg-fg/[0.02]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
                  <div>
                    <h4 className="text-sm font-semibold text-fg">
                      {h.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-fg/50">
                      {h.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {project.extras.length > 0 && (
          <div className="border-t border-line/[0.06] p-7 md:px-10">
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-fg/30">
              Also includes
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.extras.map((extra) => (
                <li
                  key={extra}
                  className="flex items-start gap-2.5 text-sm text-fg/45"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent/70"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {extra}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </Reveal>
  );
}

function CompactProject({ project }) {
  return (
    <Reveal>
      <article className="surface surface-hover h-full p-7">
        <ProjectPreview slug={project.slug} />
        <div className="mt-6 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
          <span className="text-sm text-fg/30">{project.year}</span>
        </div>
        <p className="mt-1.5 text-sm text-accent-bright">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-fg/50">
          {project.summary}
        </p>
        <div className="mt-6">
          <StackRow stack={project.stack} />
        </div>
        {project.links.code && (
          <div className="mt-6">
            <ArrowLink href={project.links.code}>Source</ArrowLink>
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      label="Work"
      title="Things I've built"
      intro="Fewer projects, explained properly — what the hard part was and how it got solved."
    >
      <div className="space-y-6">
        {featured.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <CompactProject key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
