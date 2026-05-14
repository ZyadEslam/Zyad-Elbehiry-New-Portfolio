// import Icon from "../../ui/Icon";

import Icon from "./Icon";

export default function SectionTitle({ kicker, title, icon, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        <p className="text-primary-container font-technical-sm uppercase tracking-[0.3em] text-xs mb-2">
          {kicker}
        </p>

        <h2 className="font-headline-lg text-2xl md:text-3xl text-primary flex items-center gap-3">
          <Icon name={icon} className="text-primary-container" />
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}