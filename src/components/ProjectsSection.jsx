import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DevHive — Developer Community Platform",
    description:
      "Full-stack platform for developer collaboration with project discovery and application workflows. Secure JWT-based role access, file uploads, and a dashboard for project owners.",
    tags: ["Vite+React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/harshinisanjana/DevHive",
    accent: "#D02020",
    shape: "square",
  },
  {
    id: 2,
    title: "Lung Cancer Detection Model",
    description:
      "Deep learning model for early-stage lung cancer detection from medical images with 75% accuracy. Uses transfer learning with pre-trained CNNs.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/harshinisanjana/Lung-Cancer-Detection-Model",
    accent: "#1040C0",
    shape: "circle",
  },
  {
    id: 3,
    title: "Hospital Patient Management System",
    description:
      "Hospital system with patient registration, doctor assignment, time-slot scheduling, searchable records, and daily admission/discharge reports.",
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    githubUrl:
      "https://github.com/harshinisanjana/Hospital-Patient-Management-System",
    accent: "#F0C020",
    shape: "triangle",
  },
  {
    id: 4,
    title: "Menstrual Cycle Tracker",
    description:
      "Cycle tracker with user login, period prediction, and hormone insights. Visualized cycle data using Matplotlib charts on a responsive dashboard.",
    tags: ["Python", "Flask", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/harshinisanjana/menstrual-cycle-tracker",
    accent: "#D02020",
    shape: "circle",
  },
  {
    id: 5,
    title: "Vehicle Token Dispensing System",
    description:
      "Web-based parking system with token generation, slot display, and admin controls. Integrated real-time updates, verification, and customer data tracking.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl:
      "https://github.com/harshinisanjana/vehicle_token_dispensing_system",
    accent: "#1040C0",
    shape: "square",
  },
];

const CornerShape = ({ shape, color }) => {
  if (shape === "circle")
    return (
      <div
        className="w-4 h-4 rounded-full border-2 border-[#121212]"
        style={{ backgroundColor: color }}
      />
    );
  if (shape === "triangle")
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: `16px solid ${color}`,
        }}
      />
    );
  return (
    <div
      className="w-4 h-4 border-2 border-[#121212]"
      style={{ backgroundColor: color }}
    />
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bauhaus-section bg-[#F0F0F0]"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="border-b-4 border-[#121212] px-6 sm:px-10 lg:px-16 py-10 flex items-end gap-6">
        <div className="w-2 bg-[#1040C0]" style={{ height: "64px" }} />
        <div>
          <p className="bauhaus-label text-[#1040C0] mb-1">04 — Work</p>
          <h2
            id="projects-heading"
            className="bauhaus-display text-4xl sm:text-5xl lg:text-6xl text-[#121212]"
          >
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <p className="font-medium text-[#121212]/60 mb-12 max-w-2xl text-sm leading-relaxed">
          Each project was carefully crafted with attention to detail,
          performance, and real-world impact.
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bauhaus-card p-6 flex flex-col justify-between relative group"
            >
              {/* Corner geometric decoration */}
              <div className="absolute top-4 right-4">
                <CornerShape shape={project.shape} color={project.accent} />
              </div>

              <div>
                {/* Accent top bar */}
                <div
                  className="w-12 h-1 mb-5"
                  style={{ backgroundColor: project.accent }}
                />

                <h3 className="bauhaus-heading text-base text-[#121212] mb-3 pr-6 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-[#121212]/65 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bauhaus-label text-[9px] px-2 py-1 bg-[#F0C020] border border-[#121212] text-[#121212]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bauhaus-btn text-xs py-2 px-4 self-start"
                style={{
                  backgroundColor: project.accent,
                  color: project.accent === "#F0C020" ? "#121212" : "#fff",
                }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={14} />
                GitHub
                <ArrowRight size={12} />
              </a>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <a
            href="https://github.com/harshinisanjana"
            target="_blank"
            rel="noopener noreferrer"
            className="bauhaus-btn bauhaus-btn-blue"
          >
            <Github size={18} />
            View All on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
