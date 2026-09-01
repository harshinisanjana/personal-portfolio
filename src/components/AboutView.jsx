import React from "react";
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE, EDUCATION } from "../data/portfolioData";
import { Download } from "lucide-react";

export const AboutView = () => {
  return (
    <div className="pt-8 sm:pt-14 space-y-16 view-enter">
      {/* Header & Bio */}
      <section className="space-y-6 border-b border-white/[0.08] pb-10">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-widest font-mono text-[#71717a]">
            ABOUT ME
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ededed] tracking-tight">
            A little background
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
          <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
            <p>
              Hi, I'm Harshini Sanjana. I'm currently studying in the 5-year Integrated M.Sc. Software Systems program at{" "}
              Coimbatore Institute of Technology.
            </p>
            <p>
              I got into programming because I liked figuring out what was happening behind the screen. That eventually turned into building full-stack applications, backend systems, AI/ML projects, and random tools whenever I have an idea I want to try.
            </p>
            <p>
              I enjoy working on practical problems, writing things cleanly, and figuring out why something isn't working when it inevitably breaks. These days, I'm spending a lot of time grinding DSA and system design, while still building projects and exploring new tools.
            </p>
            <p>
              Outside of code, I'm usually watching F1, listening to music, or going down some completely unrelated rabbit hole.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs font-medium">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="text-[#ededed] hover:underline flex items-center gap-1.5 transition-colors"
              >
                <Download size={13} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Details Sidebar */}
          <div className="md:col-span-4 space-y-4 text-xs text-[#a1a1aa] border-l border-white/[0.08] pl-6 font-sans">
            <div>
              <span className="font-semibold text-[#ededed] block mb-1">
                Location
              </span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div>
              <span className="font-semibold text-[#ededed] block mb-1">
                College
              </span>
              <span>M.Sc Software Systems (5-Yr Integrated)</span>
              <span className="block text-[#71717a]">Coimbatore Institute of Technology</span>
            </div>

            <div>
              <span className="font-semibold text-[#ededed] block mb-1">
                Interests
              </span>
              <span>Full-Stack Development, AI/ML, GenAI, SaaS, Data Systems </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-[#ededed]">
          Experience
        </h2>

        <div className="divide-y divide-white/[0.08]">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="py-5 first:pt-0 last:pb-0 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-semibold text-[#ededed]">
                    {exp.role} · {exp.company}
                  </h3>
                  <span className="text-xs text-[#71717a]">
                    {exp.type} — {exp.location}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#71717a]">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5 text-xs text-[#a1a1aa] list-disc list-inside">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>

              <div className="text-xs text-[#71717a] pt-1">
                <span className="font-medium text-[#d1d2d6]">Stack: </span>
                {exp.technologies.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Milestones */}
      <section className="space-y-5 border-t border-white/[0.08] pt-10">
        <h2 className="text-xl font-bold text-[#ededed]">
          Education
        </h2>

        <div className="divide-y divide-white/[0.08]">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xs font-semibold text-[#ededed]">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-[#71717a]">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs text-[#71717a]">
                {edu.institution} · {edu.location}
              </p>
              <p className="text-xs text-[#a1a1aa] pt-0.5 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Toolbox */}
      <section className="space-y-5 border-t border-white/[0.08] pt-10">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#ededed]">
            Technologies & Tools
          </h2>
          <p className="text-xs text-[#71717a]">
            Tools and languages I use for building.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/[0.08] bg-[#121215] space-y-2"
            >
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#ededed] font-mono">
                {cat.category}
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {cat.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
