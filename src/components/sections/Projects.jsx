import { useState } from "react";
import { profile, projects } from "../../data/portfolio";
import Icon from "../../ui/Icon";
import SectionTitle from "../../ui/SectionTitle";
// import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

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

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="glass-panel rounded-xl overflow-hidden glow-hover group"
          >
            <div
              className={`aspect-video ${project.visualClass} relative overflow-hidden grid-overlay${
                project.thumbnail ? " cursor-pointer" : ""
              }`}
              onClick={() => {
                if (project.thumbnail) {
                  setSelectedImage(project.thumbnail);
                }
              }}
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
                  <Icon
                    name={project.icon}
                    className="text-primary-container"
                  />
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
                    <Icon
                      name="bolt"
                      className="text-primary-container text-sm"
                    />
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
        ))}
      </div>

      {/* Full Thumbnail Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-container z-[110] bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="close" />
            </button>
            <img
              src={selectedImage}
              alt="Project Full Thumbnail"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
