import { about } from "../app/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About" title="Who's building this">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((text, i) => (
            <p key={i} className="leading-relaxed text-white/60 md:text-lg">
              {text}
            </p>
          ))}
        </Reveal>

        <dl className="grid h-fit grid-cols-2 gap-3">
          {about.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 70}>
              <div className="surface surface-hover h-full p-5">
                <dt className="text-xs uppercase tracking-wider text-white/35">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-white">
                  {fact.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
