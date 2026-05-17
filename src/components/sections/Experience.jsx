import { experiences } from "../../data/portfolio";
import Icon from "../../ui/Icon";
import SectionTitle from "../../ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle
        // kicker="// Professional_Log"
        title="Experience"
        icon="work_history"
      />

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="glass-panel rounded-xl p-6 glow-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-[60px] rounded-full" />

            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-primary-container font-technical-sm uppercase tracking-[0.25em]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-10 bg-primary-container/30" />

                    <span className="text-[10px] text-secondary-container font-technical-sm uppercase tracking-[0.2em]">
                      {experience.type}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl text-primary">
                    {experience.role}
                  </h3>

                  <p className="text-on-surface-variant mt-1">
                    {experience.company} Â· {experience.location}
                  </p>
                </div>

                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-primary-container font-technical-sm uppercase tracking-wider">
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-3">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm text-zinc-300 leading-relaxed"
                  >
                    <Icon
                      name="chevron_right"
                      className="text-primary-container text-base mt-0.5"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
