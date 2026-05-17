import { memo } from "react";
import { courses, education, languages } from "../../data/portfolio.ts";
import Chip from "../../components/ui/Chip.tsx";
import Icon from "../../components/ui/Icon.tsx";

const EducationSection = memo(function EducationSection() {
  return (
    <section id="education" className="glass-panel rounded-xl p-6">
      <h3 className="font-headline-md text-sm mb-6 flex items-center justify-between text-primary">
        Education
        <Icon name="school" className="text-primary-container text-lg" />
      </h3>

      <div className="space-y-6">
        <div className="border-l-2 border-primary-container/40 pl-4">
          <p className="text-primary font-headline-md text-lg">{education.degree}</p>

          <p className="text-sm text-on-surface-variant mt-1">{education.school}</p>

          <p className="text-xs text-white/40 mt-1">{education.department}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            <Chip>{education.period}</Chip>
            <Chip variant="cyan">{education.location}</Chip>
          </div>
        </div>

        <div>
          <h4 className="text-xs text-primary-container font-technical-sm uppercase tracking-[0.25em] mb-3">
            Courses
          </h4>

          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.name}
                className="rounded-lg bg-white/5 border border-white/10 p-3"
              >
                <p className="text-sm text-primary">{course.name}</p>
                <p className="text-xs text-on-surface-variant mt-1">{course.provider}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs text-primary-container font-technical-sm uppercase tracking-[0.25em] mb-3">
            Languages
          </h4>

          <div className="grid grid-cols-2 gap-3">
            {languages.map((language) => (
              <div
                key={language.name}
                className="rounded-lg bg-white/5 border border-white/10 p-3"
              >
                <p className="text-sm text-primary">{language.name}</p>
                <p className="text-xs text-on-surface-variant">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default EducationSection;
