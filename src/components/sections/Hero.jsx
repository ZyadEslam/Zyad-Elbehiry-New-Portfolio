import { profile } from "../../data/portfolio";
import Chip from "../../ui/Chip";
import Icon from "../../ui/Icon";

export default function Hero() {
  return (
    <section
      id="home"
      className="glass-panel rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-container/10 blur-[70px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-container/10 blur-[80px] rounded-full" />

      <div className="relative shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary-container via-primary-container/15 to-transparent animate-pulse">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-surface bg-surface-container flex items-start justify-center">
            {/* <img src="https://res.cloudinary.com/darxwbvff/image/upload/v1776096915/My_photo-Photoroom_lv2kmv.png" alt="" /> */}
            <img
              src="https://res.cloudinary.com/darxwbvff/image/upload/v1778320616/My_photo_oz7voc.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          Fullstack
        </div>
      </div>

      <div className="flex-1 text-center md:text-left relative">
        <h1 className="font-headline-lg text-xl md:text-3xl text-primary mb-1 tracking-tight">
          {profile.name}
        </h1>

        <p className="text-on-surface-variant text-sm font-body-base md:text-justify">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
          <Chip>
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            Open to Opportunities
          </Chip>

          <Chip variant="cyan">
            <Icon name="location_on" className="text-sm" />
            {profile.location}
          </Chip>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center md:justify-start">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary-container text-on-primary-fixed font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_22px_rgba(195,244,0,0.25)] transition-all"
          >
            <Icon name="mail" className="text-sm" />
            Email Me
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:text-primary-container hover:border-primary-container/40 transition-all font-bold uppercase tracking-widest text-xs"
          >
            <Icon name="code" className="text-sm" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:text-secondary-container hover:border-secondary-container/40 transition-all font-bold uppercase tracking-widest text-xs"
          >
            <Icon name="badge" className="text-sm" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
