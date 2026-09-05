import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Sparkles,
  Search,
  Eye,
  X,
  Cpu,
  Database,
  ShieldCheck,
  CreditCard,
  Code2,
  Terminal,
  Globe,
  ArrowRight,
  Filter,
  Zap,
  Check,
  Server,
  Activity,
  Maximize2,
} from "lucide-react";
import { PROJECTS, Project } from "../data/portfolioData";

interface ProjectsPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

// Architectural Flows for Deep-Dive Modal
const PROJECT_ARCHITECTURES: Record<
  string,
  {
    flow: string[];
    keyDecisions: string[];
    security: string;
    databaseDesign: string;
  }
> = {
  travely: {
    flow: [
      "Client UI (React 19 + Tailwind CSS + Responsive Router)",
      "RESTful API Gateway (Express & Node.js Endpoint Routers)",
      "JWT Security Middleware & Role-Based Auth Filter",
      "Booking & Catalog Controller + Business Validation Layer",
      "Razorpay Payment Gateway Webhook & HMAC Verification",
      "MongoDB Cloud Cluster (Atlas Mongoose Schemas & Indexing)",
    ],
    keyDecisions: [
      "Integrated Razorpay server-side signature verification to prevent payment tampering.",
      "Implemented client-side private route wrappers with automatic token refreshing.",
      "Optimized tour catalog query indexes for sub-100ms multi-filter search response.",
    ],
    security: "JWT Bearer Tokens, Bcrypt password hashing, Razorpay HMAC SHA256 Webhook Verification, CORS policy.",
    databaseDesign: "Document model with denormalized customer reviews, indexed tour destinations, and ACID transaction sessions for bookings.",
  },
  syncwork: {
    flow: [
      "Presentation Layer (JSP / REST Client Dynamic UI)",
      "Spring DispatcherServlet (Spring MVC 6 Request Dispatcher)",
      "Aspect-Oriented Security Interceptors (Spring AOP Logging & Auth)",
      "Service Layer (Business Logic & DTO Entity Validation)",
      "Hibernate JPA / Hibernate Session Factory & HikariCP Pool",
      "MySQL Enterprise Relational Database (Normalized 3NF)",
    ],
    keyDecisions: [
      "Strict 4-layer separation (Controller -> Service -> DAO Repository -> Entity) for enterprise maintainability.",
      "Custom Spring AOP logging and execution timer aspect for auditing all payroll operations.",
      "Connection pooling via HikariCP ensuring high throughput under concurrent employee record operations.",
    ],
    security: "Session management, CSRF tokens, Spring AOP authorization guards, parameterized JPA queries preventing SQL injection.",
    databaseDesign: "Third Normal Form (3NF) relational schema with Foreign Key cascading, department indexing, and audit timestamps.",
  },
  "ai-image-tools": {
    flow: [
      "React 19 + Vite Reactive Dynamic Studio UI",
      "HTML5 Canvas 2D Graphic Engine & Dynamic Filter Pipeline",
      "Client-side Image Transformation & Web Worker Multi-thread Compression",
      "Generative Processing Handlers & Preset Matrix Filters",
      "Instant Non-destructive Export (PNG / WEBP / JPEG)",
    ],
    keyDecisions: [
      "Offloaded image pixel-manipulation to background workers to maintain a silky 60fps UI.",
      "Instant local preview with zero upload latency before committing changes.",
      "Modular extensible filter pipeline allowing easy addition of custom visual matrix algorithms.",
    ],
    security: "Client-side sandboxed canvas contexts, origin protection, no sensitive image persistence on foreign servers.",
    databaseDesign: "Stateless client architecture with browser IndexedDB caching for local project sessions.",
  },
  "sales-dashboard": {
    flow: [
      "Responsive React 19 Executive Command Center UI",
      "Aggregation Hook State Manager with Real-time Filtering",
      "Recharts SVG Hardware-Accelerated Responsive Visualizer",
      "Dynamic Multi-Filter (Region, Quarter, Department, Category)",
      "Exportable CSV & High-Res Vector Chart Snapshot Engine",
    ],
    keyDecisions: [
      "Memoized heavy statistical computations with useMemo to ensure fluid zoom & pan animations.",
      "Designed responsive flex-grid cards adapting from smartphone single-metric view to 4K ultra-wide command center.",
      "High-contrast color scales for dark-mode data legibility passing WCAG AAA standards.",
    ],
    security: "Sanitized data feeds, strictly typed TypeScript schemas for all incoming API telemetry.",
    databaseDesign: "Time-series transaction logs aggregated into daily, weekly, and monthly revenue snapshots.",
  },
  "ultraedit-clone": {
    flow: [
      "Componentized React 19 Semantic Layout Structure",
      "Tailwind CSS Grid & Subgrid Responsive Geometry",
      "Micro-Interaction Transitions & Dropdown Logic",
      "Optimized High-DPI Vector Pipeline (SVGs & WebP)",
      "Cross-Browser Responsive Rendering Engine",
    ],
    keyDecisions: [
      "Achieved 98+ Lighthouse performance score through zero bloated third-party dependencies.",
      "Pixel-perfect replication of complex multi-tier software product marketing tables.",
      "Full mobile drawer accessibility with focus trapping and keyboard navigation.",
    ],
    security: "Static site generation with content security headers (CSP) and no external runtime vulnerability vectors.",
    databaseDesign: "Static asset manifests with cache-control immutable headers.",
  },
  "itzfizz-hero": {
    flow: [
      "Motion Spring Physics Engine (Framer Motion Integration)",
      "Interactive Pointer Tracking & 3D Layer Parallax Calculation",
      "Kinetic Display Typography Rendering with Sub-pixel Smoothing",
      "Dynamic Sound Synthesis & Interactive Micro-feedback",
      "Hardware Accelerated 60 FPS Composite Layer Rendering",
    ],
    keyDecisions: [
      "Utilized GPU composite layers (transform: translate3d) to guarantee zero jank on mobile displays.",
      "Implemented physics spring dampening for organic mouse follower velocity.",
      "Lightweight canvas particle burst system triggered on interactive hover states.",
    ],
    security: "Sandboxed Web Audio API contexts, zero external script dependencies.",
    databaseDesign: "Client runtime state with transient animation frames.",
  },
};

