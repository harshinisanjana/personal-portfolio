import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Moon, Sun, Menu, X, ArrowUpRight, Check } from "lucide-react";

export const Navbar = ({ activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#09090b]/80 backdrop-blur-xl">
      <nav className="mx-auto w-full px-6 max-w-[760px] flex items-center justify-between py-3.5">
        {/* Brand Mark */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 cursor-pointer group text-left focus:outline-none"
        >
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt="HS"
            className="h-8 w-auto rounded-md object-contain border border-white/[0.1] group-hover:border-white/30 transition-colors"
          />
          <span className="font-semibold text-sm tracking-tight text-[#ededed] group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`cursor-pointer transition-colors duration-150 ease-out text-sm ${
                      isActive
                        ? "text-[#ededed] font-medium"
                        : "text-[#a1a1aa] hover:text-[#ededed]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#a1a1aa] hover:text-[#ededed] transition-colors"
              >
                <span>CV</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            </li>
          </ul>

          <div className="h-4 w-px bg-white/[0.1]"></div>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 items-center rounded-md bg-white px-3 text-xs font-semibold text-black transition-transform duration-150 hover:bg-zinc-200 active:scale-[0.96]"
          >
            Download CV
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 items-center rounded-md bg-white px-3 text-xs font-semibold text-black"
          >
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 items-center rounded-md bg-[#18181b] text-[#a1a1aa] hover:text-white px-2 text-xs border border-white/[0.08]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#09090b] px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2 text-sm ${
                activeView === link.id
                  ? "text-white font-medium"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-[#a1a1aa] hover:text-white"
          >
            Curriculum Vitae ↗
          </a>
        </div>
      )}
    </header>
  );
};
