import { memo } from "react";
import Icon from "../../../components/ui/Icon.tsx";

interface ProjectModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModal({ selectedImage, onClose }: ProjectModalProps) {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 text-white hover:text-primary-container z-[110] bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
          onClick={onClose}
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
  );
});

export default ProjectModal;
