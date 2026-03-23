import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DevHive — Developer Community Platform",
    description:
      "A full-stack ecosystem designed for developer collaboration. Features include JWT-based role access, project discovery, and a streamlined application workflow. Built for scale and technical precision.",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MYSQL"],
    githubUrl: "https://github.com/harshinisanjana/DevHive",
    category: "FEATURE / FULL-STACK",
    date: "MARCH 2024",
  },
  {
    id: 2,
    title: "Lung Cancer Detection Model",
    description:
      "Deep learning implementation for early-stage detection with 75% accuracy. Utilizes transfer learning with CNNs for high-resolution medical image analysis. A study in computational medicine.",
    tags: ["PYTHON", "TENSORFLOW", "KERAS", "NUMPY"],
    githubUrl: "https://github.com/harshinisanjana/Lung-Cancer-Detection-Model",
    category: "RESEARCH / AI-ML",
    date: "JAN 2024",
  },
  {
    id: 3,
    title: "Hospital Patient Management System",
    description:
      "A heavy-duty Java Swing application for clinical administration. Manages doctor-patient mapping, registration, and report generation with database-driven reliability.",
    tags: ["JAVA", "SWING", "MYSQL", "JDBC"],
    githubUrl: "https://github.com/harshinisanjana/Hospital-Patient-Management-System",
    category: "INFRASTRUCTURE / JAVA",
    date: "DEC 2023",
  },
  {
    id: 4,
    title: "Menstrual Cycle Tracker",
    description:
      "A health-tech journal for cycle prediction and hormone insights. Leveraged Flask and Matplotlib for data visualization, providing a private dashboard for longitudinal health tracking.",
    tags: ["PYTHON", "FLASK", "MYSQL", "HTML"],
    githubUrl: "https://github.com/harshinisanjana/menstrual-cycle-tracker",
    category: "HEALTH / DATA",
    date: "NOV 2023",
  },
  {
    id: 5,
    title: "Vehicle Token Systems",
    description:
      "Automated token dispensing and slot management for high-density parking infrastructures. Built with PHP and JavaScript for real-time inventory tracking and customer flow.",
    tags: ["PHP", "JS", "MYSQL", "HTML"],
    githubUrl: "https://github.com/harshinisanjana/vehicle_token_dispensing_system",
    category: "IOT / WEB PLATFORM",
    date: "OCT 2023",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="newsprint-section border-x-1 lg:border-x-0 relative">
      {/* Editorial Page Header */}
      <div className="border-y-4 border-ink-black py-4 mb-16 flex justify-between items-center bg-newsprint-bg sticky top-[180px] z-30">
        <h2 className="newsprint-display text-4xl md:text-5xl">THE PORTFOLIO.</h2>
        <div className="hidden md:block newsprint-mono text-[10px] tracking-widest opacity-40">
           SECTION: WORKS / ED. 01 — PROJECTS — LATEST
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-1 border-t-1 border-ink-black">
        {projects.map((project, i) => (
          <article 
            key={project.id} 
            className="flex flex-col border-r-1 border-b-1 border-ink-black group bg-newsprint-bg hover:bg-white transition-all duration-300"
          >
            {/* Project Header */}
            <div className="p-6 border-b-1 border-ink-black">
              <div className="flex justify-between items-start mb-4">
                <span className="newsprint-mono text-editorial-red text-[10px] bg-neutral-100 px-1 border-1 border-divider-grey">
                  {project.category}
                </span>
                <span className="newsprint-mono text-neutral-400 text-[9px]">{project.date}</span>
              </div>
              <h3 className="font-serif-display font-black text-2xl group-hover:text-editorial-red transition-colors leading-tight min-h-[3.5rem]">
                {project.title}
              </h3>
            </div>

            {/* Project Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="justified text-sm font-serif-body text-neutral-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="newsprint-mono text-[9px] border-b-1 border-divider-grey pb-0.5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial CTAs */}
              <div className="flex border-t-1 border-ink-black pt-6 gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="newsprint-btn px-4 py-1.5 text-[10px] flex-1 justify-center"
                >
                  <Github size={12} />
                  REPOSITORY
                </a>
                <button className="newsprint-btn newsprint-btn-outline p-2 transition-all hover:bg-editorial-red hover:text-white hover:border-editorial-red">
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Featured Footer Advertisement / CTA */}
      <div className="mt-20 p-12 border-4 border-ink-black bg-white flex flex-col md:flex-row items-center gap-12 newsprint-texture hard-shadow-hover transition-all">
         <div className="md:w-1/3">
            <h4 className="newsprint-display text-4xl leading-tight">CRAFTING CUSTOM <br /><span className="text-editorial-red italic">SOLUTIONS</span>.</h4>
         </div>
         <div className="md:w-2/3 border-l-0 md:border-l-1 md:pl-12 border-ink-black border-dashed">
            <p className="font-serif-body text-lg justified mb-6">
              Need a bespoke technical implementation that matches your brand's authority? My editorial design process ensures every line of code is as fit to run as it is to read.
            </p>
            <a href="#contact" className="newsprint-btn self-start group">
               ESTABLISH CORRESPONDENCE <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
         </div>
      </div>
    </section>
  );
};
