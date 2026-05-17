import React, { memo } from "react";
import Icon from "./Icon.tsx";

interface SectionTitleProps {
  kicker?: string;
  title: string;
  icon: string;
  children?: React.ReactNode;
}

const SectionTitle = memo(function SectionTitle({ kicker, title, icon, children }: SectionTitleProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        {kicker && (
          <p className="text-primary-container font-technical-sm uppercase tracking-[0.3em] text-xs mb-2">
            {kicker}
          </p>
        )}

        <h2 className="font-headline-lg text-2xl md:text-3xl text-primary flex items-center gap-3">
          <Icon name={icon} className="text-primary-container" />
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
});

export default SectionTitle;
