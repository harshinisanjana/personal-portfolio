import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DevHive - Developer Community Platform",
    description:
      "Developed a full-stack platform for developer collaboration with project discovery and application workflows. Implemented secure JWT-based role access and file uploads for portfolio submissions. Built a dashboard for project owners to track applications, manage decisions, and monitor real-time status.",
    tags: ["Vite+React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/harshinisanjana/DevHive",
  },
  {
    id: 2,
    title: "Lung Cancer Detection Model",
    description:
      "Built a deep learning model for early-stage lung cancer detection from medical images with 75% accuracy. Applied transfer learning with pre-trained CNNs to boost accuracy and efficiency.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/harshinisanjana/Lung-Cancer-Detection-Model",
  },
  {
    id: 3,
    title: "Hospital Patient Management System",
    description:
      "Built a hospital system with patient registration and doctor assignment. Added time-slot scheduling, searchable records, and daily admission/discharge reports.",
    tags: ["Java", "Swing", "MySql", "JDBC"],
    githubUrl: "https://github.com/harshinisanjana/Hospital-Patient-Management-System",
  },
  {
    id: 4,
    title: "Menstural Cycle Tracker",
    description:
      "Developed a cycle tracker with user login, period prediction, and hormone insights. Visualized cycle data using Matplotlib charts on a responsive dashboard.",
    tags: ["Python", "Flask", "MySql", "HTML", "CSS"],
    githubUrl: "https://github.com/harshinisanjana/menstrual-cycle-tracker",
  },
  {
    id: 5,
    title: "Vehicle Token Dispensing System",
    description:
      "Created a web-based parking system with token generation, slot display, and admin controls. Integrated real-time updates, parking verification, and customer data tracking.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/harshinisanjana/vehicle_token_dispensing_system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 text-center cosmic-text"
              style={{
                lineHeight: "1.2",
                paddingBottom: "0.15em",
                fontFamily: "Segoe UI, sans-serif",
              }}
            >
              Featured{" "}
              <span className="cosmic-text whitespace-nowrap">Projects</span>
            </h2>
          </div>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* changed from grid of cards → simple vertical list */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border-b border-border/40 pb-6 last:border-b-0"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink size={18} />
                    <span>Live demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/harshinisanjana"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
            <button className="relative px-8 py-4 bg-black rounded-full text-white font-medium flex items-center gap-3 hover:scale-105 transition-transform">
              <Github className="w-5 h-5" />
              Check My Github
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
