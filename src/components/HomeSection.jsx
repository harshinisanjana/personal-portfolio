import { ArrowRight, Star } from "lucide-react";

export const HomeSection = () => {
  return (
    <section 
      id="hero" 
      className="newsprint-section border-x-1 lg:border-x-0 pt-16 lg:pt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        {/* Main Headline — Left Column (8 cols) */}
        <div className="lg:col-span-8 lg:pr-12 lg:border-r-1 border-ink-black h-full flex flex-col justify-start">
          <div className="flex items-center gap-2 mb-4 bg-editorial-red text-white px-2 py-0.5 self-start scale-90 origin-left">
            <Star size={12} fill="currentColor" />
            <span className="newsprint-label text-[10px] tracking-widest text-white">LATEST EDITION</span>
          </div>

          <h1 className="newsprint-display text-[#111111] leading-[0.85] mb-12">
            DESIGNING <br />
            <span className="italic">THE FUTURE</span> <br />
            OF WEB.
          </h1>

          <div className="max-w-xl">
            <p className="drop-cap justified text-lg mb-8 font-serif-body">
              Harshini Sanjana is an M.Sc Software Systems student at PSG College of Technology, specializing in Full-Stack Development, AI/ML, and Data Analytics. With a deep passion for building scalable solutions, she combines technical precision with artistic editorial design systems to create unique, high-impact web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 border-t-1 border-ink-black">
              <a href="#projects" className="newsprint-btn">
                VIEW RECENT WORK <ArrowRight size={14} />
              </a>
              <a href="#contact" className="newsprint-btn newsprint-btn-outline">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar / Featurette — Right Column (4 cols) */}
        <div className="lg:col-span-4 lg:pl-12 flex flex-col gap-10">
          <div className="pb-8 border-b-1 border-ink-black border-dashed">
            <div className="newsprint-label text-neutral-500 mb-2">FIG 1.0 — PROFILE</div>
            <div className="aspect-[4/5] bg-neutral-200 newsprint-image relative overflow-hidden flex items-center justify-center">
               <img src="/personal-portfolio/project/pic.jpeg" alt="Harshini Sanjana" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
            </div>
            <p className="newsprint-mono mt-3 italic text-neutral-500 text-center uppercase tracking-widest leading-relaxed">
              M.Sc Software Systems / Full-Stack Dev / AI-ML enthusiast
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="newsprint-label border-b-1 border-ink-black pb-1">CURRENT STATUS</h3>
            <div className="flex flex-col gap-4">
              <div className="border-l-4 border-editorial-red pl-4">
                <p className="newsprint-mono font-bold leading-tight">ACTIVE PROJECTS</p>
                <p className="text-xs italic">Working on specialized AI-driven platforms and experimental UI systems.</p>
              </div>
              <div className="border-l-4 border-divider-grey pl-4">
                <p className="newsprint-mono font-bold leading-tight text-neutral-500">OPEN TO WORK</p>
                <p className="text-xs italic text-neutral-400">Seeking opportunities in Frontend Engineering and Data Science.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-20 border-y-4 border-ink-black overflow-hidden bg-ink-black py-3">
        <div className="whitespace-nowrap flex gap-12 animate-[marquee_30s_linear_infinite]">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex gap-12 items-center">
               <span className="text-white font-mono-data text-sm uppercase tracking-widest flex items-center gap-4">
                <span className="bg-editorial-red text-white px-2 text-xs font-bold">LIVE</span> 
                REACT.JS / NODE.JS / EXPRESS / MYSQL / AI-ML / DATA ANALYTICS / NEWS DEVICES / COIMBATORE INSTITUTE OF TECHNOLOGY
              </span>
              <span className="text-white font-mono-data text-sm opacity-50">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};