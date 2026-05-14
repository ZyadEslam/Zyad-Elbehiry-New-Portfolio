import { profile, projects } from "../../data/portfolio";
import Icon from "../../UI/Icon";
import SectionTitle from "../../UI/SectionTitle";
// import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="Projects" icon="grid_view">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-primary-container uppercase tracking-widest border-b border-primary-container/30 hover:border-primary-container transition-all"
        >
          View GitHub
        </a>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`glass-panel rounded-xl overflow-hidden glow-hover group ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`h-44 ${project.visualClass} relative overflow-hidden grid-overlay`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-primary-container border border-primary-container/20 uppercase tracking-widest">
                {project.period}
              </div>

              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black/45 border border-white/10 backdrop-blur-md flex items-center justify-center">
                  <Icon name={project.icon} className="text-primary-container" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {project.role}
                  </p>

                  <h3 className="font-headline-md text-xl text-white">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={
                      techIndex % 2 === 0
                        ? "px-3 py-1 rounded-full bg-primary-container/5 border border-primary-container/25 text-[10px] text-primary-container font-technical-sm uppercase tracking-wider"
                        : "px-3 py-1 rounded-full bg-secondary-container/5 border border-secondary-container/25 text-[10px] text-secondary-container font-technical-sm uppercase tracking-wider"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-2 text-[11px] text-on-surface-variant"
                  >
                    <Icon name="bolt" className="text-primary-container text-sm" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}