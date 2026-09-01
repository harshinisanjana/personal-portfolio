import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HomeView } from "../components/HomeView";
import { ProjectsView } from "../components/ProjectsView";
import { AboutView } from "../components/AboutView";
import { ContactView } from "../components/ContactView";
import { ProjectModal } from "../components/ProjectModal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Home = () => {
  const [activeView, setActiveView] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync initial hash if present (e.g. #projects, #about, #contact)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["home", "projects", "about", "contact"].includes(hash)) {
        setActiveView(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleNavigate = (viewId) => {
    setActiveView(viewId);
    window.location.hash = viewId === "home" ? "" : viewId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInspectProject = (project) => {
    setSelectedProject(project);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] flex flex-col font-sans antialiased selection:bg-white selection:text-black">
      {/* Sticky Header */}
      <Navbar activeView={activeView} setActiveView={handleNavigate} />

      {/* Main Single-Column Focused Measure (max-w-[760px] matching shashwa7.in) */}
      <main className="flex-1 w-full max-w-[760px] mx-auto px-6 pb-20">
        {activeView === "home" && (
          <HomeView
            onNavigate={handleNavigate}
            onInspectProject={handleInspectProject}
          />
        )}

        {activeView === "projects" && (
          <ProjectsView
            onInspectProject={handleInspectProject}
          />
        )}

        {activeView === "about" && (
          <AboutView />
        )}

        {activeView === "contact" && (
          <ContactView />
        )}
      </main>

      {/* Minimal Bottom Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-xs font-mono text-[#71717a]">
        <div className="max-w-[760px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>Coimbatore, India</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigate("home")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => handleNavigate("about")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate("projects")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigate("contact")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Contact
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-0.5 cursor-pointer ml-2"
            >
              <span>Top</span>
              <ArrowUp size={11} />
            </button>
          </div>
        </div>
      </footer>

      {/* Project Case Study Reader Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
