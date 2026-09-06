import React from "react";
import { motion } from "framer-motion";
import { Zap, Rocket, Building2, Check, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HireMeSectionProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" />
      <path
        d="M6 10 L9 13 L14 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HireMeSection({ onOpenContact, onOpenResume }: HireMeSectionProps) {
  return (
    <section id="hire" className="bg-black pt-[96px] pb-[160px] px-6 md:px-[60px] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A955F7]/10 blur-[130px] rounded-full" />
      </div>

      {/* Cosmic Horizon Effect (from Velara template) */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden isolate">
        <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[220%] aspect-[4/1] bg-black rounded-[100%] border-t border-[#A955F7]/50 shadow-[0_-30px_70px_rgba(168,85,247,0.3)]" />
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[140%] h-[250px] bg-gradient-to-t from-[#A955F7]/60 via-[#A955F7]/10 to-transparent blur-[60px] opacity-80" />
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#A955F7]/40 blur-[80px] rounded-full" />
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[250px] h-[80px] bg-[#A955F7]/50 blur-[50px] rounded-full" />
        <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-[120px] h-[40px] bg-white/40 blur-[15px] rounded-full" />
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40 animate-pulse"
            style={{
              width: (i % 3) + 1.5 + "px",
              height: (i % 3) + 1.5 + "px",
              left: ((i * 12.7) % 100) + "%",
              bottom: ((i * 17.3) % 550) + "px",
              animationDelay: i * 0.1 + "s",
              animationDuration: (i % 4) + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        {/* Header */}
        <header className="mb-[60px]">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="text-[14px] text-[#545454] font-medium">07.</span>
            <span className="text-[#323233]">&#8212;</span>
            <span className="text-[13px] text-[#545454] font-medium tracking-[2px] uppercase">
              Hiring & Engagement Models
            </span>
          </div>
          <h2 className="text-[34px] md:text-[52px] font-medium text-white leading-[1.1] max-w-[820px] mb-4 tracking-tight">
            Ready to Add Value to Your Engineering Team
          </h2>
          <p className="text-[16px] text-white/50 font-normal">
            Whether you need a dedicated full-time fresher, a high-impact intern, or an agile project developer.
          </p>
        </header>

        {/* 3 Hiring Cards Row */}
        <div className="flex flex-col lg:flex-row gap-[24px] items-stretch">
          {/* CARD 1 — Full-Time Junior / Fresher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-[32px] flex flex-col group hover:border-[#A955F7]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-white/10 rounded-[12px] flex items-center justify-center ring-1 ring-white/20">
                  <Zap size={20} className="text-white" />
                </div>
                <span className="font-semibold text-[16px] text-white/90">Full-Time Role</span>
              </div>
            </div>

            <div className="mb-[14px]">
              <span className="text-[38px] md:text-[48px] font-medium text-white tracking-tight">
                Full-Time
              </span>
              <span className="text-[14px] text-[#A955F7] font-medium ml-[8px] font-mono">Fresher / Trainee</span>
            </div>

            <p className="text-[14px] text-white/50 mb-[28px] font-normal leading-[1.6]">
              Junior Java Developer &bull; Spring Boot &bull; React Full Stack
            </p>

            <button
              onClick={onOpenContact}
              className="bg-white text-black rounded-full py-[14px] px-[20px] w-full text-[14px] font-bold border-none cursor-pointer mb-[12px] hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Hire Full-Time
            </button>
            <button
              onClick={onOpenResume}
              className="bg-transparent text-white/80 border border-white/10 rounded-full py-[13px] px-[20px] w-full text-[14px] font-medium cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Download Resume
            </button>

            <div className="h-[1px] bg-white/5 my-[28px]" />

            <div className="flex flex-col gap-[14px]">
              <p className="text-[11px] font-bold text-white/30 tracking-[2px] mb-[4px] uppercase">
                INCLUDED CAPABILITIES
              </p>
              {[
                "Spring Boot 3 + Spring MVC backend engineering",
                "Full-stack MERN with React 19 & Tailwind",
                "Relational MySQL & MongoDB database integration",
                "Relocation ready to Pune / Mumbai / Bangalore / Remote",
                "Kiran Academy full-stack certified foundations",
              ].map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-[12px]">
                  <CheckIcon color="#FFFEFE" />
                  <span className="text-[13px] text-white/70 font-normal leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 2 — Software Developer Internship (Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-white/[0.05] backdrop-blur-xl border border-[#A955F7]/50 rounded-[32px] p-[32px] flex flex-col group transition-all duration-500 relative shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(168,85,247,0.3)] hover:border-[#A955F7]"
          >
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-[#A955F7]/20 rounded-[12px] flex items-center justify-center ring-1 ring-[#A955F7]/40">
                  <Rocket size={20} className="text-[#A955F7]" />
                </div>
                <span className="font-semibold text-[16px] text-white/90">Internship Trainee</span>
              </div>
              <div className="bg-[#A955F7] text-white rounded-full py-[4px] px-[12px] text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Most Popular
              </div>
            </div>

            <div className="mb-[14px]">
              <span className="text-[38px] md:text-[48px] font-medium text-white tracking-tight">
                3 to 6 Mo.
              </span>
              <span className="text-[14px] text-white/50 font-medium ml-[8px]">Commitment</span>
            </div>

            <p className="text-[14px] text-white/50 mb-[28px] font-normal leading-[1.6]">
              Software Development Intern &bull; Java / Web / QA
            </p>

            <button
              onClick={onOpenContact}
              className="bg-[#A955F7] text-white rounded-full py-[14px] px-[20px] w-full text-[14px] font-bold border-none cursor-pointer mb-[12px] hover:bg-[#9233EA] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Offer Internship
            </button>
            <button
              onClick={onOpenContact}
              className="bg-transparent text-white/80 border border-white/10 rounded-full py-[13px] px-[20px] w-full text-[14px] font-medium cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Schedule Quick Chat
            </button>

            <div className="h-[1px] bg-white/5 my-[28px]" />

            <div className="flex flex-col gap-[14px]">
              <p className="text-[11px] font-bold text-white/30 tracking-[2px] mb-[4px] uppercase">
                INCLUDED CAPABILITIES
              </p>
              {[
                "Rapid onboarding & active sprint participation",
                "Writing clean REST APIs & unit tests",
                "Frontend bug resolution, UI tweaks & responsive design",
                "Strong Git branching, pull requests & documentation",
                "High hunger to learn proprietary tech stacks rapidly",
              ].map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-[12px]">
                  <CheckIcon color="#A955F7" />
                  <span className="text-[13px] text-white/80 font-normal leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 3 — Freelance / MVP Build */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-[32px] flex flex-col group hover:border-[#A955F7]/50 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-[24px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] bg-white/10 rounded-[12px] flex items-center justify-center ring-1 ring-white/20">
                  <Building2 size={20} className="text-white" />
                </div>
                <span className="font-semibold text-[16px] text-white/90">Project & Contract</span>
              </div>
            </div>

            <div className="mb-[14px]">
              <span className="text-[38px] md:text-[48px] font-medium text-white tracking-tight">
                Custom
              </span>
              <span className="text-[14px] text-white/50 font-medium ml-[8px]">Per Project / Scope</span>
            </div>

            <p className="text-[14px] text-white/50 mb-[28px] font-normal leading-[1.6]">
              End-to-End MVP & Web Application Delivery
            </p>

            <button
              onClick={onOpenContact}
              className="bg-white text-black rounded-full py-[14px] px-[20px] w-full text-[14px] font-bold border-none cursor-pointer mb-[12px] hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Discuss Your Project
            </button>
            <a
              href={`https://wa.me/919322414106?text=Hi%20Harshal,%20I%20have%20a%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white/80 border border-white/10 rounded-full py-[13px] px-[20px] w-full text-[14px] font-medium cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all text-center block"
            >
              Chat on WhatsApp
            </a>

            <div className="h-[1px] bg-white/5 my-[28px]" />

            <div className="flex flex-col gap-[14px]">
              <p className="text-[11px] font-bold text-white/30 tracking-[2px] mb-[4px] uppercase">
                INCLUDED CAPABILITIES
              </p>
              {[
                "Full Web Application development (Spring Boot or MERN)",
                "Razorpay / Stripe payment gateway setup",
                "Secure authentication & database schemas",
                "Cloud deployment on Render / Vercel / Netlify",
                "Clean, documented code with post-launch support",
              ].map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-[12px]">
                  <CheckIcon color="#FFFEFE" />
                  <span className="text-[13px] text-white/70 font-normal leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
