import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/40 to-secondary/10"
    >
       <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center cosmic-text" style={{lineHeight: '1.2', paddingBottom: '0.15em', fontFamily: 'Segoe UI, sans-serif'}}>
          Get In <span className="cosmic-text whitespace-nowrap">Touch</span>
        </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to collaborate or discuss an opportunity? Reach out via LinkedIn
          or email — I’d love to connect.
        </p>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white">Connect With Me</h3>

          <div className="flex gap-6 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harshini-sanjana-j/"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg bg-transparent border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] transition"
            >
              <Linkedin size={28} className="text-purple-400" />
            </a>

            {/* Email */}
            <a
              href="mailto:harshinisanjana.j@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg bg-transparent border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] transition"
            >
              <Mail size={28} className="text-purple-400" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/harshinisanjana"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg bg-transparent border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9)] transition"
            >
              <Github size={28} className="text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating glowing circles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl bottom-20 right-20 animate-bounce"></div>
      </div>
    </section>
  );
};
