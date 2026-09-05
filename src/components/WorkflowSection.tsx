import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Database,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";

export default function WorkflowSection({ className }: { className?: string }) {
  return (
    <section id="architecture" className={"bg-black py-[90px] px-6 md:px-[60px] relative overflow-hidden " + (className || "")}>
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[60%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#A955F7]/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        {/* Header */}
        <header className="mb-[60px]">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="text-[14px] text-[#555555] font-medium">02.</span>
            <span className="text-[#323232]">&#8212;</span>
            <span className="text-[13px] text-[#555555] font-medium tracking-[2px] uppercase">
              Development Workflow
            </span>
          </div>
          <h2 className="text-[34px] md:text-[52px] font-medium text-white leading-[1.1] max-w-[820px] mb-4">
            Engineering Quality Code <br />
            in 3 Strategic Phases
          </h2>
          <p className="text-[16px] text-[#666667] font-medium">
            How I architect, code, test, and ship production-ready full-stack applications.
          </p>
        </header>

        {/* 3-Step Cards Row */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* CARD 1 — System Design & Schema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-[#171616] border border-[#242524] rounded-[24px] overflow-hidden flex flex-col group"
          >
            <div className="bg-[#111111] p-8 sm:p-10 border-b border-[#232222]/60 relative min-h-[440px] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "100% 4px",
                }}
              />
              {/* Architecture Layer Card Mockup */}
              <div className="relative z-10 bg-[#1a1a1a] border border-[#2b2b2a] rounded-[20px] p-6 w-[290px] sm:w-[330px] transition-transform duration-500 group-hover:scale-[1.03] shadow-2xl">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-[#A955F6]" />
                    <span className="text-[13px] text-[#fefeff] font-bold">Layered Architecture</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Spring Boot
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-[#232222] border border-[#2b2b2a] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-white font-mono font-semibold">1. Controller Layer</span>
                    <span className="text-[10px] text-white/40">HTTP / REST</span>
                  </div>
                  <div className="bg-[#232222] border border-[#2b2b2a] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-white font-mono font-semibold">2. Service Layer</span>
                    <span className="text-[10px] text-[#A955F6]">Business Logic</span>
                  </div>
                  <div className="bg-[#232222] border border-[#2b2b2a] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-white font-mono font-semibold">3. Repository / DAO</span>
                    <span className="text-[10px] text-white/40">Hibernate JPA</span>
                  </div>
                  <div className="bg-[#232222] border border-[#2b2b2a] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-xs">
                    <span className="text-white font-mono font-semibold">4. Entity Models</span>
                    <span className="text-[10px] text-emerald-400">MySQL / DB</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                  <span className="flex items-center gap-1">
                    <Database size={12} className="text-[#A955F6]" /> ACID Compliant
                  </span>
                  <span className="font-mono text-[10px] text-[#A955F6]">Normalized SQL</span>
                </div>
              </div>
            </div>
            <div className="p-7 md:p-8 pb-8 md:pb-10 bg-[#171616] flex-1 flex flex-col justify-start">
              <span className="text-[11px] font-mono text-[#A955F6] uppercase tracking-wider mb-1">Step 01</span>
              <h3 className="text-white text-[22px] font-medium mb-2.5 tracking-tight leading-tight">
                Architecture & Schema Design
              </h3>
              <p className="text-[#767777] text-[14px] leading-[1.65] font-normal">
                Structuring decoupled controller-service-repository layers and normalized relational database schemas with high maintainability.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 — Secure Backend & REST APIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-[#171616] border border-[#242524] rounded-[24px] overflow-hidden flex flex-col group"
          >
            <div className="bg-[#111111] p-8 sm:p-10 border-b border-[#232222]/60 relative min-h-[440px] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "100% 4px",
                }}
              />
              <div className="relative z-10 w-[290px] sm:w-[330px] flex flex-col gap-3 transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] text-white font-bold flex items-center gap-1.5">
                    <Lock size={14} className="text-[#A955F6]" /> API Endpoint Security
                  </span>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 uppercase font-mono font-bold">200 OK</span>
                  </div>
                </div>

                {/* API Box 1: Travely Tour Booking */}
                <div className="bg-[#1a1a1a] border border-[#2b2b2a] rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 font-mono font-bold text-[10px] rounded">
                        POST
                      </span>
                      <p className="text-[12px] text-white font-mono">/api/v1/tours/book</p>
                    </div>
                    <span className="text-[10px] text-white/40">45ms</span>
                  </div>
                  <div className="text-[11px] text-white/60 bg-[#141414] p-2 rounded-lg font-mono">
                    Razorpay Gateway: <span className="text-emerald-400 font-bold">VERIFIED</span>
                  </div>
                </div>

                {/* API Box 2: SyncWork AOP Auth */}
                <div className="bg-[#1a1a1a] border border-[#2b2b2a] rounded-2xl p-4 shadow-xl translate-x-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 bg-purple-500/15 text-purple-400 font-mono font-bold text-[10px] rounded">
                        GET
                      </span>
                      <p className="text-[12px] text-white font-mono">/api/employees/search</p>
                    </div>
                    <span className="text-[10px] text-white/40">32ms</span>
                  </div>
                  <div className="text-[11px] text-white/60 bg-[#141414] p-2 rounded-lg font-mono">
                    AOP Session Filter: <span className="text-[#A955F6] font-bold">PASSED</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2.5 self-center mt-2 shadow-2xl">
                  <CheckCircle2 size={13} className="text-[#A955F6]" />
                  <span className="text-[11px] text-white/80 font-medium">Postman Verified &bull; JWT Ready</span>
                </div>
              </div>
            </div>
            <div className="p-7 md:p-8 pb-8 md:pb-10 bg-[#171616] flex-1 flex flex-col justify-start">
              <span className="text-[11px] font-mono text-[#A955F6] uppercase tracking-wider mb-1">Step 02</span>
              <h3 className="text-white text-[22px] font-medium mb-2.5 tracking-tight leading-tight">
                Secure Backend & REST APIs
              </h3>
              <p className="text-[#767777] text-[14px] leading-[1.65] font-normal">
                Implementing enterprise endpoints, AOP aspect logging, session-based security, and Razorpay gateway integration.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 — Modern Frontend & Cloud Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-[#171616] border border-[#242524] rounded-[24px] overflow-hidden flex flex-col group"
          >
            <div className="bg-[#111111] p-8 sm:p-10 border-b border-[#232222]/60 relative min-h-[440px] flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "100% 4px",
                }}
              />
              <div className="relative z-10 w-[290px] sm:w-[330px] flex flex-col gap-3">
                <div className="bg-[#1a1a1a] border border-[#2b2b2a] rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#A955F6]/15 blur-2xl rounded-full -mr-10 -mt-10" />
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#A955F6]" />
                      <span className="text-[11px] text-white/60 font-bold uppercase tracking-wider">
                        Render Cloud
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold font-mono">100% Live</span>
                  </div>
                  <h4 className="text-white text-[16px] font-bold leading-tight mb-3">
                    Fast React 19 Frontend + Vite
                  </h4>
                  <div className="flex items-end gap-1.5 h-10 px-1">
                    {[35, 60, 45, 80, 70, 95, 85].map((h: number, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: h + "%" }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={
                          "flex-1 rounded-t-sm " +
                          (i === 5
                            ? "bg-[#A955F6] shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                            : "bg-white/10")
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-[#232222] border border-[#323232] rounded-2xl p-3.5 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Zap size={16} />
                    </div>
                    <div>
                      <p className="text-[12px] text-white font-bold">Responsive across 4K & Mobile</p>
                      <p className="text-[10px] text-white/40">Tailwind CSS &bull; Framer Motion</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/40" />
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 flex items-center gap-3 ml-4 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#A955F6] animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                  <div>
                    <p className="text-[11px] text-white/80 font-medium">Git Version Controlled</p>
                    <p className="text-[9px] text-white/30">Semantic commits & PR workflows</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7 md:p-8 pb-8 md:pb-10 bg-[#171616] flex-1 flex flex-col justify-start">
              <span className="text-[11px] font-mono text-[#A955F6] uppercase tracking-wider mb-1">Step 03</span>
              <h3 className="text-white text-[22px] font-medium mb-2.5 tracking-tight leading-tight">
                Fluid React UI & Cloud Deploy
              </h3>
              <p className="text-[#767777] text-[14px] leading-[1.65] font-normal">
                Crafting polished, reactive user interfaces and deploying production web systems with seamless cloud hosting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
