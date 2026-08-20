import { education, skills } from "../app/data";
import Reveal from "./Reveal";
import Section from "./Section";

const GROUP_ICONS = {
  Languages: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  Frontend: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </>
  ),
  Backend: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </>
  ),
  "Tools & Platforms": (
    <>
      <path d="M14.7 6.3a4 4 0 0 1 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4" />
      <path d="M6 6 3 9l3 3" />
    </>
  ),
};

function GroupIcon({ name }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-bright"
      >
        {GROUP_ICONS[name]}
      </svg>
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" label="Toolkit" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 70}>
            <div className="surface surface-hover h-full p-6">
              <GroupIcon name={group.group} />
              <h3 className="mt-4 text-sm font-semibold text-fg">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-fg/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg/35">
          Education
        </h3>
        <div className="mt-6 space-y-4">
          {education.map((entry) => (
            <Reveal key={entry.institution}>
              <div className="surface gradient-border flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent-bright"
                    >
                      <path d="m22 9-10-5L2 9l10 5 10-5Z" />
                      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-fg">{entry.credential}</p>
                    <p className="mt-1 text-sm text-fg/50">
                      {entry.institution}
                    </p>
                    {entry.detail && (
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg/40">
                        {entry.detail}
                      </p>
                    )}
                  </div>
                </div>
                <span className="shrink-0 text-sm text-fg/30">
                  {entry.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
