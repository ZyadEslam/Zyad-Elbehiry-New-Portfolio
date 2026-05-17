import { memo } from "react";

interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
}

const Icon = memo(function Icon({ name, className = "", fill = false }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={
        fill
          ? {
              fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }
          : undefined
      }
      aria-hidden="true"
    >
      {name}
    </span>
  );
});

export default Icon;
