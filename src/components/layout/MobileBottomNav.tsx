import { memo } from "react";
import { navItems } from "../../data/portfolio.ts";
import Icon from "../ui/Icon.tsx";

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MobileBottomNav = memo(function MobileBottomNav({
  activeTab,
  setActiveTab,
}: MobileBottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-black/85 backdrop-blur-2xl border-t border-white/10 flex md:hidden justify-around items-center pt-3 pb-5 px-4 mobile-bottom-nav-fix">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveTab(item.id);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={
            activeTab === item.id
              ? "flex flex-col items-center justify-center text-primary-container w-full"
              : "flex flex-col items-center justify-center text-white/40 w-full hover:text-white/80 transition-colors"
          }
        >
          <Icon name={item.icon} className="text-lg" />
          <span className="font-headline-md text-[9px] uppercase font-bold tracking-widest mt-1">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
});

export default MobileBottomNav;
