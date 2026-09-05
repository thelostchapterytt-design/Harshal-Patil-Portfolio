import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  ChevronRight,
  CreditCard,
  Search,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "../data/portfolioData";

export default function ProjectsBentoSection({ className }: { className?: string }) {
  const travely = PROJECTS.find((p) => p.id === "travely") || PROJECTS[0];
  const syncwork = PROJECTS.find((p) => p.id === "syncwork") || PROJECTS[1];
  const aiTools = PROJECTS.find((p) => p.id === "ai-image-tools") || PROJECTS[2];
  const salesDashboard = PROJECTS.find((p) => p.id === "sales-dashboard") || PROJECTS[3];
  const ultraedit = PROJECTS.find((p) => p.id === "ultraedit-clone") || PROJECTS[4];
  const itzfizz = PROJECTS.find((p) => p.id === "itzfizz-hero") || PROJECTS[5];

  return (
    <section id="projects" className={"bg-black py-[90px] px-6 md:px-[60px] relative overflow-hidden " + (className || "")}>
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A955F7]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* Header Row */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-[60px]">
          <div className="flex-1">
            <div className="flex items-center gap-[10px] mb-3">
              <span className="text-[14px] text-[#555555] font-medium">03.</span>
              <span className="text-[#323232]">&mdash;</span>
              <span className="text-[13px] text-[#555555] font-medium tracking-[2px] uppercase">
                Featured Work & Systems
              </span>
            </div>
            <h2 className="text-[34px] md:text-[52px] font-medium text-white leading-[1.1] max-w-[820px] mb-4 tracking-tight">
              Production-Grade Projects Built with Code & Passion.
            </h2>
            <p className="text-[16px] text-[#666667] font-medium">
              Explore live applications, GitHub source code, and enterprise architectures.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-white text-[#0a0b0a] text-[14px] font-semibold border-none rounded-full flex items-center gap-2.5 transition-all self-start md:self-end hover:bg-[#f1f0f0] shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View All on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* CARD 1 — Travely Booking System (MERN + Razorpay) */}
          <div className="md:col-span-4 bg-[#171717] border border-[#232222] rounded-[28px] p-8 min-h-[540px] flex flex-col justify-between overflow-hidden relative group hover:border-[#A955F7]/40 transition-all duration-500">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#252524] rounded-full mb-6">
                <CreditCard size={13} className="text-[#A955F7]" />
                <span className="text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                  MERN &bull; Razorpay Live
                </span>
              </div>

              <h3 className="text-white text-[28px] font-bold mb-2 tracking-tight">
                {travely.title}
              </h3>
              <p className="text-[#888889] text-[14px] leading-[1.6] mb-6">
                {travely.description}
              </p>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2 mb-6">
                {travely.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Overlapping Ticket Cards Graphic */}
            <div className="relative w-full h-[220px] flex justify-center items-end mt-auto">
              <div
                className="absolute bottom-0 left-[20px] w-[300px] h-[160px] rounded-[20px] bg-[#232222] border border-[#323232] z-0 transition-transform duration-500 group-hover:-translate-y-6"
                style={{ transform: "rotate(-6deg) translateY(-20px)" }}
              >
                <div className="p-4 flex items-center justify-between text-xs text-white/30 font-mono">
                  <span>Booking #TRV-8941</span>
                  <span>CONFIRMED</span>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 w-[310px] h-[170px] rounded-[20px] border border-[#3b3b3a] z-20 transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-2 shadow-2xl p-5 flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, #1e1e1e 0%, #292929 50%, #1e1e1e 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#A854F6]">&#10035;</span>
                    <span className="text-white font-bold text-base">Travely Go</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                    PAID via Razorpay
                  </span>
                </div>

                <div className="text-xs text-white/80">
                  <p className="font-semibold text-white">Manali & Ladakh Adventure Pack</p>
                  <p className="text-[10px] text-white/40">Private Route &bull; Verified JWT</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-white font-mono font-bold text-sm">₹24,999</span>
                  <span className="text-[10px] text-white/40 font-mono">Render Hosted</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5 relative z-30">
              {travely.liveUrl && (
                <a
                  href={travely.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-[#A955F7] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#9332EA] transition-all"
                >
                  <span>Live App Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
              <a
                href={travely.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 hover:bg-white/10 transition-all"
              >
                <Github size={14} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* CARD 2 — SyncWork Enterprise Employee System (Spring Boot + MySQL) */}
          <div className="md:col-span-6 bg-[#171717] border border-[#232222] rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden min-h-[540px] hover:border-[#A955F7]/40 transition-all duration-500">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#252524] rounded-full">
                  <Layers size={13} className="text-[#A955F7]" />
                  <span className="text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                    Enterprise Java &bull; Spring Boot 3
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
                    AOP Security
                  </span>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
                    Hibernate ORM
                  </span>
                </div>
              </div>

              <h3 className="text-white text-[28px] md:text-[32px] font-bold leading-[1.15] mb-3 tracking-tight">
                {syncwork.title}
              </h3>
              <p className="text-[#888889] text-[14px] leading-[1.7] mb-6">
                {syncwork.description}
              </p>
            </div>

            {/* Embedded Interactive Directory Mockup */}
            <div className="bg-[#0f0e0f] border border-[#1f1e1f] rounded-[20px] p-5 shadow-inner my-4">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#A955F7]/20 border border-[#A955F7]/30 flex items-center justify-center text-[#A955F7]">
                    <Search size={15} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold">Department Employee Registry</h4>
                    <p className="text-[#666] text-[11px]">Controller &bull; Service &bull; Repository</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  MySQL 8.0
                </span>
              </div>

              {/* Sample Records */}
              <div className="space-y-2 text-xs">
                {[
                  { name: "Harshal Patil", role: "Java Full Stack Developer", dept: "Engineering", status: "Active" },
                  { name: "Priya Deshmukh", role: "Spring Boot Architect", dept: "Backend Services", status: "Active" },
                  { name: "Kunal Sharma", role: "QA Automation Engineer", dept: "Testing", status: "Active" },
                ].map((emp, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#171717] border border-[#232222] rounded-xl flex items-center justify-between text-white/80 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#A955F7]/20 text-[#A955F7] font-bold flex items-center justify-center text-[10px]">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <span className="font-semibold text-white block leading-none">{emp.name}</span>
                        <span className="text-[10px] text-white/40">{emp.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/50">{emp.dept}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a
                href={syncwork.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-white text-black font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-white/90 transition-all"
              >
                <Github size={14} />
                <span>View Architecture & Code</span>
              </a>
              <span className="text-[11px] text-white/40 font-mono">Layered Architecture &bull; AOP Security</span>
            </div>
          </div>

          {/* CARD 3 — AI Image Tools Suite */}
          <div className="md:col-span-6 bg-[#171717] border border-[#232222] rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden min-h-[460px] hover:border-[#A955F7]/40 transition-all duration-500">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#252524] rounded-full mb-6">
                <Sparkles size={13} className="text-[#A955F7]" />
                <span className="text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                  React 19 &bull; Generative AI Tools
                </span>
              </div>
              <h3 className="text-white text-[28px] font-bold leading-[1.1] mb-2 tracking-tight">
                {aiTools.title}
              </h3>
              <p className="text-[#888889] text-[14px] leading-[1.7] mb-6">
                {aiTools.description}
              </p>
            </div>

            {/* Interactive Canvas Bar Visual */}
            <div className="bg-[#1a1a1a]/40 border border-[#252524] rounded-[20px] p-6 flex-1 flex flex-col justify-center mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#888889] text-[12px] font-mono uppercase tracking-wider">
                  Real-time Neural Canvas Filters
                </span>
                <span className="text-emerald-400 text-[11px] font-mono">100% Client Accelerated</span>
              </div>

              {/* Progress bars visualizer */}
              <div className="flex gap-[4px] h-[32px] mb-4">
                {Array.from({ length: 36 }).map((_, i) => {
                  let color = "#343534";
                  if (i < 12) color = "#A854F6";
                  else if (i < 20) color = "#c185fd";
                  else if (i < 26) color = "#e9d4fe";

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scaleY: 0.2 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02, duration: 0.5 }}
                      className="flex-1 rounded-full origin-bottom"
                      style={{ backgroundColor: color }}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between items-center text-xs text-white/50">
                <span>Computational Image Enhancements</span>
                <span className="text-[#A955F7] font-bold">Fast Canvas API</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {aiTools.liveUrl && (
                <a
                  href={aiTools.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 bg-[#A955F7] text-white font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-[#9332EA] transition-all"
                >
                  <span>Launch AI Tool</span>
                  <ExternalLink size={13} />
                </a>
              )}
              <a
                href={aiTools.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs font-medium rounded-xl flex items-center gap-1.5"
              >
                <Github size={13} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — 2 Stacked Mini Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* MINI CARD 1 — Sales Dashboard */}
            <div className="bg-[#101010] border border-[#232222] rounded-[30px] p-7 relative overflow-hidden group flex-1 flex flex-col justify-between hover:border-[#A955F7]/40 transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#888889] text-[11px] font-mono uppercase tracking-wider">
                    Analytics Dashboard
                  </p>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                    Recharts
                  </span>
                </div>
                <h4 className="text-white text-[24px] font-bold tracking-tight mb-2">
                  {salesDashboard.title}
                </h4>
                <p className="text-xs text-[#777] leading-relaxed">
                  Interactive sales and KPI metrics dashboard with real-time revenue graphs.
                </p>
              </div>

              <div className="relative my-4">
                <svg width="100%" height="45" viewBox="0 0 100 32" fill="none" className="overflow-visible">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M0 24 C15 24 25 10 38 15 C50 20 60 8 75 14 C88 20 92 6 100 8"
                    stroke="#A854F6"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <a
                  href={salesDashboard.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A955F7] font-semibold hover:underline flex items-center gap-1"
                >
                  GitHub Repository <ChevronRight size={13} />
                </a>
                <span className="text-[10px] text-white/30 font-mono">REST Driven</span>
              </div>
            </div>

            {/* MINI CARD 2 — UltraEdit Clone & Itzfizz Hero */}
            <div className="bg-[#101010] border border-[#232222] rounded-[30px] p-7 relative overflow-hidden group flex-1 flex flex-col justify-between hover:border-[#A955F7]/40 transition-all shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#888889] text-[11px] font-mono uppercase tracking-wider">
                    Frontend Replicas & Physics
                  </p>
                  <span className="text-[10px] text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded">
                    Pixel Perfect
                  </span>
                </div>
                <h4 className="text-white text-[22px] font-bold tracking-tight mb-2">
                  UltraEdit Clone & Itzfizz Hero
                </h4>
                <p className="text-xs text-[#777] leading-relaxed">
                  Responsive clones & 60fps kinetic motion UI deployed and accessible live.
                </p>
              </div>

              <div className="flex flex-col gap-2 my-3">
                <a
                  href={ultraedit.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-xs transition-colors"
                >
                  <span className="text-white font-medium">UltraEdit Landing Clone</span>
                  <span className="text-[#A955F7] flex items-center gap-1 font-mono text-[11px]">
                    Live <ExternalLink size={11} />
                  </span>
                </a>
                <a
                  href={itzfizz.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-xs transition-colors"
                >
                  <span className="text-white font-medium">Itzfizz Motion Hero</span>
                  <span className="text-[#A955F7] flex items-center gap-1 font-mono text-[11px]">
                    Live <ExternalLink size={11} />
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-white/40">
                <span>100% Tailwind CSS &bull; Motion</span>
                <a
                  href={ultraedit.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
