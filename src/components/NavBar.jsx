import { cn } from "../lib/util";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Geometric logo: three Bauhaus primary shapes
const GeometricLogo = () => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-1" aria-hidden="true">
      {/* Circle — Red */}
      <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-[#121212]" />
      {/* Square — Blue */}
      <div className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212]" />
      {/* Triangle — Yellow */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: "16px solid #F0C020",
          filter: "drop-shadow(0 0 0 2px #121212)",
        }}
      />
    </div>
    <span
      className="text-[#121212] font-black uppercase tracking-tight leading-none"
      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem" }}
    >
      Harshini Sanjana
    </span>
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 bg-[#F0F0F0] border-b-4 border-[#121212] transition-all duration-200",
        isScrolled ? "py-2 shadow-[0_4px_0_0_#121212]" : "py-4"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" aria-label="Back to top">
          <GeometricLogo />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#121212] font-bold uppercase tracking-widest text-xs hover:text-[#D02020] transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D02020] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
          <a
            href="#contact"
            className="bauhaus-btn bauhaus-btn-red text-xs py-2 px-4"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 border-2 border-[#121212] bg-white shadow-[3px_3px_0_0_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile fullscreen overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          aria-hidden={!isMenuOpen}
        >
          {/* Decorative shapes */}
          <div className="absolute top-12 right-12 w-16 h-16 bg-[#D02020] opacity-20" />
          <div className="absolute bottom-16 left-12 w-12 h-12 rounded-full bg-[#1040C0] opacity-20" />
          <div className="absolute top-1/3 left-8 w-10 h-10 bg-[#F0C020] opacity-20 rotate-45" />

          <nav className="flex flex-col items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-black uppercase tracking-widest text-2xl hover:text-[#F0C020] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bauhaus-btn bauhaus-btn-yellow mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white border-2 border-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};