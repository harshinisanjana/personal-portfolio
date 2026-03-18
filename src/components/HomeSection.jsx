import { ArrowDown } from "lucide-react";


export const HomeSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col items-center justify-center z-10 text-center">
        
        {/* CONTENT */}
        <div className="flex flex-col items-center space-y-6 w-full max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1" style={{
              background: 'linear-gradient(135deg, #a78bfa, #3b82f6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#a78bfa' // fallback
            }}>
              Harshini Sanjana
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I'm a student pursuing M.Sc Software Systems, passionate about
            software and full-stack development, databases, and data analytics.
            Skilled in building, debugging, and shipping projects, with hands-on
            experience deploying real-world solutions. Always eager to learn and
            collaborate to create impactful results.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a href="project/Harshini Sanjana J Resume.pdf" className="cosmic-button" download>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/70 mb-2 font-medium">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};