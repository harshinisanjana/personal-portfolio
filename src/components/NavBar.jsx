import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const d = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(d.toLocaleDateString("en-US", options).toUpperCase());
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-newsprint-bg border-b-4 border-ink-black h-auto">
      {/* Newspaper Top Metadata */}
      <div className="newsprint-section py-2 border-b-1 flex flex-col sm:flex-row justify-between items-center bg-[#F5F5F3]">
        <div className="edition-label">VOL. 1 — NO. 1</div>
        <div className="edition-label tracking-[0.3em] font-bold">THE HARSHINI GAZETTE</div>
        <div className="edition-label">{currentDate}</div>
      </div>

      <nav className="newsprint-section py-6 flex flex-col items-center">
        {/* Newspaper Masthead / Logo */}
        <a 
          href="#hero" 
          className="font-serif-display text-4xl md:text-6xl tracking-tighter mb-6 group transition-colors duration-300"
        >
          <span className="text-editorial-red">Harshini</span> Sanjana
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between w-full max-w-2xl border-y py-2 border-ink-black">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="newsprint-label text-[10px] hover:text-editorial-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-editorial-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="mailto:harshinisanjana.j@gmail.com"
            className="newsprint-btn px-4 py-1 text-[10px]"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[180px] bg-newsprint-bg z-40 p-6 md:hidden newsprint-texture">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-serif-display text-4xl border-b-2 border-ink-black pb-2 hover:text-editorial-red transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:harshinisanjana.j@gmail.com"
              className="newsprint-btn w-full justify-center text-lg py-4"
              onClick={() => setIsOpen(false)}
            >
              HIRE ME
            </a>
          </div>
        </div>
      )}
    </header>
  );
};