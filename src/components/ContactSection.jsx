import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harshini-sanjana-j/",
    accent: "#1040C0",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    href: "mailto:harshinisanjana.j@gmail.com",
    accent: "#D02020",
  },
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    href: "https://github.com/harshinisanjana",
    accent: "#F0C020",
    dark: true,
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#121212] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative geometric background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large circle — white at 5% */}
        <div
          className="absolute rounded-full border-4 border-white"
          style={{
            width: "400px",
            height: "400px",
            top: "-100px",
            right: "-100px",
            opacity: 0.05,
          }}
        />
        {/* Rotated square — yellow at 5% */}
        <div
          className="absolute border-4 border-[#F0C020]"
          style={{
            width: "260px",
            height: "260px",
            bottom: "-80px",
            left: "-60px",
            transform: "rotate(45deg)",
            opacity: 0.08,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 bauhaus-dot-grid-white"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* Section header */}
      <div className="border-b-4 border-white/20 px-6 sm:px-10 lg:px-16 py-10 flex items-end gap-6 relative z-10">
        <div className="w-2 bg-[#F0C020]" style={{ height: "64px" }} />
        <div>
          <p className="bauhaus-label text-[#F0C020] mb-1">05 — Contact</p>
          <h2
            id="contact-heading"
            className="bauhaus-display text-4xl sm:text-5xl lg:text-6xl text-white"
          >
            Get In Touch
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-white/70 font-medium text-base leading-relaxed mb-8 max-w-md">
              Want to collaborate or discuss an opportunity? I'm always open to
              new ideas, projects, and conversations. Reach out — I'd love to
              connect.
            </p>

            {/* Social link tiles */}
            <div className="flex flex-col sm:flex-row gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  id={`contact-${link.id}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-5 py-4 border-2 border-white bg-transparent shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.4)] transition-all duration-200"
                  aria-label={link.label}
                  style={{
                    borderColor: link.accent,
                    boxShadow: `4px 4px 0 0 ${link.accent}66`,
                  }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center border-2 border-[#121212] flex-shrink-0"
                    style={{ backgroundColor: link.accent }}
                  >
                    <link.icon
                      size={16}
                      color={link.dark ? "#121212" : "#fff"}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="bauhaus-label text-white text-xs">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: geometric composition */}
          <div
            className="relative hidden lg:flex items-center justify-center"
            style={{ minHeight: "280px" }}
            aria-hidden="true"
          >
            {/* Red square */}
            <div
              className="absolute bg-[#D02020] border-4 border-white"
              style={{
                width: "140px",
                height: "140px",
                top: "20px",
                left: "40px",
                opacity: 0.9,
              }}
            />
            {/* Blue circle */}
            <div
              className="absolute rounded-full bg-[#1040C0] border-4 border-white"
              style={{
                width: "100px",
                height: "100px",
                bottom: "20px",
                right: "60px",
                opacity: 0.9,
              }}
            />
            {/* Yellow rotated square */}
            <div
              className="absolute bg-[#F0C020] border-4 border-white"
              style={{
                width: "80px",
                height: "80px",
                bottom: "40px",
                left: "80px",
                transform: "rotate(45deg)",
                opacity: 0.9,
              }}
            />
            {/* Center white square */}
            <div
              className="absolute bg-white"
              style={{ width: "40px", height: "40px", zIndex: 10 }}
            />
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-16 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="bauhaus-label text-white/30 text-[10px]">
            © 2025 Harshini Sanjana J — All rights reserved
          </span>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-[#D02020] border border-white/30" />
            <div className="w-2 h-2 rounded-full bg-[#1040C0] border border-white/30" />
            <div className="w-2 h-2 bg-[#F0C020] border border-white/30 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};
