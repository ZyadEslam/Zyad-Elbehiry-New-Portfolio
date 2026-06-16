import { memo } from "react";
import type { Project } from "../../../data/portfolio.ts";
import Icon from "../../../components/ui/Icon.tsx";

interface ProjectCardProps {
  project: Project;
  onSelectImage: (image: string) => void;
}

const ProjectCard = memo(function ProjectCard({ project, onSelectImage }: ProjectCardProps) {
  const handleImageClick = () => {
    if (project.thumbnail) {
      onSelectImage(project.thumbnail);
    }
  };

  return (
    <article className="glass-panel rounded-xl overflow-hidden glow-hover group">
      <div
        className={`aspect-video ${project.visualClass} relative overflow-hidden grid-overlay${
          project.thumbnail ? " cursor-pointer" : ""
        }`}
        onClick={handleImageClick}
      >
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="absolute inset-0 w-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />

        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-primary-container border border-primary-container/20 uppercase tracking-widest">
          {project.period}
        </div>

        <div className="absolute bottom-5 left-5 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-black/45 border border-white/10 backdrop-blur-md flex items-center justify-center">
            {/* <Icon name={project.icon} className="text-primary-container" /> */}
            <img src={project.icon} alt={project.name} className="w-6 h-6 rounded-full" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">{project.role}</p>
            <h3 className="font-headline-md text-xl text-white">{project.name}</h3>
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

        {(project.github || project.link) && (
          <div className="pt-5 mt-5 border-t border-white/5 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors"
              >
                <Icon name="code" className="text-sm" /> Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary-container hover:text-white transition-colors"
              >
                <Icon name="open_in_new" className="text-sm" /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
});

export default ProjectCard;
