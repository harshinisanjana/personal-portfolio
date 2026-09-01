import React, { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

export const ProjectsView = ({ onInspectProject }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    { id: "ALL", label: "All" },
    { id: "AI", label: "AI & Vision" },
    { id: "FULLSTACK", label: "Full-Stack" },
    { id: "SYSTEMS", label: "Systems & Java" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI") return project.category.includes("AI") || project.category.includes("ML") || project.category.includes("Health");
    if (activeFilter === "FULLSTACK") return project.category.includes("Full-Stack") || project.category.includes("Frontend") || project.category.includes("Web");
    if (activeFilter === "SYSTEMS") return project.category.includes("Systems") || project.category.includes("Java");
    return true;
  });

  return (
    <div className="pt-8 sm:pt-14 space-y-12 view-enter">
      {/* Header */}
      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <p className="text-[11px] uppercase tracking-widest font-mono text-[#71717a]">
          PROJECTS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ededed] tracking-tight">
          Things I've built
        </h1>
        <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-2xl">
          A collection of full-stack web applications, backend tools, and AI/ML projects.
        </p>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-3 pt-3 text-xs">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`cursor-pointer transition-colors ${activeFilter === f.id
                ? "text-white font-semibold underline underline-offset-4"
                : "text-[#a1a1aa] hover:text-white"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-white/[0.08]">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="py-7 first:pt-0 last:pb-0 space-y-3 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs text-[#71717a]">
                  {project.number}
                </span>
                <h2
                  onClick={() => onInspectProject(project)}
                  className="text-lg sm:text-xl font-bold text-[#ededed] group-hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{project.title}</span>
                </h2>
                <span className="inline-flex items-center rounded border border-white/[0.08] bg-[#18181b] px-1.5 py-0.2 font-mono text-[10px] text-[#71717a]">
                  {project.category}
                </span>
              </div>
              <span className="text-xs font-mono text-[#71717a]">
                {project.timeline}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Tech Stack & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/[0.05]">
              <div className="text-xs text-[#71717a] flex flex-wrap gap-x-2 gap-y-1 font-mono">
                {project.stack.map((tech, idx) => (
                  <span key={tech}>
                    {tech}
                    {idx < project.stack.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-medium shrink-0">
                <button
                  onClick={() => onInspectProject(project)}
                  className="text-white hover:underline cursor-pointer transition-colors"
                >
                  Details & architecture →
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a1a1aa] hover:text-white flex items-center gap-0.5 transition-colors font-mono"
                  >
                    <span>Code</span>
                    <ArrowUpRight size={11} className="opacity-70" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline flex items-center gap-0.5 transition-colors font-mono"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight size={11} className="opacity-70" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
