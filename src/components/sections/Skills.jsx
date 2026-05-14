import { skillGroups, skillSignals } from "../../data/portfolio";
import Icon from "../../UI/Icon";
// import Icon from "../ui/Icon";

export function SkillSignals() {
  return (
    <section className="glass-panel rounded-xl p-6">
      <h3 className="font-headline-md text-sm mb-6 flex items-center justify-between text-primary">
        Skill Signal
        <Icon name="monitoring" className="text-primary-container text-lg" />
      </h3>

      <div className="space-y-6">
        {skillSignals.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-[11px] uppercase tracking-tighter text-on-surface-variant">
              <span>{skill.name}</span>
              <span className="text-primary-container">{skill.val}</span>
            </div>

            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-container shadow-[0_0_10px_#c3f400]"
                style={{ width: skill.val }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillStack() {
  return (
    <section id="skills" className="glass-panel rounded-xl p-6">
      <h3 className="font-headline-md text-sm mb-6 flex items-center justify-between text-primary">
        Tech Stack
        <Icon name="memory" className="text-secondary-container text-lg" />
      </h3>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center gap-2 mb-3">
              <Icon
                name={group.icon}
                className="text-primary-container text-lg"
              />

              <h4 className="text-sm font-bold text-primary font-headline-md">
                {group.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item, index) => (
                <span
                  key={item}
                  className={
                    index % 3 === 0
                      ? "px-3 py-1 rounded-full bg-primary-container/5 border border-primary-container/20 text-[10px] text-primary-container font-technical-sm uppercase tracking-wider"
                      : "px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-on-surface-variant font-technical-sm uppercase tracking-wider"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
