import { profile } from "./data/portfolio";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MobileBottomNav from "./components/layout/MobileBottomNav";
import Hero from "./components/sections/Hero";
// import Highlights from "./components/sections/Highlights";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import { SkillSignals, SkillStack } from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <div className="min-h-screen bg-background text-on-background">
      <div className="fixed inset-0 grid-overlay pointer-events-none opacity-40 z-0" />

      <div className="relative z-10">
        <Header />

        <div className="flex flex-row w-full max-w-[1700px] mx-auto">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 min-w-0 p-4 md:p-8 pb-28 md:pb-8 flex flex-col md:flex-row  gap-8">
            <div className="min-w-[80%] space-y-8 flex flex-col gap-8">
              <Hero />
              {/* <Highlights /> */}
              {activeTab === "experience" && <Experience />}
              {activeTab === "projects" && <Projects />}
            </div>

            <aside className="min-w-[20%] space-y-8 flex flex-col gap-8">
              <SkillSignals />
              <Education />
              <Contact />
              <SkillStack />
            </aside>
          </main>

          <div></div>
        </div>

        <footer className="relative z-10 border-t border-white/10 bg-black/30 py-8  px-6 pb-28 md:pb-8">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left ">
            <p className="text-xs text-on-surface-variant ">
              Â© 2026 {profile.name}. Built with React, Vite, and Tailwind CSS.
            </p>

            <p className="text-xs text-primary-container font-technical-sm uppercase tracking-[0.25em]">
              Fullstack Developer // Cairo, Egypt
            </p>
          </div>
        </footer>

        <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
