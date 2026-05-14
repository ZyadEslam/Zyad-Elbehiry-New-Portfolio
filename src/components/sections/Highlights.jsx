import { highlights } from "../../data/portfolio";
import Icon from "../../ui/Icon";
// import Icon from "../ui/Icon";

export default function Highlights() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {highlights.map((item) => (
        <article
          key={item.label}
          className="glass-panel rounded-xl p-5 glow-hover"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <Icon name={item.icon} className="text-primary-container" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              SYS
            </span>
          </div>

          <h3 className="font-headline-lg text-2xl text-primary">
            {item.value}
          </h3>

          <p className="text-sm text-primary-container font-medium mt-1">
            {item.label}
          </p>

          <p className="text-xs text-on-surface-variant mt-2">{item.detail}</p>
        </article>
      ))}
    </section>
  );
}