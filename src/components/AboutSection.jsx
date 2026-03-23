import { Briefcase, Code, User } from "lucide-react";

const skillCards = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Building efficient and scalable software solutions tailored to solve real-world problems.",
    accent: "#D02020", // Red
    shape: "square",
  },
  {
    icon: User,
    title: "Full Stack Development",
    description:
      "Creating responsive and dynamic web applications using modern frameworks and tools.",
    accent: "#1040C0", // Blue
    shape: "circle",
  },
  {
    icon: Briefcase,
    title: "Database Management",
    description:
      "Designing, managing, and analyzing databases to ensure data integrity and insights.",
    accent: "#F0C020", // Yellow
    shape: "triangle",
  },
];

const education = [
  {
    degree: "M.Sc Software Systems",
    institution: "Coimbatore Institute of Technology, Coimbatore",
    period: "2023 – 2028",
    accent: "#D02020",
    num: "01",
  },
  {
    degree: "HSC",
    institution: "Sri Chaitanya Techno School, Coimbatore",
    period: "2021 – 2023",
    accent: "#1040C0",
    num: "02",
  },
  {
    degree: "SSLC",
    institution: "Yuvabharathi Public School, Coimbatore",
    period: "2011 – 2021",
    accent: "#F0C020",
    num: "03",
  },
];

const experiences = [
  {
    title: "Joint Secretary at SDC-CIT",
    period: "May 2025 – Present",
    description:
      "Overseeing all student activities and events, ensuring smooth execution and engagement and mentoring junior members.",
    accent: "#D02020",
  },
  {
    title: "Video Editor at The Snippet",
    period: "Sep 2024 – Present",
    description:
      "Creating and editing engaging video content for various platforms, enhancing viewer experience and app growth.",
    accent: "#1040C0",
  },
  {
    title: "Media Production Lead at SDC-CIT",
    period: "Sep 2024 – Apr 2025",
    description:
      "Led the media production team in creating promotional content, managing social media presence, and coordinating event coverage.",
    accent: "#F0C020",
  },
  {
    title: "Media Head at GDSC-CIT",
    period: "Jun 2024 – Sep 2024",
    description:
      "Managed the media team, creating content for events and workshops, and enhancing the club's online presence.",
    accent: "#D02020",
  },
];

// Geometric corner decoration based on shape type
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
  // square (default)
  return (
    <div
      className="w-4 h-4 border-2 border-[#121212]"
      style={{ backgroundColor: color }}
    />
  );
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bauhaus-section bg-[#F0F0F0]"
      aria-labelledby="about-heading"
    >
      {/* ── Section header ── */}
      <div className="border-b-4 border-[#121212] px-6 sm:px-10 lg:px-16 py-10 flex items-end gap-6">
        <div className="w-2 bg-[#D02020]" style={{ height: "64px" }} />
        <div>
          <p className="bauhaus-label text-[#D02020] mb-1">02 — About</p>
          <h2
            id="about-heading"
            className="bauhaus-display text-4xl sm:text-5xl lg:text-6xl text-[#121212]"
          >
            About Me
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        {/* ── Bio + Skill cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Bio card */}
          <div className="bauhaus-card p-8 relative">
            {/* Corner decoration */}
            <div className="absolute top-4 right-4">
              <CornerShape shape="circle" color="#D02020" />
            </div>

            <h3 className="bauhaus-heading text-xl text-[#121212] mb-6">
              Passionate Software &amp; Full-Stack Developer
            </h3>

            <div className="space-y-4 text-[#121212]/70 font-medium leading-relaxed text-sm">
              <p>
                I have a strong passion for software development, full-stack
                applications, database management, and AI/ML. With hands-on
                experience in building, debugging, and shipping projects, I
                enjoy turning ideas into real-world solutions that are both
                functional and impactful.
              </p>
              <p>
                My skills include Python, Java, C/C++, HTML, CSS, JavaScript,
                and frameworks like React, Angular, Node.js, Flask, Django, and
                Tailwind CSS. I also work with MySQL, Oracle, MongoDB and MS
                SQL, and use tools like VSCode.
              </p>
              <p>
                Beyond coding, I value problem-solving, collaboration, and
                leadership, with a drive to learn and create scalable, impactful
                solutions.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t-4 border-[#121212]">
              <a href="#contact" className="bauhaus-btn bauhaus-btn-red">
                Get In Touch
              </a>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-[#D02020] border-2 border-[#121212]" />
                <div className="w-3 h-3 rounded-full bg-[#1040C0] border-2 border-[#121212]" />
                <div className="w-3 h-3 bg-[#F0C020] border-2 border-[#121212] rotate-45" />
              </div>
            </div>
          </div>

          {/* Skill cards */}
          <div className="flex flex-col gap-6">
            {skillCards.map((card) => (
              <div
                key={card.title}
                className="bauhaus-card-sm p-6 relative flex items-start gap-5"
              >
                {/* Icon container */}
                <div
                  className="flex-shrink-0 w-12 h-12 border-2 border-[#121212] flex items-center justify-center shadow-[3px_3px_0_0_#121212]"
                  style={{ backgroundColor: card.accent }}
                >
                  <card.icon
                    className="h-6 w-6"
                    color={card.accent === "#F0C020" ? "#121212" : "#fff"}
                    strokeWidth={2.5}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="bauhaus-heading text-sm text-[#121212] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm font-medium text-[#121212]/65 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Corner shape */}
                <div className="absolute top-4 right-4">
                  <CornerShape shape={card.shape} color={card.accent} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-6 bg-[#D02020] border-2 border-[#121212]" />
            <h3 className="bauhaus-heading text-2xl text-[#121212]">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-4 border-[#121212] shadow-[8px_8px_0_0_#121212]">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`p-6 bg-white relative ${i < education.length - 1 ? "border-b-4 sm:border-b-0 sm:border-r-4 border-[#121212]" : ""}`}
              >
                {/* Large number badge */}
                <div
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#121212] mb-4 shadow-[3px_3px_0_0_#121212]"
                  style={{ backgroundColor: edu.accent }}
                >
                  <span
                    className="font-black text-sm"
                    style={{ color: edu.accent === "#F0C020" ? "#121212" : "#fff" }}
                  >
                    {edu.num}
                  </span>
                </div>
                <h4 className="bauhaus-heading text-sm text-[#121212] mb-2">
                  {edu.degree}
                </h4>
                <p className="text-xs font-medium text-[#121212]/60 leading-relaxed mb-4">
                  {edu.institution}
                </p>
                <span
                  className="bauhaus-label text-[10px] px-2 py-1 border-2 border-[#121212]"
                  style={{
                    backgroundColor: edu.accent,
                    color: edu.accent === "#F0C020" ? "#121212" : "#fff",
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-6 rounded-full bg-[#1040C0] border-2 border-[#121212]" />
            <h3 className="bauhaus-heading text-2xl text-[#121212]">
              Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <div key={exp.title} className="bauhaus-card-sm p-6 relative">
                {/* Accent left border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: exp.accent }}
                />

                <div className="flex items-start justify-between gap-4 mb-3 pl-3">
                  <h4 className="bauhaus-heading text-sm text-[#121212] flex-1">
                    {exp.title}
                  </h4>
                  <span
                    className="bauhaus-label text-[9px] px-2 py-1 border border-[#121212] whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: exp.accent,
                      color: exp.accent === "#F0C020" ? "#121212" : "#fff",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-[#121212]/65 leading-relaxed pl-3">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};