export default function ProjectsPage({ onOpenContact, onOpenResume }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inspectProject, setInspectProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Repositories", count: PROJECTS.length },
    { id: "fullstack", label: "Full-Stack (Java & MERN)", count: 2 },
    { id: "backend", label: "Spring Boot & Backend", count: 2 },
    { id: "frontend", label: "React & Web Craft", count: 4 },
  ];

  // Filtering by category + search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Category Match
      let matchesCategory = true;
      if (activeCategory === "fullstack") {
        matchesCategory = project.id === "travely" || project.id === "syncwork";
      } else if (activeCategory === "backend") {
        matchesCategory =
          project.id === "syncwork" ||
          project.technologies.some(
            (t) =>
              t.toLowerCase().includes("spring") ||
              t.toLowerCase().includes("java") ||
              t.toLowerCase().includes("node")
          );
      } else if (activeCategory === "frontend") {
        matchesCategory =
          project.id === "ai-image-tools" ||
          project.id === "ultraedit-clone" ||
          project.id === "sales-dashboard" ||
          project.id === "itzfizz-hero";
      }

      // Search Query Match (Title, Summary, Highlights, Technologies)
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Project Visual Mockup Render Helper
  const renderProjectMockup = (projectId: string) => {
    switch (projectId) {
      case "travely":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#18122B]/70 to-[#271033]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-[#A955F7]/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">api.travely.cloud/bookings</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Razorpay Live
              </span>
            </div>
            {/* Visual Booking Ticket */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2.5 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#A955F7]/20 flex items-center justify-center text-[#A955F7]">
                  <CreditCard size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">Goa & Manali Tour Pack</div>
                  <div className="text-[9px] font-mono text-white/40">JWT Verified &bull; ₹14,999</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                  200 OK
                </span>
              </div>
            </div>
            {/* Micro pills */}
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>MongoDB Atlas Cloud</span>
              <span>Express Gateway</span>
            </div>
          </div>
        );

      case "syncwork":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#121c2b]/70 to-[#0e2733]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">spring-boot://syncwork:8080</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Spring MVC 6
              </span>
            </div>
            {/* Console Log Preview */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2.5 flex flex-col gap-1 backdrop-blur-md font-mono text-[10px]">
              <div className="flex items-center justify-between text-white/80">
                <span className="text-blue-400 font-semibold">[DispatcherServlet]</span>
                <span className="text-emerald-400 text-[9px]">READY</span>
              </div>
              <div className="text-[9px] text-white/50 truncate">
                HikariPool-1: 10/10 active &bull; AOP Security Guard: ON
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>Hibernate JPA ORM</span>
              <span>MySQL 8.0</span>
            </div>
          </div>
        );

      case "ai-image-tools":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#1e1329]/70 to-[#22102e]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-[#A955F7]/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">canvas.ai-studio.app</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                WebWorker 60FPS
              </span>
            </div>
            {/* Canvas Sliders simulation */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2.5 backdrop-blur-md space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-white/80 font-mono">
                <span>Contrast Matrix</span>
                <span className="text-purple-400">125%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-gradient-to-r from-purple-500 to-[#A955F7] rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>HTML5 Canvas 2D</span>
              <span>Client-side Zero Latency</span>
            </div>
          </div>
        );

      case "sales-dashboard":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#10231c]/70 to-[#122e23]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">analytics.dashboard.live</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                +34.2% YoY
              </span>
            </div>
            {/* Mini Sparkline Chart */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2.5 backdrop-blur-md flex items-center justify-between">
              <div>
                <div className="text-[9px] font-mono text-white/40 uppercase">ARR Revenue</div>
                <div className="text-[13px] font-bold text-white font-mono">$128,450.00</div>
              </div>
              <div className="flex items-end gap-1 h-6">
                <span className="w-1.5 h-2 bg-emerald-500/40 rounded-t" />
                <span className="w-1.5 h-3 bg-emerald-500/60 rounded-t" />
                <span className="w-1.5 h-4 bg-emerald-500/80 rounded-t" />
                <span className="w-1.5 h-5 bg-emerald-400 rounded-t" />
                <span className="w-1.5 h-6 bg-emerald-300 rounded-t" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>Recharts SVG Vector</span>
              <span>Instant Dynamic Filters</span>
            </div>
          </div>
        );

      case "ultraedit-clone":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#1b1c20]/70 to-[#222329]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-amber-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">ultraedit.product.page</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                98+ Lighthouse
              </span>
            </div>
            {/* Code Editor Tab preview */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2 backdrop-blur-md font-mono text-[9px] text-white/70 space-y-0.5">
              <div className="text-white/40 border-b border-white/10 pb-1 flex gap-2">
                <span className="text-amber-300">Editor.tsx</span>
                <span>Pricing.css</span>
              </div>
              <div className="text-white/80 pt-0.5">
                <span className="text-[#A955F7]">const</span> Layout = () =&gt; &lt;ProductGrid /&gt;;
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>Tailwind Subgrid</span>
              <span>100% Responsive Craft</span>
            </div>
          </div>
        );

      case "itzfizz-hero":
        return (
          <div className="w-full h-36 sm:h-40 bg-gradient-to-br from-black/90 via-[#27122e]/70 to-[#1f0e2b]/60 rounded-xl p-3 sm:p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden group-hover:border-pink-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                <span className="text-[10px] font-mono text-white/70">physics.itzfizz.experience</span>
              </div>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-pink-500/15 text-pink-300 border border-pink-500/30">
                60 FPS Smooth
              </span>
            </div>
            {/* Kinetic visual */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-2.5 backdrop-blur-md flex items-center justify-between">
              <div>
                <span className="text-[12px] font-black tracking-wider text-transparent bg-gradient-to-r from-white via-pink-300 to-[#A955F7] bg-clip-text">
                  KINETIC MOTION
                </span>
                <div className="text-[9px] font-mono text-white/40">Spring Physics &bull; Dampened</div>
              </div>
              <div className="w-6 h-6 rounded-full border border-pink-400/40 flex items-center justify-center text-pink-400 animate-spin">
                <Zap size={11} />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 pt-1 border-t border-white/5">
              <span>Framer Motion Spring</span>
              <span>Interactive Audio Feedback</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white antialiased min-h-screen pt-24 sm:pt-32 pb-20 px-3 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Cosmic Atmosphere (Identical to Home page) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] bg-[#A955F7]/12 blur-[160px] rounded-full" />
        <div className="absolute top-[35%] right-[-5%] w-[450px] h-[450px] bg-blue-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[#A955F7]/8 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* 1. Header (Centered, Clean & Sophisticated, exactly matching Home page theme) */}
        <header className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold">02.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Production Repositories &amp; Deployments
            </span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4">
            Engineered Systems &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Full-Stack Code.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            Enterprise Java Spring Boot systems, resilient full-stack MERN architectures, and high-performance React frontends with live cloud deployments and open-source GitHub repositories.
          </p>

          {/* Quick Metrics Bar across all devices */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-7 max-w-2xl mx-auto">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-white">06</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Public Repos</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-[#A955F7]">04</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Cloud Deployed</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-emerald-400">100%</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Java &amp; Full Stack</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-blue-400">15+</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Core Techs</span>
            </div>
          </div>
        </header>

        {/* 2. Control Bar: Filter Pills & Instant Live Search (Centered & Responsive) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-white/10">
          {/* Category Filter Pills (Mobile friendly slider or wrap) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 justify-start sm:justify-center lg:justify-start">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#A955F7] text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] font-semibold"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10.5px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/50"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search by tech, keyword, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#A955F7]/60 focus:bg-white/[0.08] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white cursor-pointer"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* 3. Projects Grid (Exact same styling as Home page's #141414 dark obsidian cards with visual previews) */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-[#141414] border border-white/10 rounded-[28px] max-w-xl mx-auto p-8">
            <Layers size={36} className="mx-auto text-white/30 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching projects found</h3>
            <p className="text-xs text-white/50 mb-5">
              Try searching with another keyword or reset the filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-full bg-[#A955F7] text-white text-xs font-semibold cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#141414] border border-white/10 rounded-2xl sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group hover:border-[#A955F7]/40 transition-all duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(168,85,247,0.14)] hover:-translate-y-1"
              >
                <div>
                  {/* Browser / App Window Chrome with macOS traffic lights */}
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    {project.liveUrl ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Cloud
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-white/50 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                        Enterprise Architecture
                      </span>
                    )}
                  </div>

                  {/* Visual Mockup Viewport */}
                  <div className="mb-4">
                    {renderProjectMockup(project.id)}
                  </div>

                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3">
                    {project.id === "travely" ? (
                      <CreditCard size={12} className="text-[#A955F7]" />
                    ) : project.id === "syncwork" ? (
                      <Server size={12} className="text-[#A955F7]" />
                    ) : (
                      <Code2 size={12} className="text-[#A955F7]" />
                    )}
                    <span className="text-[10.5px] text-[#A955F7] font-mono font-bold tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:text-[#A955F7] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Engineering Highlight */}
                  <div className="mb-4 p-2.5 sm:p-3 rounded-xl bg-black/60 border border-white/5 flex items-start gap-2 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                    <span className="font-medium text-[11px] sm:text-xs leading-tight">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10.5px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-white/70 group-hover:border-white/10 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: 3 Stats & Action Buttons */}
                <div className="pt-4 border-t border-white/10">
                  {/* 3 Stats Grid */}
                  <div className="grid grid-cols-3 gap-1 mb-3.5 py-2 px-2.5 rounded-xl bg-black/50 border border-white/5 text-center">
                    {project.stats.map((s, i) => (
                      <div key={i} className="overflow-hidden">
                        <span className="block text-[8.5px] font-mono text-white/40 uppercase truncate">
                          {s.label}
                        </span>
                        <span className="block text-[11px] font-semibold text-white/90 truncate font-mono">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Inspect Architecture Deep-Dive Button */}
                  <button
                    onClick={() => setInspectProject(project)}
                    className="w-full mb-2.5 py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-[#A955F7]/15 border border-white/10 hover:border-[#A955F7]/40 text-white/70 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Eye size={13} className="text-[#A955F7]" />
                    <span>Inspect System Architecture</span>
                  </button>

                  {/* Action Buttons (Live Demo & Source Code) */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 bg-[#A955F7] hover:bg-[#9332EA] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer text-center"
                      >
                        <span>Live App</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveUrl ? "flex-1" : "w-full"
                      } py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center`}
                    >
                      <Github size={13} />
                      <span>{project.liveUrl ? "Source" : "GitHub Repo"}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 4. Recruiter & Collaboration Callout (Aligned with home page style) */}
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[28px] bg-gradient-to-r from-white/[0.03] via-[#A955F7]/10 to-white/[0.03] border border-[#A955F7]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono text-[#A955F7] uppercase tracking-wider font-bold">
              Engineering &amp; Code Inquiries
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
              Want to inspect code or discuss system architecture?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-[620px]">
              Open for full-stack engineering roles, enterprise Java discussions, and modern scalable web applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 sm:py-3 rounded-full bg-[#A955F7] hover:bg-[#9333EA] text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer text-center"
            >
              Let&apos;s Connect
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

      {/* 5. Interactive System Architecture Modal */}
      <AnimatePresence>
        {inspectProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-[#0E0E14] border border-[#A955F7]/40 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A955F7] bg-[#A955F7]/10 border border-[#A955F7]/30 px-2.5 py-0.5 rounded-full font-medium">
                      {inspectProject.category}
                    </span>
                    {inspectProject.liveUrl && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live on Cloud
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {inspectProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => setInspectProject(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="py-6 space-y-6">
                {/* Flow Diagram */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-[#A955F7]" />
                    <span>Architectural Execution &amp; Request Flow</span>
                  </h4>
                  <div className="bg-black/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                    <div className="flex flex-col gap-2.5">
                      {(PROJECT_ARCHITECTURES[inspectProject.id]?.flow || [
                        "Presentation Client Interface (React / HTML5)",
                        "Controller & Routing Middleware (Spring / Express)",
                        "Business Logic Validation & Service Layer",
                        "Data Access Layer (JPA / Mongoose)",
                        "Persistent Storage (MySQL / MongoDB)",
                      ]).map((step, idx, arr) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#A955F7]/20 border border-[#A955F7]/40 text-[#A955F7] text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-white/90 font-mono">
                            {step}
                          </span>
                          {idx < arr.length - 1 && (
                            <span className="hidden sm:inline text-white/20 text-xs">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Decisions */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3 flex items-center gap-2">
                    <Cpu size={14} className="text-[#A955F7]" />
                    <span>Key Engineering Decisions &amp; Performance</span>
                  </h4>
                  <div className="space-y-2">
                    {(PROJECT_ARCHITECTURES[inspectProject.id]?.keyDecisions || [
                      "Implemented robust exception handling with custom global response handlers.",
                      "Optimized component state rendering with minimal re-render cycles.",
                      "Strict adherence to DRY (Don't Repeat Yourself) design principles.",
                    ]).map((decision, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-white/80"
                      >
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security & Database */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                      <ShieldCheck size={14} className="text-[#A955F7]" />
                      <span className="uppercase">Security &amp; Auth</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {PROJECT_ARCHITECTURES[inspectProject.id]?.security ||
                        "Standard role validation, input sanitization, and secure communication protocols."}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-2">
                      <Database size={14} className="text-emerald-400" />
                      <span className="uppercase">Persistence Architecture</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {PROJECT_ARCHITECTURES[inspectProject.id]?.databaseDesign ||
                        "Optimized relational or document schemas with indexing and referential integrity."}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2.5">
                    Technologies in this repository
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs font-mono text-white/40">
                  ID: {inspectProject.id} &bull; Production Ready
                </span>
                <div className="flex items-center gap-2.5">
                  {inspectProject.liveUrl && (
                    <a
                      href={inspectProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    >
                      <span>Open Live App</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  <a
                    href={inspectProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Github size={14} />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
