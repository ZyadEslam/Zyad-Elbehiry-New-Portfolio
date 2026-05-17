import { memo } from "react";
import { navItems, profile } from "../../data/portfolio.ts";
import { useClock } from "../../hooks/useClock.ts";
import Icon from "../ui/Icon.tsx";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = memo(function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const time = useClock();

  return (
    <aside className="hidden lg:flex flex-col h-[calc(100vh-60px)] sticky top-[60px] w-72 border-r border-white/10 bg-black/20 backdrop-blur-xl z-40">
      <div className="p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center shadow-[0_0_20px_rgba(195,244,0,0.2)]">
            <span className="font-headline-md font-black text-on-primary-fixed">
              {profile.initials}
            </span>
          </div>

          <div>
            <h2 className="text-primary-container font-bold font-headline-md text-sm">
              ZYAD_CORE
            </h2>
            <p className="text-xs text-on-surface-variant uppercase tracking-tighter opacity-70">
              {profile.title}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-black/30 border border-white/10 p-3">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-1">
            Local Time
          </p>
          <p className="font-mono text-primary-container text-sm">{time}</p>
        </div>
      </div>

      <nav className="flex-1 py-6 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={
              activeTab === item.id
                ? "w-full bg-primary-container/10 text-primary-container border-r-4 border-primary-container flex items-center gap-3 px-6 py-4 font-headline-md font-medium transition-all group"
                : "w-full text-white/40 flex items-center gap-3 px-6 py-4 font-headline-md font-medium hover:bg-white/5 hover:text-white transition-colors group"
            }
          >
            <Icon name={item.icon} className="group-hover:translate-x-1 duration-200" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-6 border-t border-white/5">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-4">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
          Available for fullstack roles
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary-container text-on-primary-fixed font-bold uppercase tracking-widest text-[11px] hover:shadow-[0_0_20px_rgba(195,244,0,0.25)] transition-all"
        >
          <Icon name="send" className="text-sm" />
          Contact Me
        </a>
      </div>
    </aside>
  );
});

export default Sidebar;
