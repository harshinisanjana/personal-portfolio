import { ArrowDown, ArrowRight } from "lucide-react";

// Geometric composition for the blue right panel
const GeometricComposition = () => (
  <div className="relative w-full h-full flex items-center justify-center min-h-[300px] lg:min-h-0">
    {/* Dot-grid texture overlay */}
    <div className="absolute inset-0 bauhaus-dot-grid-white" aria-hidden="true" />

    {/* Large background circle — white at 6% */}
    <div
      className="absolute rounded-full bg-white"
      style={{ width: "300px", height: "300px", opacity: 0.06, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    />

    {/* Rotated square — yellow, centre */}
    <div
      className="absolute bg-[#F0C020] border-4 border-[#121212]"
      style={{ width: "155px", height: "155px", transform: "rotate(45deg)", top: "50%", left: "50%", marginTop: "-77px", marginLeft: "-77px" }}
      aria-hidden="true"
    />

    {/* Inner white square (nested) */}
    <div
      className="absolute bg-white border-4 border-[#121212]"
      style={{ width: "85px", height: "85px", top: "50%", left: "50%", marginTop: "-42px", marginLeft: "-42px", zIndex: 2 }}
      aria-hidden="true"
    />

    {/* Triangle — red, top-right */}
    <div
      className="absolute"
      style={{ top: "12%", right: "14%", width: 0, height: 0, borderLeft: "44px solid transparent", borderRight: "44px solid transparent", borderBottom: "76px solid #D02020", zIndex: 3, filter: "drop-shadow(4px 4px 0 #121212)" }}
      aria-hidden="true"
    />

    {/* Second smaller triangle — white, bottom-right */}
    <div
      className="absolute"
      style={{ bottom: "12%", right: "10%", width: 0, height: 0, borderLeft: "22px solid transparent", borderRight: "22px solid transparent", borderTop: "38px solid rgba(255,255,255,0.35)", zIndex: 3 }}
      aria-hidden="true"
    />

    {/* Circle — red, bottom-left */}
    <div
      className="absolute rounded-full bg-[#D02020] border-4 border-[#121212]"
      style={{ width: "60px", height: "60px", bottom: "18%", left: "14%", zIndex: 3 }}
      aria-hidden="true"
    />

    {/* Outlined circle — white stroke only, top-left */}
    <div
      className="absolute rounded-full border-4"
      style={{ width: "70px", height: "70px", top: "14%", left: "12%", borderColor: "rgba(255,255,255,0.5)", zIndex: 3 }}
      aria-hidden="true"
    />

    {/* Cross / plus shape — white, built from two rectangles */}
    <div
      className="absolute"
      style={{ bottom: "22%", right: "28%", zIndex: 4, width: "32px", height: "32px" }}
      aria-hidden="true"
    >
      <div className="absolute bg-white" style={{ width: "32px", height: "8px", top: "12px", left: 0, opacity: 0.7 }} />
      <div className="absolute bg-white" style={{ width: "8px", height: "32px", top: 0, left: "12px", opacity: 0.7 }} />
    </div>

    {/* Horizontal rule — white */}
    <div
      className="absolute bg-white"
      style={{ width: "60px", height: "4px", top: "38%", left: "8%", opacity: 0.45 }}
      aria-hidden="true"
    />

    {/* Vertical rule — white */}
    <div
      className="absolute bg-white"
      style={{ width: "4px", height: "70px", top: "8%", left: "38%", opacity: 0.3 }}
      aria-hidden="true"
    />

    {/* Small yellow square — bottom-center */}
    <div
      className="absolute bg-[#F0C020] border-2 border-[#121212]"
      style={{ width: "28px", height: "28px", bottom: "10%", left: "48%", zIndex: 3 }}
      aria-hidden="true"
    />
  </div>
);

export const HomeSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row border-b-4 border-[#121212] pt-[72px]"
      aria-labelledby="hero-heading"
    >
      {/* LEFT: Text panel */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-[#121212] bg-[#F0F0F0]">
        {/* Eyebrow label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[4px] bg-[#D02020]" />
          <span className="bauhaus-label text-[#D02020]">
            M.Sc Software Systems
          </span>
        </div>

        {/* Display headline */}
        <h1
          id="hero-heading"
          className="bauhaus-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#121212] mb-6 leading-none"
        >
          <span className="block">Harshini</span>
          <span className="block text-[#1040C0]">Sanjana</span>
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Full-Stack Dev", "Data Analytics", "AI / ML Enthusiast"].map(
            (role, i) => {
              const colors = [
                "bg-[#D02020] text-white",
                "bg-[#1040C0] text-white",
                "bg-[#F0C020] text-[#121212]",
              ];
              return (
                <span
                  key={role}
                  className={`bauhaus-label px-3 py-1 border-2 border-[#121212] shadow-[2px_2px_0_0_#121212] ${colors[i]}`}
                >
                  {role}
                </span>
              );
            }
          )}
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-[#121212]/70 max-w-md leading-relaxed mb-10">
          Passionate about building, debugging, and shipping real-world software
          solutions. Always eager to learn and collaborate.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bauhaus-btn bauhaus-btn-red">
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href="project/Harshini Sanjana J Resume.pdf"
            download
            className="bauhaus-btn bauhaus-btn-outline"
          >
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-16 text-[#121212]/50">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="bauhaus-label text-[10px]">Scroll to explore</span>
        </div>
      </div>

      {/* RIGHT: Geometric composition panel (blue) */}
      <div
        className="lg:w-[45%] bg-[#1040C0] relative overflow-hidden"
        style={{ minHeight: "340px" }}
        aria-hidden="true"
      >
        <GeometricComposition />
      </div>
    </section>
  );
};