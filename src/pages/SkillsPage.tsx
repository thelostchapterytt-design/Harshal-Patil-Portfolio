import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Terminal,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import CodeStandardsSection from "../components/CodeStandardsSection";

interface SkillsPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenInterviewModal?: () => void;
}

interface SkillDomain {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  primaryTech: { name: string; tag: string }[];
  libraries: string[];
  capabilities: string[];
}

export default function SkillsPage({ onOpenContact, onOpenResume, onOpenInterviewModal }: SkillsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Exact 4 core domains - strictly relevant to Harshal Patil's Java Full-Stack interview profile (No bloat)
  const skillDomains: SkillDomain[] = [
    {
      id: "backend",
      category: "Backend Architecture",
      title: "Java & Enterprise Spring Boot",
      subtitle: "Layered MVC services, transactional boundaries, and secure RESTful endpoints.",
      icon: Server,
      primaryTech: [
        { name: "Java 17 LTS", tag: "Core" },
        { name: "Spring Boot 3", tag: "Primary" },
        { name: "Spring MVC", tag: "Framework" },
        { name: "Hibernate / JPA", tag: "ORM" },
        { name: "REST APIs", tag: "Web Services" },
      ],
      libraries: ["Spring Data JPA", "HikariCP", "JWT Auth", "Razorpay Gateway", "Node.js / Express"],
      capabilities: [
        "Strict 4-tier layer isolation: Controller → Service → DAO Repository → JPA Entity",
        "Object-Oriented Programming, Collections, Multithreading, and Stream API",
        "Centralized error handling with custom GlobalExceptionHandler & RFC payloads",
        "Secure payment webhooks and HMAC signature verification (Razorpay)",
      ],
    },
    {
      id: "frontend",
      category: "Frontend Craft",
      title: "Modern React & Responsive UI",
      subtitle: "Interactive, component-driven client applications with type safety and clean state.",
      icon: Code2,
      primaryTech: [
        { name: "React 19", tag: "Library" },
        { name: "JavaScript ES6+", tag: "Language" },
        { name: "TypeScript", tag: "Type-Safe" },
        { name: "Tailwind CSS", tag: "Styling" },
        { name: "HTML5 Canvas", tag: "Graphics" },
      ],
      libraries: ["React Hooks", "Context API", "Framer Motion", "Vite", "Recharts"],
      capabilities: [
        "Modular component hierarchy with memoized state and zero redundant re-renders",
        "100% mobile-first responsive interfaces using Tailwind CSS Flexbox and Grid",
        "Client-side 2D pixel manipulation with HTML5 Canvas API (AI Image Tools)",
        "Real-time visual sales KPI dashboards with Recharts SVG charts",
      ],
    },
    {
      id: "database",
      category: "Data Persistence",
      title: "Relational & Document Databases",
      subtitle: "Normalized schema modeling, ACID transactions, and indexed query performance.",
      icon: Database,
      primaryTech: [
        { name: "MySQL 8.0", tag: "Relational" },
        { name: "SQL Queries", tag: "Complex JOINs" },
        { name: "3NF Normalization", tag: "Schema" },
        { name: "MongoDB", tag: "Document" },
        { name: "Mongoose ODM", tag: "Data Models" },
      ],
      libraries: ["JPA Entity Mappings", "ACID Transactions", "Indexing", "Foreign Key Cascades"],
      capabilities: [
        "Normalized 1NF to 3NF schema design preventing data redundancy",
        "JPA relational entity mappings: @OneToMany, @ManyToOne, and cascading",
        "Optimized query execution through indexed lookup columns",
        "Polyglot storage: MySQL for transactional orders + MongoDB for dynamic docs",
      ],
    },
    {
      id: "devops",
      category: "Toolchain & Discipline",
      title: "Developer Workflow & Tooling",
      subtitle: "Disciplined version control, automated REST testing, and clean builds.",
      icon: Terminal,
      primaryTech: [
        { name: "Git & GitHub", tag: "VCS" },
        { name: "Postman", tag: "API Testing" },
        { name: "Maven", tag: "Build Tool" },
        { name: "IntelliJ IDEA", tag: "Primary IDE" },
        { name: "VS Code", tag: "Editor" },
      ],
      libraries: ["Git Branching", "Postman Collections", "pom.xml Lifecycle", "Render Cloud"],
      capabilities: [
        "Disciplined Git workflow: clean semantic commits, PRs, and clear READMEs",
        "Comprehensive REST API assertion suites with Postman environment variables",
        "Enterprise dependency lifecycle management and build packaging via Maven",
        "Deep breakpoint step-through debugging across IntelliJ and browser devtools",
      ],
    },
  ];

  // Exact same categories styling as Projects page
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Java & Backend" },
    { id: "frontend", label: "React & Frontend" },
    { id: "database", label: "Databases" },
    { id: "devops", label: "Tools & DevOps" },
  ];

  const displayedDomains =
    activeCategory === "all"
      ? skillDomains
      : skillDomains.filter((d) => d.id === activeCategory);

  return (
    <div className="bg-transparent text-white antialiased min-h-screen pt-24 sm:pt-32 pb-20 px-3 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Cosmic Atmosphere & Subtle Technical Grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix opacity-15" />
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#A955F7]/[0.05] blur-[170px] rounded-full" />
        <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[#A955F7]/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* 1. Header: Matching ProjectsPage exact typography, spacing & 4 Metric Boxes */}
        <header className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold shrink-0">03.</span>
            <span className="text-white/20 shrink-0">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-wider sm:tracking-[2px] uppercase font-bold text-center">
              Technical Stack &amp; Proficiencies
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Core Competencies &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Technical Stack.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            Focused, production-tested proficiencies across Java enterprise backend systems, modern React frontends, ACID relational databases, and disciplined software engineering standards.
          </p>

          {/* EXACT 4 METRICS BOXES — IDENTICAL TO PROJECTS PAGE */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-7 max-w-2xl mx-auto">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-white">Java 17</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Backend Core</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-[#A955F7]">React 19</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Frontend UI</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-emerald-400">MySQL</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">ACID Data</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-blue-400">SOLID</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Architecture</span>
            </div>
          </div>
        </header>

        {/* 2. Control Bar: Filter Pills — EXACT MATCH WITH PROJECTS PAGE */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 justify-start sm:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#A955F7] text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] font-semibold scale-[1.02]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Clean 2-Column Skill Cards with Smooth AnimatePresence Switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 sm:mb-20"
          >
            {displayedDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-[#141414] border border-white/10 hover:border-[#A955F7]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden"
                >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-[16px] bg-[#1a191c] border border-white/10 flex items-center justify-center text-[#A955F7] group-hover:scale-105 group-hover:border-[#A955F7]/50 group-hover:bg-[#A955F7]/10 transition-all shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A955F7] uppercase tracking-wider font-semibold">
                        {domain.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A955F7] transition-colors leading-snug">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8e8d91] leading-relaxed mb-6 font-normal">
                    {domain.subtitle}
                  </p>

                  {/* Core Technologies Chips */}
                  <div className="mb-5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2.5 font-semibold">
                      Primary Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.primaryTech.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1c1a21] border border-white/10 group-hover:border-[#A955F7]/30 transition-colors"
                        >
                          <span className="text-xs font-semibold text-white/90">
                            {tech.name}
                          </span>
                          <span className="text-[9px] font-mono text-[#A955F7] bg-[#A955F7]/10 px-1.5 py-0.2 rounded">
                            {tech.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Libraries & Ecosystem */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2 font-semibold">
                      Libraries &amp; Ecosystem
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.libraries.map((lib, lIdx) => (
                        <span
                          key={lIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practical Capabilities */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2.5 font-semibold">
                    Core Architectural Capabilities
                  </div>
                  <ul className="space-y-2">
                    {domain.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs text-[#a09fa4] leading-relaxed">
                        <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
          </motion.div>
        </AnimatePresence>

        {/* 4. Section 06: Engineering Discipline (Preserved Exactly As Loved) */}
        <div className="mb-16 sm:mb-20">
          <CodeStandardsSection />
        </div>

        {/* 5. Opportunity & Technical Collaboration Banner */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[28px] bg-gradient-to-r from-white/[0.02] via-[#A955F7]/[0.08] to-white/[0.02] border border-white/10 hover:border-[#A955F7]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <Sparkles size={13} className="text-[#A955F7]" />
              <span className="text-xs font-mono text-[#A955F7] uppercase tracking-wider font-bold">
                Open for Opportunities
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Looking for a Dedicated Java Full Stack Developer?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-[620px]">
              Ready to contribute across backend Spring Boot services, RESTful API design, database architecture, and modern React user interfaces.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => {
                if (onOpenInterviewModal) {
                  onOpenInterviewModal();
                }
              }}
              className="px-6 py-2.5 sm:py-3 rounded-full bg-[#A955F7] hover:bg-[#9333EA] text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer text-center"
            >
              Schedule Technical Interview
            </button>
            <button
              onClick={onOpenResume}
              className="px-6 py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer text-center"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
