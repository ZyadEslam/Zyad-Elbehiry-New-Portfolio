import { useState, useCallback } from "react";
import { profile, projects } from "../../data/portfolio.ts";
import SectionTitle from "../../components/ui/SectionTitle.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import ProjectModal from "./components/ProjectModal.tsx";

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelectImage = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

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
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onSelectImage={handleSelectImage}
          />
        ))}
      </div>

      <ProjectModal selectedImage={selectedImage} onClose={handleCloseModal} />
    </section>
  );
}
