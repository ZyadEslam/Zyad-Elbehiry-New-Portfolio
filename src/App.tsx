import { useState, lazy, Suspense } from "react";
import Header from "./components/layout/Header.tsx";
import Sidebar from "./components/layout/Sidebar.tsx";
import MobileBottomNav from "./components/layout/MobileBottomNav.tsx";
import HeroSection from "./features/hero/HeroSection.tsx";
import EducationSection from "./features/education/EducationSection.tsx";
import ContactSection from "./features/contact/ContactSection.tsx";
import { SkillSignals } from "./features/skills/SkillSignals.tsx";
import { SkillStack } from "./features/skills/SkillStack.tsx";

// Lazy loaded tab sections
const ExperienceSection = lazy(
  () => import("./features/experience/ExperienceSection.tsx"),
);
const ProjectsSection = lazy(
  () => import("./features/projects/ProjectsSection.tsx"),
);

function TabFallback() {
  return (
    <div className="w-full h-64 flex flex-col items-center justify-center glass-panel rounded-xl animate-pulse">
      <div className="w-12 h-12 rounded-full border-4 border-primary-container border-t-transparent animate-spin mb-4" />
      <p className="text-primary-container font-technical-sm uppercase tracking-widest text-xs">
        Loading module...
      </p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <div className="min-h-screen bg-background text-on-background">
      <div className="fixed inset-0 grid-overlay pointer-events-none opacity-40 z-0" />

      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-row w-full max-w-[1700px] mx-auto">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 min-w-0 p-4 md:p-8 pb-28 md:pb-8 flex flex-col md:flex-row gap-8">
            <div className="min-w-[60%] space-y-8 flex flex-col gap-8">
              <HeroSection />

              <Suspense fallback={<TabFallback />}>
                {activeTab === "experience" && <ExperienceSection />}
                {activeTab === "projects" && <ProjectsSection />}
              </Suspense>
            </div>

            <aside className="min-w-[20%] space-y-8 flex flex-col gap-8">
              <SkillSignals />
              <EducationSection />
              <ContactSection />
              <SkillStack />
            </aside>
          </main>
        </div>

        <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
