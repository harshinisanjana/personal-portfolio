import { GraduationCap, Briefcase, FileText, Newspaper } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="newsprint-section border-x-1 lg:border-x-0 relative">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-ink-black pb-4 mb-12">
        <h2 className="text-5xl lg:text-7xl">EDITORIAL.</h2>
        <div className="newsprint-label text-editorial-red flex items-center gap-2 mb-2">
          <span>SEC. 02 — BIOGRAPHY</span>
          <Newspaper size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Main Bio Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
                <p className="newsprint-mono uppercase tracking-[0.2em] font-black text-editorial-red text-[10px]">
                FEATURE / CORE COMPETENCIES
              </p>
              <p className="drop-cap justified leading-relaxed font-serif-body text-neutral-700">
                With a rigorous academic background in Software Systems from Coimbatore Institute of Technology, Harshini Sanjana navigates the complexities of modern engineering with a focus on Full-Stack systems and AI-ML integration. Her approach is characterized by absolute clarity and structural integrity, much like the print systems of record.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="justified leading-relaxed font-serif-body text-neutral-700">
                She doesn't just build applications; she architects digital journals that tell a story through data and clean code. Every project is a new edition, a fresh opportunity to refine the hierarchy of information and solve real-world problems with high-contrast precision and mechanical efficiency.
              </p>
              <div className="mt-4 p-4 border-1 border-ink-black bg-[#F5F5F3] newsprint-texture">
                <p className="newsprint-mono italic text-[11px] text-center">
                  "Code is meant to be read as much as it is to be executed."
                </p>
              </div>
            </div>
          </div>

          {/* Education - Classifieds Style */}
          <div className="mt-8">
            <h3 className="newsprint-label border-b-2 border-ink-black pb-1 mb-6 flex items-center gap-2">
              <GraduationCap size={16} /> ACADEMIC RECORD
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-1 border-t-1 border-ink-black">
               {[
                { year: "2021 — 26", degree: "M.Sc Software Systems", org: "Coimbatore Institute of Technology", loc: "Coimbatore" },
                { year: "2019 — 21", degree: "Higher Secondary", org: "AVB Matric Hr Sec School", loc: "Coimbatore" },
                { year: "2018 — 19", degree: "Secondary Education", org: "AVB Matric Hr Sec School", loc: "Coimbatore" }
              ].map((item, i) => (
                <div key={i} className="p-6 border-r-1 border-b-1 border-ink-black hover:bg-neutral-100 transition-colors">
                  <span className="newsprint-mono text-editorial-red font-bold">{item.year}</span>
                  <h4 className="font-serif-display font-bold text-lg leading-tight mt-1">{item.degree}</h4>
                  <p className="newsprint-label text-[9px] mt-2 text-neutral-500">{item.org}</p>
                  <p className="newsprint-mono text-[9px] italic mt-1">{item.loc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Experience (4 cols) */}
        <div className="lg:col-span-4 border-l-1 border-ink-black pl-0 lg:pl-12 flex flex-col gap-12">
          <div>
            <h3 className="newsprint-label border-b-2 border-ink-black pb-1 mb-6 flex items-center gap-2">
              <Briefcase size={16} /> FIELD EXPERIENCE
            </h3>
            <div className="flex flex-col">
              {[
                { role: "Frontend Intern", company: "Z-Square", period: "May 2024 — June 2024", desc: "Crafting editorial web systems with React and Tailwind CSS." },
                { role: "Software Researcher", company: "PSG Tech", period: "Ongoing", desc: "Exploring the intersections of Data Science and UI design." }
              ].map((item, i) => (
                <div key={i} className="py-6 border-b-1 border-ink-black last:border-b-0">
                  <span className="newsprint-mono text-[10px] text-neutral-500">{item.period}</span>
                  <h4 className="font-serif-display font-bold text-xl leading-tight mt-1">{item.role}</h4>
                  <p className="newsprint-label text-[10px] mb-3">{item.company}</p>
                  <p className="text-sm italic text-neutral-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Box */}
          <div className="border-4 border-ink-black p-6 bg-ink-black text-newsprint-bg">
            <h3 className="newsprint-label text-editorial-red mb-4">PRODUCTION METRICS</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end border-b-1 border-newsprint-bg/20 pb-1">
                <span className="newsprint-mono">LANGUAGES</span>
                <span className="font-serif-display text-2xl">08+</span>
              </div>
              <div className="flex justify-between items-end border-b-1 border-newsprint-bg/20 pb-1">
                <span className="newsprint-mono">FRAMEWORKS</span>
                <span className="font-serif-display text-2xl">05+</span>
              </div>
              <div className="flex justify-between items-end border-b-1 border-newsprint-bg/20 pb-1">
                <span className="newsprint-mono">PROJECTS</span>
                <span className="font-serif-display text-2xl">12+</span>
              </div>
            </div>
            <a 
              href="/personal-portfolio/project/_HARSHINI_SANJANA_J_RESUME.pdf" 
              download 
              className="mt-8 w-full border-1 border-newsprint-bg py-2 newsprint-label hover:bg-newsprint-bg hover:text-ink-black transition-all flex items-center justify-center gap-2"
            >
              <FileText size={14} /> DOWNLOAD FULL RECORD
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};