import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Code2,
  Database,
  GraduationCap,
  Award,
  Zap,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Terminal,
  MapPin,
  Coffee,
} from "lucide-react";

interface DeveloperProfileCockpitProps {
  onOpenContact: () => void;
}

type ViewMode = "architecture" | "stack" | "journey";

export default function DeveloperProfileCockpit({ onOpenContact }: DeveloperProfileCockpitProps) {
  const [activeView, setActiveView] = useState<ViewMode>("architecture");

  const architectureLayers = [
    {
      step: "01",
      layer: "Presentation Layer",
      tech: "React 19 & Tailwind CSS",
      icon: Code2,
      color: "#60a5fa",
      desc: "Responsive user interfaces, modern React hooks, reusable UI components, and fluid animations.",
      skills: ["Component Architecture", "Tailwind Utilities", "State Management", "Axios & REST Integration"],
    },
    {
      step: "02",
      layer: "Application Layer",
      tech: "Java 17 & Spring Boot 3",
      icon: Server,
      color: "#c084fc",
      desc: "Layered Spring MVC architecture, RESTful endpoints, Dependency Injection, and validation.",
      skills: ["Controller-Service-DAO", "RESTful API Design", "Spring Security / JWT", "Exception Handling"],
    },
    {
      step: "03",
      layer: "Persistence Layer",
      tech: "Hibernate / JPA & MySQL",
      icon: Database,
      color: "#34d399",
      desc: "Object-Relational Mapping (ORM), entity lifecycle, normalized schemas, and ACID transactions.",
      skills: ["Hibernate Entities", "MySQL Relational Queries", "HikariCP Connection Pool", "MongoDB NoSQL"],
    },
  ];

  const skillCategories = [
    {
      title: "Backend Core",
      icon: Server,
      color: "#A955F7",
      items: [
        { name: "Core Java (OOP, Collections)", badge: "Strong" },
        { name: "Spring Boot 3.x", badge: "Framework" },
        { name: "Spring MVC & REST APIs", badge: "Services" },
        { name: "Hibernate / JPA ORM", badge: "Persistence" },
        { name: "Maven & Build Tools", badge: "Build" },
      ],
    },
    {
      title: "Frontend Craft",
      icon: Code2,
      color: "#3B82F6",
      items: [
        { name: "React.js 19", badge: "UI Library" },
        { name: "JavaScript (ES6+)", badge: "Core Lang" },
        { name: "Tailwind CSS", badge: "Styling" },
        { name: "Responsive UI / UX", badge: "Design" },
        { name: "Vite Development", badge: "Tooling" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "#10B981",
      items: [
        { name: "MySQL 8.0", badge: "Relational" },
        { name: "MongoDB", badge: "NoSQL" },
        { name: "SQL Query Optimization", badge: "Queries" },
        { name: "Database Normalization", badge: "Architecture" },
        { name: "Transactions & ACID", badge: "Integrity" },
      ],
    },
    {
      title: "Developer Tooling",
      icon: Terminal,
      color: "#F59E0B",
      items: [
        { name: "Git & GitHub Version Control", badge: "VCS" },
        { name: "Postman API Testing", badge: "Testing" },
        { name: "Eclipse & VS Code IDE", badge: "IDE" },
        { name: "Render Cloud Hosting", badge: "Hosting" },
        { name: "Razorpay Payment Gateway", badge: "Integration" },
      ],
    },
  ];

  return (
    <div className="relative z-10 w-full max-w-[1360px] mx-auto mt-[36px] sm:mt-[50px] px-0 sm:px-4">
      {/* Subtle Purple Accent Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#A955F7]/15 via-transparent to-[#3B82F6]/15 rounded-[36px] blur-[90px] -z-10 opacity-60 pointer-events-none" />

      {/* Main Studio Frame - Translucent Glassmorphic so cosmic Earth & purple rays shine through */}
      <div className="w-full bg-black/35 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden transition-all hover:border-[#A955F7]/30">
        {/* TOP BAR WITH MODE SELECTORS */}
        <div className="bg-white/[0.03] backdrop-blur-md border-b border-white/10 px-3.5 sm:px-6 py-3 sm:py-3.5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Title & Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EF4444]/90 border border-[#EF4444]" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B]/90 border border-[#F59E0B]" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]/90 border border-[#10B981]" />
            </div>
            <div className="h-4 w-[1px] bg-white/15 mx-0.5 sm:mx-1 shrink-0" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-white/90 text-xs sm:text-sm font-medium min-w-0 truncate">
              <Sparkles size={14} className="text-[#A955F7] shrink-0" />
              <span className="truncate font-semibold">Harshal Patil &bull; Engineering Cockpit</span>
            </div>
          </div>

          {/* VIEW SWITCHER PILLS - Adaptive full-width 3-column grid on mobile/tablet, inline pills on desktop */}
          <div className="grid grid-cols-3 lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 w-full lg:w-auto shrink-0">
            {[
              {
                id: "architecture",
                mobileLabel: "Architecture",
                tabletLabel: "Architecture",
                desktopLabel: "Full-Stack Architecture",
                icon: Workflow,
              },
              {
                id: "stack",
                mobileLabel: "Skills",
                tabletLabel: "Skills & Stack",
                desktopLabel: "Skills & Tooling",
                icon: Layers,
              },
              {
                id: "journey",
                mobileLabel: "Academics",
                tabletLabel: "Academics",
                desktopLabel: "Academics & Journey",
                icon: GraduationCap,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id as typeof activeView)}
                  className={`relative flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 lg:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-medium cursor-pointer transition-colors duration-200 z-10 ${
                    isActive ? "text-white font-semibold" : "text-white/65 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="cockpitActiveIndicator"
                      className="absolute inset-0 rounded-lg bg-[#A955F7] shadow-[0_0_18px_rgba(168,85,247,0.45)] -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Icon size={13} className={`shrink-0 ${isActive ? "text-white" : "text-white/70"}`} />
                  {/* Mobile (< sm): Short label */}
                  <span className="sm:hidden truncate">{tab.mobileLabel}</span>
                  {/* Tablet & Split-Screen Preview (sm to xl): Balanced label with zero overflow */}
                  <span className="hidden sm:inline xl:hidden whitespace-nowrap">{tab.tabletLabel}</span>
                  {/* Wide Desktop (xl+): Full rich label */}
                  <span className="hidden xl:inline whitespace-nowrap">{tab.desktopLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="p-4 sm:p-6 lg:p-8 min-h-[auto] sm:min-h-[480px] lg:min-h-[440px] flex flex-col justify-between overflow-hidden">
          <div className="flex-1">
            <AnimatePresence mode="wait" initial={false}>
              {/* 1. ARCHITECTURE FLOW TAB */}
              {activeView === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#A955F7] text-xs font-mono uppercase tracking-wider mb-2">
                      <Workflow size={14} />
                      <span>How I Architect Software Systems</span>
                    </div>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
                      End-to-End Clean Architecture Blueprint
                    </h3>
                    <p className="text-white/70 text-xs sm:text-[15px] mt-2 max-w-[720px] leading-relaxed">
                      Trained at Kiran Academy Pune in building clean, decoupled, layered web applications. Each layer maintains strict separation of concerns from responsive UI to relational persistence.
                    </p>
                  </div>

                  {/* 3 Architecture Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {architectureLayers.map((card, idx) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-[#A955F7]/40 hover:bg-black/50 transition-all flex flex-col justify-between group shadow-lg h-full"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                              <span className="text-xs font-mono text-white/40">{card.step}</span>
                              <div
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${card.color}20`, color: card.color }}
                              >
                                <Icon size={18} />
                              </div>
                            </div>

                            <span className="text-[11px] font-mono text-[#A955F7] block mb-1">
                              {card.layer}
                            </span>
                            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1.5 sm:mb-2">
                              {card.tech}
                            </h4>
                            <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed mb-3 sm:mb-4">
                              {card.desc}
                            </p>
                          </div>

                          <div className="pt-3.5 sm:pt-4 border-t border-white/10 space-y-1.5">
                            {card.skills.map((skill, i) => (
                              <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs text-white/80">
                                <CheckCircle2 size={13} className="text-[#A955F7] shrink-0" />
                                <span className="truncate">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* 2. SKILLS & TOOLING TAB */}
              {activeView === "stack" && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#A955F7] text-xs font-mono uppercase tracking-wider mb-2">
                      <Layers size={14} />
                      <span>Technical Competencies &amp; Tools</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                      Hands-On Technology Matrix
                    </h3>
                    <p className="text-white/70 text-xs sm:text-[14px] lg:text-[15px] mt-2 max-w-[720px] leading-relaxed">
                      Structured breakdown of technologies practiced through university coursework, intensive training at Kiran Academy Pune, and hands-on projects.
                    </p>
                  </div>

                  {/* 4 Skill Category Cards - 2-col on tablet/mid-laptop, 4-col on xl */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                    {skillCategories.map((cat, idx) => {
                      const Icon = cat.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-[#A955F7]/30 transition-all flex flex-col justify-between shadow-lg h-full"
                        >
                          <div>
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 pb-2.5 sm:mb-4 sm:pb-3 border-b border-white/10">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                              >
                                <Icon size={16} />
                              </div>
                              <h4 className="text-sm font-semibold text-white truncate">{cat.title}</h4>
                            </div>

                            <div className="space-y-2">
                              {cat.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-white/85"
                                >
                                  <span className="font-medium truncate">{item.name}</span>
                                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-1.5 py-0.5 rounded shrink-0">
                                    {item.badge}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* 3. ACADEMICS & JOURNEY TAB */}
              {activeView === "journey" && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#A955F7] text-xs font-mono uppercase tracking-wider mb-2">
                      <GraduationCap size={14} />
                      <span>Education, Training &amp; Qualifications</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                      Academic Background &amp; Professional Training
                    </h3>
                    <p className="text-white/70 text-xs sm:text-[14px] lg:text-[15px] mt-2 max-w-[720px] leading-relaxed">
                      Balancing formal university computer applications degree foundations with industry-aligned industrial development training in Pune.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {/* BCA Card */}
                    <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-[#A955F7]/40 transition-all flex flex-col justify-between shadow-lg h-full">
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#A955F7]/15 border border-[#A955F7]/30 flex items-center justify-center text-[#A955F7] mb-3.5 sm:mb-4">
                          <GraduationCap size={20} />
                        </div>
                        <span className="text-xs font-mono text-[#A955F7] uppercase tracking-wider">
                          Degree (BCA)
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                          Bachelor of Computer Applications
                        </h4>
                        <p className="text-xs text-white/60 mt-1">
                          KCE&apos;s Pratap College, Amalner (KBC NMU, Jalgaon)
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-md shrink-0">
                            CGPA: 7.56 / 10
                          </span>
                          <span className="text-xs font-mono text-white/40 shrink-0">2023 - 2026</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-4 pt-4 border-t border-white/10">
                        Focus: Object-Oriented Programming, Data Structures, DBMS &amp; Web Systems.
                      </p>
                    </div>

                    {/* Kiran Academy Card */}
                    <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-[#3B82F6]/40 transition-all flex flex-col justify-between shadow-lg h-full">
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] mb-3.5 sm:mb-4">
                          <Coffee size={20} />
                        </div>
                        <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider">
                          Industrial Training
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                          Java Full Stack Development
                        </h4>
                        <p className="text-xs text-white/60 mt-1">
                          Kiran Academy, Pune (In Progress)
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-2.5 py-1 rounded-md shrink-0">
                            Active Training
                          </span>
                          <span className="text-xs font-mono text-white/40 shrink-0">2024 - Present</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-4 pt-4 border-t border-white/10">
                        Intensive training in Core Java, Spring Boot, Hibernate/JPA, REST APIs &amp; MySQL.
                      </p>
                    </div>

                    {/* Certifications Card */}
                    <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-lg h-full">
                      <div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3.5 sm:mb-4">
                          <Award size={20} />
                        </div>
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                          Certifications
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                          Govt. &amp; Technical Credentials
                        </h4>
                        <p className="text-xs text-white/60 mt-1">
                          NIELIT &amp; MSCE Recognized
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="text-xs text-white/80 flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                            <span className="truncate">CCC (NIELIT, Govt. of India)</span>
                          </div>
                          <div className="text-xs text-white/80 flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                            <span className="truncate">GCC-TBC Typing Professional</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-4 pt-4 border-t border-white/10">
                        Proven foundational knowledge in computer hardware, networking, and typing speed.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOTTOM INTERACTIVE RECRUITER STRIP */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center justify-center sm:justify-start text-xs text-white/70 text-center sm:text-left">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#A955F7] shrink-0" />
                <span>Pune &bull; Mumbai &bull; Bengaluru &bull; Remote</span>
              </span>
            </div>

            {/* RESPONSIVE BUTTONS: 2 columns on mobile, auto width on sm */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenContact}
                className="flex-1 sm:flex-initial h-10 sm:h-11 px-3 sm:px-6 rounded-full bg-[#A955F7] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#9333EA] transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer whitespace-nowrap"
              >
                <Zap size={14} className="shrink-0" />
                <span>Let&apos;s Connect</span>
              </button>

              <a
                href="#projects"
                className="flex-1 sm:flex-initial h-10 sm:h-11 px-3 sm:px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="sm:hidden">Projects</span>
                <span className="hidden sm:inline">View Projects</span>
                <ArrowRight size={14} className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
