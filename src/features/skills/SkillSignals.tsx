import { memo } from "react";
import { skillSignals } from "../../data/portfolio.ts";
import Icon from "../../components/ui/Icon.tsx";

export const SkillSignals = memo(function SkillSignals() {
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
});
