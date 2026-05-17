import { memo } from "react";
import { experiences } from "../../data/portfolio.ts";
import SectionTitle from "../../components/ui/SectionTitle.tsx";
import ExperienceItem from "./components/ExperienceItem.tsx";

const ExperienceSection = memo(function ExperienceSection() {
  return (
    <section id="experience">
      <SectionTitle title="Experience" icon="work_history" />

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
});

export default ExperienceSection;
