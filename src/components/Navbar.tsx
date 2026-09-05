import React, { useState } from "react";
import { Menu, X, Download, Send, Github } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({
  onOpenResume,
  onOpenContact,
  activePage,
  onNavigate,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "About", href: "#overview" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "education", label: "Education", href: "#education" },
    { id: "contact", label: "Contact", href: "#hire" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2.5 sm:py-4 px-3 sm:px-6 pointer-events-none transition-all">
      <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] pointer-events-auto">
        {/* Brand Logo - Clean Harshal Patil */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0 cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#A955F7] to-[#7928CA] flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform shrink-0">
            HP
          </div>
          <span className="text-[13.5px] sm:text-[17px] font-bold text-white tracking-tight whitespace-nowrap">
            Harshal Patil
          </span>
        </button>

        {/* Center Links (Desktop - lg and above) */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-[#A955F7]/25 border border-[#A955F7]/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A955F7] animate-pulse" />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* GitHub link - visible on md and up */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#A955F7]/40 hover:bg-white/10 transition-all shrink-0"
            title="GitHub Profile"
          >
            <Github size={16} />
          </a>

          {/* Resume Button - visible on sm and up (on mobile available in dropdown) */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-[12px] sm:text-[13px] font-medium border border-white/10 bg-white/5 rounded-full text-white hover:bg-white/10 hover:border-[#A955F7]/40 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download size={13} className="text-[#A955F7]" />
            <span>Resume</span>
          </button>

          {/* Connect / Contact Button */}
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-[11.5px] sm:text-[13px] font-semibold bg-[#A955F7] text-white rounded-full hover:bg-[#9332ea] transition-all shadow-[0_0_12px_rgba(168,85,247,0.35)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Send size={11} />
            <span>Let&apos;s Connect</span>
          </button>

          {/* Mobile & Tablet 3-Lines Hamburger */}
          <button
            className="lg:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors shrink-0 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="max-w-[1400px] mx-auto mt-2 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col gap-2 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto">
          <div className="pb-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-white/40 uppercase font-mono tracking-wider">Navigation Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-white/40 hover:text-white rounded cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex flex-col py-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className={`text-[14px] font-medium py-2.5 px-3 rounded-lg flex items-center justify-between transition-all cursor-pointer text-left ${
                    isActive
                      ? "text-white bg-[#A955F7]/20 border border-[#A955F7]/30"
                      : "text-white/80 hover:bg-white/5 hover:text-[#A955F7]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A955F7]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-[13px] font-medium border border-white/10 bg-white/5 rounded-xl text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-[#A955F7]/40 transition-colors cursor-pointer"
            >
              <Download size={14} className="text-[#A955F7]" />
              View &amp; Download Resume
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-[13px] font-semibold bg-[#A955F7] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#9332ea] transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <Send size={14} />
              Hire Me / Send Message
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-[12.5px] font-medium text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Github size={14} />
              <span>github.com/theharshal20</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
