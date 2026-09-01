import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, EDUCATION, SKILL_CATEGORIES } from "../data/portfolioData";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Check,
  Briefcase,
  Layers,
  GraduationCap,
  Code2,
  ExternalLink,
  Github,
} from "lucide-react";

export const HomeView = ({ onNavigate, onInspectProject }) => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setTimeString(`${formatted} IST`);
    };

    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-20 view-enter">
      {/* 1. HERO SECTION */}
      <header className="pt-8 sm:pt-14 space-y-6 sm:space-y-7">
        {/* Top Profile Bar */}
        <div className="flex items-start gap-4">
          {/* Avatar with Open Badge */}
          <div className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/[0.1] shadow-lg bg-[#141417]">
            <div className="h-16 w-16 overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}image.jpg`}
                alt={PERSONAL_INFO.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute inset-x-0 bottom-0 block overflow-hidden">
              <span className="flex items-center justify-center gap-1 bg-black/80 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-white backdrop-blur-[2px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open</span>
              </span>
            </span>
          </div>

          {/* Identity & Metadata */}
          <div className="flex min-h-[4rem] flex-col justify-between">
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-[#ededed]">
                {PERSONAL_INFO.name}
              </h1>
              <span
                className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white text-black"
                title="Verified Student Developer"
              >
                <Check size={10} strokeWidth={3} />
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
                Software Developer · Full-Stack · AI
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#71717a]">
              <span>Coimbatore, India</span>
              <span>·</span>
              <span className="text-[#a1a1aa] tabular-nums font-medium">
                {timeString || "12:00 PM IST"}
              </span>
            </div>
          </div>
        </div>

        {/* Main Statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#ededed]">
          I build things, experiment with ideas, and turn them into working systems.
        </h2>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-[64ch]">
          I'm an Integrated M.Sc. Software Systems student at{" "}
          <strong className="text-[#ededed] font-medium">
            Coimbatore Institute of Technology
          </strong>
          . Most of what I learn ends up becoming a project somehow. Reach me at{" "}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-white hover:underline font-medium"
          >
            {PERSONAL_INFO.email}
          </a>
          .
        </p>

        {/* Metric Snapshot Grid */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08]">
            <div className="bg-[#121215] px-4 py-3.5 flex flex-col justify-between">
              <div className="text-2xl font-bold text-[#ededed]">07+</div>
              <div className="text-xs text-[#71717a] mt-0.5">projects built</div>
            </div>
            <div className="bg-[#121215] px-4 py-3.5 flex flex-col justify-between">
              <div className="text-2xl font-bold text-[#ededed]">15+</div>
              <div className="text-xs text-[#71717a] mt-0.5">technologies used</div>
            </div>
            <div className="bg-[#121215] px-4 py-3.5 flex flex-col justify-between">
              <div className="text-2xl font-bold text-[#ededed]">02+</div>
              <div className="text-xs text-[#71717a] mt-0.5">projects In Progress</div>
            </div>
          </div>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-black transition-transform duration-150 ease-out hover:bg-zinc-200 active:scale-[0.97] cursor-pointer"
          >
            <span>View selected work</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] bg-[#121215] hover:bg-[#18181b] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#ededed] transition-transform duration-150 ease-out active:scale-[0.97]"
          >
            <Mail size={14} />
            <span>Get in touch</span>
          </a>
        </div>
      </header >

      {/* 2. SECTION 01: EXPERIENCE & WORK */}
      < section className="space-y-6 pt-6 border-t border-white/[0.08]" >
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
            <span className="text-[#ededed] font-semibold">01</span> / Experience
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#ededed] tracking-tight">
            Where I've worked
          </h3>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-px before:bg-white/[0.1]">
              {/* Dot marker */}
              <span className="absolute left-[5px] top-2 h-2 w-2 rounded-full bg-white ring-4 ring-[#09090b]"></span>

              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h4 className="text-base font-bold text-[#ededed]">{exp.company}</h4>
                  <span className="text-xs font-mono text-[#71717a]">· {exp.role}</span>
                  <span className="inline-flex items-center rounded border border-white/[0.1] px-1.5 py-0.2 text-[10px] font-mono text-[#a1a1aa]">
                    {exp.type}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#71717a]">
                  {exp.period} · {exp.location}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded border border-white/[0.08] bg-[#141417] px-2 py-0.5 font-mono text-[11px] text-[#a1a1aa]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 text-xs text-[#a1a1aa] pt-2">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex gap-2 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#71717a]"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* 3. SECTION 02: SELECTED PROJECTS */}
      < section className="space-y-6 pt-6 border-t border-white/[0.08]" >
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
              <span className="text-[#ededed] font-semibold">02</span> / Projects
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#ededed] tracking-tight">
              Things I've built
            </h3>
          </div>
          <button
            onClick={() => onNavigate("projects")}
            className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <span>All 07 projects</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#121215] hover:border-white/[0.16] transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs font-semibold text-white">
                    {project.number}
                  </span>
                  <h4 className="text-lg font-bold text-[#ededed]">
                    {project.title}
                  </h4>
                  <span className="inline-flex items-center rounded border border-white/[0.08] bg-[#18181b] px-1.5 py-0.2 font-mono text-[10px] text-[#71717a]">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#71717a]">
                  {project.timeline}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {project.summary}
              </p>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded border border-white/[0.06] bg-[#18181b] px-2 py-0.5 font-mono text-[10px] text-[#a1a1aa]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => onInspectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline cursor-pointer"
                >
                  <Layers size={13} />
                  <span>How it works & technical details →</span>
                </button>

                <div className="flex items-center gap-3 text-xs font-mono">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a1a1aa] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Github size={13} />
                      <span>Code</span>
                      <ArrowUpRight size={11} className="opacity-60" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline flex items-center gap-1 font-medium transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>Live Site</span>
                      <ArrowUpRight size={11} className="opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section >

      {/* 4. SECTION 03: TECHNICAL CAPABILITIES */}
      < section className="space-y-6 pt-6 border-t border-white/[0.08]" >
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
            <span className="text-[#ededed] font-semibold">03</span> / Skills
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#ededed] tracking-tight">
            Technologies I work with
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/[0.08] bg-[#121215] space-y-2"
            >
              <div className="text-xs font-bold text-[#ededed] uppercase tracking-wider font-mono">
                {cat.category}
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {cat.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section >

      {/* 5. SECTION 04: ACADEMIC FOUNDATION */}
      < section className="space-y-6 pt-6 border-t border-white/[0.08]" >
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[#71717a]">
            <span className="text-[#ededed] font-semibold">04</span> / Education
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#ededed] tracking-tight">
            Education
          </h3>
        </div>

        <div className="space-y-4">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/[0.08] bg-[#121215] space-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#ededed]">{edu.degree}</h4>
                <span className="text-xs font-mono text-[#71717a]">{edu.period}</span>
              </div>
              <div className="text-xs text-[#71717a]">{edu.institution} · {edu.location}</div>
              <p className="text-xs text-[#a1a1aa] pt-1 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </section >

      {/* 6. SECTION 05: CONTACT & CONNECT */}
      < section className="pt-6 border-t border-white/[0.08] pb-4 space-y-4" >
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#121215] space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#ededed]">
              Want to chat or work together?
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-[50ch]">
              I'm always happy to talk about software projects, internships, or engineering in general.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              <Mail size={13} />
              <span>Email: {PERSONAL_INFO.email}</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white font-mono"
            >
              <Github size={13} />
              <span>GitHub ↗</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white font-mono"
            >
              <span>LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </section >
    </div >
  );
};
