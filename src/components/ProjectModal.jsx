import React, { useEffect } from "react";
import { X, Github, ExternalLink, ArrowUpRight } from "lucide-react";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md view-enter">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0d11] border border-white/[0.12] rounded-2xl shadow-2xl overflow-y-auto flex flex-col transition-colors text-[#ededed]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-[#0c0d11]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-white">
              Project {project.number}
            </span>
            <span className="text-xs text-[#52525b]">•</span>
            <span className="text-xs text-[#71717a] font-mono">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#71717a] hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Title and Summary */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#ededed]">
              {project.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#a1a1aa]">
              {project.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1 border-y border-white/[0.08] py-3 text-xs">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] hover:bg-white/[0.04] text-[#ededed] transition-colors font-mono"
              >
                <Github size={14} />
                <span>Source Code</span>
                <ArrowUpRight size={11} className="opacity-60" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold transition-colors font-mono"
              >
                <ExternalLink size={14} />
                <span>Live Site</span>
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
            )}
            <span className="ml-auto text-xs text-[#71717a] font-mono">
              {project.timeline}
            </span>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#71717a] font-mono mb-1">
                The Problem
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#71717a] font-mono mb-1">
                How It Works
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#71717a] font-mono mb-2">
                System Architecture
              </h3>
              <ul className="space-y-2">
                {project.architecture.map((step, idx) => (
                  <li
                    key={idx}
                    className="text-xs leading-relaxed text-[#a1a1aa] flex items-start gap-2.5 p-3 rounded-lg bg-[#141417] border border-white/[0.05]"
                  >
                    <span className="font-mono text-white text-[11px] shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Decisions */}
          {project.keyDecisions && (
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#71717a] font-mono mb-1.5">
                Key Technical Decisions
              </h3>
              <ul className="space-y-1.5 text-xs leading-relaxed text-[#a1a1aa] list-disc list-inside">
                {project.keyDecisions.map((decision, idx) => (
                  <li key={idx} className="pl-1">
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="pt-2 border-t border-white/[0.08]">
            <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#71717a] font-mono mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#141417] text-[#d1d2d6] border border-white/[0.06] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
