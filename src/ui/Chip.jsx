const variants = {
    lime:
      "border-primary-container/30 bg-primary-container/5 text-primary-container",
    cyan:
      "border-secondary-container/30 bg-secondary-container/5 text-secondary-container",
    muted: "border-white/10 bg-white/5 text-on-surface-variant"
  };
  
  export default function Chip({ children, variant = "lime", className = "" }) {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-technical-sm uppercase tracking-wider ${variants[variant]} ${className}`}
      >
        {children}
      </span>
    );
  }