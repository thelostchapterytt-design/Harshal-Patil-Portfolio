import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
  ExternalLink,
  GraduationCap,
  Code2,
  Layers,
  Briefcase,
  Compass,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface FooterSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onNavigate?: (page: string) => void;
  showJourney?: boolean;
}

interface JourneyNode {
  id: number;
  step: string;
  shortLabel: string;
  x: number; // SVG X on horizon arc
  pillW: number; // SVG pill badge width
  icon: React.ElementType;
}

export default function FooterSection({
  onOpenResume,
  onOpenContact,
  onNavigate,
  showJourney = true,
}: FooterSectionProps) {
  const [activeNode, setActiveNode] = useState<number>(4);

  const JOURNEY_NODES: JourneyNode[] = [
    {
      id: 0,
      step: "01",
      shortLabel: "01 • Academic Foundation (BCA)",
      x: 210,
      pillW: 220,
      icon: GraduationCap,
    },
    {
      id: 1,
      step: "02",
      shortLabel: "02 • Enterprise Java (Pune)",
      x: 450,
      pillW: 215,
      icon: Code2,
    },
    {
      id: 2,
      step: "03",
      shortLabel: "03 • Production Systems",
      x: 700,
      pillW: 195,
      icon: Layers,
    },
    {
      id: 3,
      step: "04",
      shortLabel: "04 • Core Engineering Hubs",
      x: 950,
      pillW: 220,
      icon: Compass,
    },
    {
      id: 4,
      step: "05",
      shortLabel: "05 • Full-Stack Engineer",
      x: 1190,
      pillW: 205,
      icon: Briefcase,
    },
  ];

  // Auto-cycle gently through active nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % JOURNEY_NODES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [JOURNEY_NODES.length]);

  // Sparkles on the celestial horizon
  const sparkles = Array.from({ length: 45 }).map((_, i) => {
    const angle = (Math.PI / 180) * (180 + (i * 180) / 45);
    const rx = 870 + ((i * 37) % 25 - 12);
    const ry = 215 + ((i * 19) % 25 - 12);
    return {
      cx: 700 + rx * Math.cos(angle),
      cy: 450 + ry * Math.sin(angle),
      r: i % 3 === 0 ? 1.8 : 0.9,
      opacity: 0.3 + (i % 5) * 0.12,
    };
  });

  return (
    <footer className="bg-black text-[#AAA] font-sans overflow-hidden antialiased">
      {/* SECTION 1: CINEMATIC CELESTIAL PLANET HORIZON ARC (Only rendered on Home page) */}
      {showJourney && (
        <div className="hidden md:block relative w-full bg-black pt-16 md:pt-24 pb-10 md:pb-14 px-4 md:px-12 border-t border-white/5 overflow-hidden select-none">
        {/* Deep Space Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[500px] bg-[#A955F7]/12 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-600/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          {/* Header */}
          <header className="mb-8 sm:mb-12 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs text-[#A955F7] font-mono font-bold">05.</span>
              <span className="text-white/20">&mdash;</span>
              <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
                Career Journey &amp; Milestones
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-3">
              Engineering Journey &amp; Technical Horizon
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/50 font-normal max-w-[660px] mx-auto leading-relaxed">
              From foundational computer science in Amalner to intensive enterprise Java in Pune, building resilient full-stack web architectures.
            </p>
          </header>

          {/* CINEMATIC PLANET ARC SVG (Clean celestial arc with real atmospheric glow) */}
          <div className="relative w-full aspect-[1400/450] max-w-[1350px] mx-auto overflow-hidden">
            {/* Top Fade Gradient for seamless blend */}
            <div className="absolute inset-x-0 top-0 h-12 sm:h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

            <svg
              viewBox="0 0 1400 450"
              className="w-full h-full"
              preserveAspectRatio="xMidYMax meet"
            >
              <defs>
                {/* Celestial Planet Body Radial Gradient */}
                <radialGradient id="planetGradV2" cx="50%" cy="100%" r="100%">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#7E22CE" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#2e1064" stopOpacity="0.95" />
                  <stop offset="90%" stopColor="#0a0515" stopOpacity="1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                </radialGradient>

                {/* Atmospheric Rim Glow Filter */}
                <filter id="celestialGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* SVG Milestone Pill Glow Filter */}
                <filter id="badgeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Linear gradient for horizon path line */}
                <linearGradient id="horizonStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#A955F7" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#E9D5FF" stopOpacity="1" />
                  <stop offset="80%" stopColor="#A955F7" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                </linearGradient>

                {/* Inner horizon glow */}
                <linearGradient id="atmosphereGaze" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A955F7" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#7E22CE" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Star sparkles along horizon */}
              {sparkles.map((s, idx) => (
                <circle
                  key={idx}
                  cx={s.cx}
                  cy={s.cy}
                  r={s.r}
                  fill="#E9D5FF"
                  opacity={s.opacity}
                />
              ))}

              {/* Soft Wide Horizon Nebula Fog */}
              <ellipse
                cx="700"
                cy="450"
                rx="820"
                ry="240"
                fill="url(#atmosphereGaze)"
                className="opacity-70"
              />

              {/* HUGE CELESTIAL PLANET DISC (Aadha Gola - Lower Half Extends Off Canvas) */}
              <ellipse
                cx="700"
                cy="450"
                rx="800"
                ry="220"
                fill="url(#planetGradV2)"
                className="transition-all duration-700"
              />

              {/* Atmosphere Corona Ring 1 (Widest Soft Glow) */}
              <path
                d="M -100 450 A 800 220 0 0 1 1500 450"
                fill="none"
                stroke="#C084FC"
                strokeWidth="18"
                opacity="0.25"
                filter="url(#celestialGlow)"
              />

              {/* Atmosphere Corona Ring 2 (Medium Crisp Glow) */}
              <path
                d="M -100 450 A 800 220 0 0 1 1500 450"
                fill="none"
                stroke="#E9D5FF"
                strokeWidth="5"
                opacity="0.6"
                filter="url(#celestialGlow)"
              />

              {/* Razor-Sharp Atmospheric Horizon Rim Edge */}
              <path
                d="M -100 450 A 800 220 0 0 1 1500 450"
                fill="none"
                stroke="url(#horizonStrokeGrad)"
                strokeWidth="2.5"
                className="opacity-95"
              />

              {/* Orbiting Cosmic Particle / Satellite Pulsing along the Arc */}
              <motion.circle
                r="3.5"
                fill="#FFFFFF"
                filter="url(#pinGlow)"
                animate={{
                  cx: [210, 450, 700, 950, 1190, 950, 700, 450, 210],
                  cy: [276, 241, 230, 241, 276, 241, 230, 241, 276],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* JOURNEY MILESTONE PINS & EMBEDDED BADGES (100% Vector locked for Tablet & Laptop) */}
              {JOURNEY_NODES.map((node, i) => {
                const isActive = activeNode === i;
                const normX = (node.x - 700) / 800;
                const arcY = 450 - 220 * Math.sqrt(Math.max(0, 1 - normX * normX));
                const badgeY = arcY - 56;

                return (
                  <g
                    key={node.id}
                    onClick={() => setActiveNode(i)}
                    className="cursor-pointer group"
                  >
                    {/* Vertical Guiding Beam from Arc Horizon up to Badge */}
                    <line
                      x1={node.x}
                      y1={arcY}
                      x2={node.x}
                      y2={badgeY + 16}
                      stroke={isActive ? "#A955F7" : "rgba(255,255,255,0.2)"}
                      strokeWidth={isActive ? 2 : 1}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      className="transition-all duration-300"
                    />

                    {/* Outer Glow Halo on Active Pin */}
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={arcY}
                        r="18"
                        fill="#A955F7"
                        opacity="0.3"
                        filter="url(#pinGlow)"
                        className="animate-ping"
                      />
                    )}

                    {/* Pin Base Circle on the Horizon Arc */}
                    <circle
                      cx={node.x}
                      cy={arcY}
                      r={isActive ? 7.5 : 5}
                      fill={isActive ? "#A955F7" : "#0A0A0E"}
                      stroke={isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      filter="url(#pinGlow)"
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Integrated SVG Milestone Badge (Scales proportionally on Tablet & Laptop without clipping) */}
                    <g transform={`translate(${node.x}, ${badgeY})`}>
                      {/* Active Ambient Glow Halo */}
                      {isActive && (
                        <rect
                          x={-node.pillW / 2 - 4}
                          y={-18}
                          width={node.pillW + 8}
                          height={36}
                          rx={18}
                          fill="#A955F7"
                          opacity={0.3}
                          filter="url(#badgeGlow)"
                        />
                      )}

                      {/* Pill Container */}
                      <rect
                        x={-node.pillW / 2}
                        y={-15}
                        width={node.pillW}
                        height={30}
                        rx={15}
                        fill="#0A0A0F"
                        stroke={isActive ? "#A955F7" : "rgba(255, 255, 255, 0.12)"}
                        strokeWidth={isActive ? 1.5 : 1}
                        className="transition-all duration-300 group-hover:stroke-white/30"
                      />

                      {/* Pulsing Status Dot */}
                      <circle
                        cx={-node.pillW / 2 + 15}
                        cy={0}
                        r={3.5}
                        fill={isActive ? "#34D399" : "rgba(255, 255, 255, 0.35)"}
                      />

                      {/* Milestone Text Label */}
                      <text
                        x={-node.pillW / 2 + 26}
                        y={4}
                        fill={isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)"}
                        fontSize="11"
                        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                        fontWeight={isActive ? "bold" : "500"}
                        className="select-none transition-all duration-300 group-hover:fill-white"
                      >
                        {node.shortLabel}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
      )}

      {/* SECTION 2: CLEAN, HIGH-END DEVELOPER FOOTER */}
      <div className="relative bg-[#070709] py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            {/* COLUMN 1: Developer Identity & Positioning (5 cols on lg) */}
            <div className="md:col-span-12 lg:col-span-5 space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#A955F7] mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Software Engineering Portfolio</span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                  Harshal Patil
                </h3>
                <p className="text-xs sm:text-sm font-mono text-white/60 mt-1">
                  Java Full-Stack Developer &bull; BCA Computer Applications
                </p>
              </div>

              <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[460px]">
                Architecting clean, decoupled enterprise backends with Java, Spring Boot 3, and Hibernate JPA, seamlessly integrated with modern, responsive React interfaces.
              </p>

              {/* Social profile links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={17} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Send Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* COLUMN 2: Quick Navigation & Projects (3 cols on lg) */}
            <div className="md:col-span-6 lg:col-span-3">
              <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A955F7]" />
                <span>Navigation &amp; Work</span>
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Overview", page: "home", href: "#overview" },
                  { label: "Featured Projects", page: "projects", href: "#projects" },
                  { label: "Core Skills", page: "skills", href: "#skills" },
                  { label: "Architecture", page: "home", href: "#architecture" },
                  { label: "Education & Degree", page: "education", href: "#education" },
                  { label: "Contact & Inquiries", page: "contact", href: "#hire" },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate(item.page);
                        } else {
                          window.location.hash = item.href;
                        }
                      }}
                      className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer text-left block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Direct Connect & Resume (4 cols on lg) */}
            <div className="md:col-span-6 lg:col-span-4 space-y-4">
              <h4 className="text-white text-sm font-bold font-mono tracking-wider uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A955F7]" />
                <span>Get In Touch</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-white/60">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#A955F7] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Amalner / Pune, Maharashtra (Open to Relocation &amp; Remote)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail size={16} className="text-[#A955F7] shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-white transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#A955F7] shrink-0" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Clean Actions Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={onOpenResume}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <Download size={14} />
                  <span>Resume (PDF)</span>
                </button>
                <button
                  onClick={onOpenContact}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-purple-900/30 text-center"
                >
                  <Send size={14} />
                  <span>Let&apos;s Connect</span>
                </button>
              </div>
            </div>
          </div>

          {/* Clean Bottom Copyright & Status */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Harshal Patil. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/60 font-mono text-[11px]">
                Open for Software Engineering Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
