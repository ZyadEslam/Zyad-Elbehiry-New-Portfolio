import { navItems, profile } from "../../data/portfolio";
import Icon from "../../UI/Icon";
// import Icon from "../ui/Icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/45 backdrop-blur-md border-b border-white/10 shadow-[0px_0px_20px_rgba(204,255,0,0.05)]">
      <div className="flex justify-between items-center w-full px-5 md:px-8 py-3">
        <a
          href="#home"
          className="text-xl font-black tracking-tighter text-primary-container font-headline-md"
        >
          ZYAD_OS
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-headline-md uppercase tracking-widest text-xs text-gray-500 hover:text-primary-container transition-all active:scale-95 duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-primary-container">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
            aria-label="GitHub"
          >
            <Icon
              name="code"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Icon
              name="badge"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Icon
              name="mail"
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </a>

          <div className="w-9 h-9 rounded-full overflow-hidden border border-primary-container/50 bg-primary-container text-on-primary-fixed flex items-center justify-center font-black text-xs">
            {profile.initials}
          </div>
        </div>
      </div>
    </header>
  );
}
