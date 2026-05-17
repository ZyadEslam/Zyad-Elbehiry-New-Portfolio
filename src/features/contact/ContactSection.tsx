import { memo } from "react";
import { profile } from "../../data/portfolio.ts";
import Icon from "../../components/ui/Icon.tsx";

const ContactSection = memo(function ContactSection() {
  return (
    <section id="contact" className="glass-panel rounded-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 blur-[60px] rounded-full" />

      <div className="relative">
        <h3 className="font-headline-md text-sm mb-6 flex items-center justify-between text-primary">
          Contact Node
          <Icon name="alternate_email" className="text-secondary-container text-lg" />
        </h3>

        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3 hover:border-primary-container/40 hover:text-primary-container transition-all"
          >
            <Icon name="mail" className="text-primary-container" />
            <span className="text-sm break-all">{profile.email}</span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3 hover:border-primary-container/40 hover:text-primary-container transition-all"
          >
            <Icon name="call" className="text-primary-container" />
            <span className="text-sm">{profile.phone}</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3 hover:border-primary-container/40 hover:text-primary-container transition-all"
          >
            <Icon name="code" className="text-primary-container" />
            <span className="text-sm break-all">{profile.githubLabel}</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 p-3 hover:border-secondary-container/40 hover:text-secondary-container transition-all"
          >
            <Icon name="badge" className="text-secondary-container" />
            <span className="text-sm break-all">{profile.linkedinLabel}</span>
          </a>
        </div>

        <div className="mt-6 rounded-lg overflow-hidden bg-[#0d1117] border border-white/10">
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container/60" />
            </div>

            <span className="text-[10px] font-mono text-zinc-500">contact.sh</span>
          </div>

          <div className="p-4 overflow-x-auto font-mono text-[12px] leading-relaxed scrollbar-thin">
            <p className="text-zinc-400">
              <span className="text-primary-container">root@portfolio:~$</span>{" "}
              connect zyad
            </p>

            <p className="text-zinc-400">
              <span className="text-secondary-container">status:</span>{" "}
              ready_to_build
            </p>

            <p className="text-zinc-400">
              <span className="text-secondary-container">stack:</span> nextjs react node mongodb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
