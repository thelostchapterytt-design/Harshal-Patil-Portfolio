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
  badge: string;
  title: string;
  institution: string;
  timeline: string;
  description: string;
  skills: string[];
  status: string;
  xPercent: number; // 0 to 100
  icon: React.ElementType;
}

export default function FooterSection({
  onOpenResume,
  onOpenContact,
  onNavigate,
  showJourney = true,
}: FooterSectionProps) {
  const [activeNode, setActiveNode] = useState<number>(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const JOURNEY_NODES: JourneyNode[] = [
    {
      id: 0,
      step: "01",
      badge: "Academic Foundation",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Pratap College, Amalner (KBC NMU)",
      timeline: "Graduated (Completed)",
      description:
        "Building core computer science fundamentals, Object-Oriented Programming (Java & C++), Relational Database Management Systems (SQL), Data Structures, and Software Engineering methodologies.",
      skills: ["Core Java", "OOPs", "Data Structures", "MySQL / SQL", "Web Basics", "Software Eng."],
      status: "CGPA: 7.56 / 10 • Completed",
      xPercent: 9,
      icon: GraduationCap,
    },
    {
      id: 1,
      step: "02",
      badge: "Enterprise Java",
      title: "Full Stack Java Development Training",
      institution: "Kiran Academy, Pune",
      timeline: "2024 - Present",
      description:
        "Intensive professional engineering training focused on enterprise backend systems using Java, Spring Boot 3, Hibernate JPA, RESTful microservice architectures, Postman API testing, and Maven.",
      skills: ["Spring Boot 3", "Hibernate / JPA", "RESTful APIs", "Spring MVC", "Postman", "Maven"],
      status: "Professional Training",
      xPercent: 29,
      icon: Code2,
    },
    {
      id: 2,
      step: "03",
      badge: "Production Systems",
      title: "Full-Stack Project Development",
      institution: "Flagship Projects: Travely & SyncWork",
      timeline: "2025",
      description:
        "Engineered end-to-end full-stack applications with JWT authentication, Razorpay online payment integration, multi-criteria filtering, department-level CRUD operations, and AOP security auditing.",
      skills: ["Travely (MERN)", "SyncWork (Spring Boot)", "JWT Security", "Razorpay", "Tailwind CSS"],
      status: "Production Deployed",
      xPercent: 50,
      icon: Layers,
    },
    {
      id: 3,
      step: "04",
      badge: "Engineering Hubs",
      title: "Architecture & Code Standards",
      institution: "Clean Architecture & SOLID Principles",
      timeline: "2025",
      description:
        "Adhering to enterprise layered design (Controller -> Service -> Repository), DTO abstraction layers, global exception handling with ProblemDetails, and high-performance responsive React frontends.",
      skills: ["Layered Architecture", "DTO Pattern", "Global Handler", "SOLID Principles", "Clean Code"],
      status: "High Standards",
      xPercent: 71,
      icon: Compass,
    },
    {
      id: 4,
      step: "05",
      badge: "Software Engineer",
      title: "Java Full Stack Developer",
      institution: "Open to Full-Stack Opportunities",
      timeline: "2026 & Beyond",
      description:
        "Actively seeking full-time Software Engineer / Java Full Stack Developer roles in Pune, Mumbai, Bengaluru, or Remote. Ready to design, build, and deploy production-grade software.",
      skills: ["Java Backend", "Spring Boot", "React.js", "MySQL", "Git / GitHub", "REST APIs"],
      status: "Open for Opportunities",
      xPercent: 91,
      icon: Briefcase,
    },
  ];

  // Auto-cycle through active nodes if not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % JOURNEY_NODES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, JOURNEY_NODES.length]);

  return (
    <footer className="bg-black text-[#AAA] font-sans overflow-hidden antialiased">
      {/* SECTION 1: CINEMATIC CELESTIAL PLANET HORIZON ARC (Tablet & Laptop) */}
      {showJourney && (
        <section
          id="career-journey"
          className="hidden md:block relative w-full bg-black pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-12 border-t border-white/5 overflow-hidden select-none scroll-mt-28"
        >
          {/* Deep Space Atmosphere Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] lg:w-[1000px] h-[450px] bg-[#A955F7]/14 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[350px] lg:w-[500px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-[1300px] mx-auto relative z-10">
            {/* Header matching other sections */}
            <header className="mb-10 lg:mb-14 text-center px-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs text-[#A955F7] font-mono font-bold">05.</span>
                <span className="text-white/20">&mdash;</span>
                <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
                  Career Journey &amp; Milestones
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                Engineering Journey &amp; Technical Horizon
              </h2>
              <p className="text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
                From foundational computer science in Amalner to intensive enterprise Java in Pune, building scalable full-stack web architectures.
              </p>
            </header>

            {/* CELESTIAL HORIZON ARC CANVAS STAGE (Aadha Gola jesa pehle tha bilkul vesa) */}
            <div className="relative w-full max-w-[1240px] mx-auto h-[260px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-2xl bg-gradient-to-b from-transparent via-[#0d0718]/40 to-[#070311]/80 border border-white/5">
              {/* Celestial Arc SVG Planet Horizon */}
              <svg
                viewBox="0 0 1200 340"
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Planet body fill gradient */}
                  <radialGradient id="planetDiscGrad" cx="50%" cy="100%" r="100%">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                    <stop offset="25%" stopColor="#7E22CE" stopOpacity="0.75" />
                    <stop offset="55%" stopColor="#240B47" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#0a0314" stopOpacity="1" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                  </radialGradient>

                  {/* Horizon line glow */}
                  <linearGradient id="horizonGlowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
                    <stop offset="20%" stopColor="#A955F7" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="80%" stopColor="#A955F7" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
                  </linearGradient>

                  <filter id="coronaBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Starry Dust on Celestial Rim */}
                {Array.from({ length: 32 }).map((_, idx) => {
                  const angle = (Math.PI / 180) * (180 + (idx * 180) / 32);
                  const cx = 600 + 620 * Math.cos(angle);
                  const cy = 340 + 175 * Math.sin(angle);
                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r={idx % 2 === 0 ? 1.5 : 1}
                      fill="#E9D5FF"
                      opacity={0.35 + (idx % 4) * 0.15}
                    />
                  );
                })}

                {/* Luminous Planet Disc Body */}
                <ellipse
                  cx="600"
                  cy="340"
                  rx="600"
                  ry="175"
                  fill="url(#planetDiscGrad)"
                />

                {/* Soft Atmospheric Corona Ring */}
                <path
                  d="M -50 340 A 650 175 0 0 1 1250 340"
                  fill="none"
                  stroke="#C084FC"
                  strokeWidth="16"
                  opacity="0.3"
                  filter="url(#coronaBlur)"
                />

                {/* Neon Atmospheric Horizon Rim */}
                <path
                  d="M -50 340 A 650 175 0 0 1 1250 340"
                  fill="none"
                  stroke="url(#horizonGlowLine)"
                  strokeWidth="3"
                  className="opacity-95"
                />
              </svg>

              {/* 5 CRISP, PROPORTIONATELY POSITIONED MILESTONE NODES (As you loved before) */}
              {JOURNEY_NODES.map((node, i) => {
                const isActive = activeNode === i;
                const IconComponent = node.icon;

                return (
                  <div
                    key={node.id}
                    onClick={() => {
                      setActiveNode(i);
                      setIsAutoPlaying(false);
                    }}
                    style={{ left: `${node.xPercent}%` }}
                    className="absolute -translate-x-1/2 top-4 bottom-4 flex flex-col items-center justify-between cursor-pointer group z-20"
                  >
                    {/* TOP BADGE CARD */}
                    <div
                      className={`relative flex items-center gap-2 px-3 py-1.5 md:px-3.5 md:py-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#150A26] border-2 border-[#A955F7] shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-105"
                          : "bg-black/85 border border-white/15 hover:border-white/40 hover:bg-[#120D1D] hover:scale-102"
                      }`}
                    >
                      {/* Step Indicator */}
                      <span
                        className={`text-[10px] md:text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-[#A955F7] text-white"
                            : "bg-white/10 text-white/70 group-hover:text-white"
                        }`}
                      >
                        {node.step}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? "text-[#C084FC] bg-[#A955F7]/20"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        <IconComponent size={14} />
                      </div>

                      {/* Badge Title */}
                      <span
                        className={`text-xs md:text-[13px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                          isActive ? "text-white" : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {node.badge}
                      </span>

                      {/* Status Dot */}
                      <span
                        className={`w-2 h-2 rounded-full transition-all ${
                          isActive
                            ? "bg-emerald-400 shadow-[0_0_8px_#34D399] animate-pulse"
                            : "bg-white/30"
                        }`}
                      />
                    </div>

                    {/* VERTICAL ENERGY BEAM CONNECTING TO HORIZON PIN */}
                    <div className="flex-1 w-full flex flex-col items-center justify-center my-1 relative">
                      <div
                        className={`w-[2px] h-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-b from-[#A955F7] via-[#C084FC] to-white shadow-[0_0_8px_#A955F7]"
                            : "bg-white/15 group-hover:bg-white/35"
                        }`}
                      />
                    </div>

                    {/* HORIZON PIN ON THE PLANET'S GLOWING RIM */}
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <div className="absolute w-8 h-8 rounded-full bg-[#A955F7]/40 animate-ping" />
                      )}
                      <div
                        className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 transition-transform duration-300 ${
                          isActive
                            ? "bg-white border-[#A955F7] shadow-[0_0_15px_#FFFFFF] scale-125"
                            : "bg-black border-white/50 group-hover:border-white group-hover:scale-110"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-[#7928CA]" : "bg-white/60"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ACTIVE MILESTONE DETAILS CARD (Clean, Simple, Premium) */}
            <div className="mt-8 max-w-[900px] mx-auto bg-[#0b0c10] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-[#A955F7] bg-[#A955F7]/10 border border-[#A955F7]/20 px-2.5 py-1 rounded-md">
                    Step {JOURNEY_NODES[activeNode].step}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {JOURNEY_NODES[activeNode].timeline}
                  </span>
                  <span className="text-white/20">&bull;</span>
                  <span className="text-xs font-mono text-emerald-400">
                    {JOURNEY_NODES[activeNode].status}
                  </span>
                </div>

                {/* Step Switcher Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveNode((prev) => (prev === 0 ? JOURNEY_NODES.length - 1 : prev - 1));
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-mono border border-white/10 transition-colors cursor-pointer"
                  >
                    &larr; Prev
                  </button>
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveNode((prev) => (prev + 1) % JOURNEY_NODES.length);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-mono border border-white/10 transition-colors cursor-pointer"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-[10px] font-mono text-[#A955F7] uppercase tracking-wider font-semibold">
                  {JOURNEY_NODES[activeNode].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {JOURNEY_NODES[activeNode].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-0.5">
                  {JOURNEY_NODES[activeNode].institution}
                </p>
              </div>

              <p className="text-xs sm:text-[13.5px] text-white/70 leading-relaxed mb-5 font-normal">
                {JOURNEY_NODES[activeNode].description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {JOURNEY_NODES[activeNode].skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/70 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate("education")}
                    className="text-xs font-semibold text-white hover:text-[#A955F7] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Full Journey &amp; Credentials</span>
                    <ExternalLink size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
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
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#A955F7]/30 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <Download size={14} className="text-[#A955F7]" />
                  <span>Resume (PDF)</span>
                </button>
                <button
                  onClick={onOpenContact}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.35)] text-center"
                >
                  <Send size={14} />
                  <span>Let&apos;s Connect</span>
                </button>
              </div>
            </div>
          </div>

          {/* Clean Bottom Copyright & Status */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <p>
                &copy; {new Date().getFullYear()} Harshal Patil. All rights reserved.
              </p>
              <span className="text-white/20">&bull;</span>
              <button
                onClick={() => onNavigate("admin")}
                className="text-white/30 hover:text-[#A955F7] transition-colors cursor-pointer text-[11px] font-mono flex items-center gap-1"
                title="Admin Console"
              >
                <span>Admin Console</span>
              </button>
            </div>
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
