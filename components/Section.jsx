import Reveal from "./Reveal";

export default function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">
            <span className="h-px w-6 bg-accent-bright/50" />
            {label}
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-fg md:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-fg/50 md:text-lg">{intro}</p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
