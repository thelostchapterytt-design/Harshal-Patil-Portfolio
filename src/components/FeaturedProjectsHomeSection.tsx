import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  CreditCard,
  CheckCircle2,
  FolderGit2,
  Server,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { usePortfolioProjects } from "../data/portfolioStore";

interface FeaturedProjectsHomeSectionProps {
  onNavigateToProjects: () => void;
}

export default function FeaturedProjectsHomeSection({
  onNavigateToProjects,
}: FeaturedProjectsHomeSectionProps) {
  const { projects } = usePortfolioProjects();
  const featuredList = projects.filter((p) => p.featured);
  const travely = featuredList[0] || projects.find((p) => p.id === "travely") || projects[0];
  const syncwork = featuredList[1] || projects.find((p) => p.id === "syncwork") || projects[1] || travely;

  return (
    <section id="featured-work" className="bg-black py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Ambient Glows matching Cosmic Portfolio Theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#A955F7]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* Header Row — Centered across all devices */}
        <header className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto px-2 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#A955F7]" />
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Featured Flagship Systems
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Production-Grade Projects Built with Architecture &amp; Precision.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed mb-6">
            Two core engineering systems showcasing end-to-end full-stack mastery — from Java Spring Boot layered backends to MERN cloud deployments.
          </p>

          <button
            onClick={onNavigateToProjects}
            className="px-6 py-3 bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer whitespace-nowrap"
          >
            <span>Explore All 6+ Projects</span>
            <ArrowRight size={15} />
          </button>
        </header>

        {/* 2 Flagship Projects Grid — Symmetrical 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* CARD 1 — Travely Travel Booking System */}
          <div className="bg-[#0b0c10] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-white/25 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1">
            {/* Subtle Ambient Top Corner Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#A955F7]/10 group-hover:bg-[#A955F7]/15 blur-3xl rounded-full transition-all pointer-events-none" />

            <div>
              {/* Card Header Pill & Live Status */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">
                  <CreditCard size={13} className="text-[#A955F7]" />
                  <span className="text-[11px] text-white/80 font-mono font-medium tracking-wide">
                    Full-Stack MERN System
                  </span>
                </div>
                {travely.liveUrl && (
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployment
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                {travely.title}
              </h3>
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {travely.description}
              </p>

              {/* Clean Architecture Specifications Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Architecture</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">Client-Server</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Payments</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">Razorpay Live</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Database</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">MongoDB Atlas</div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-xs text-white/75">
                  <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                  <span>Integrated Razorpay payment gateway with secure webhook order verification.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/75">
                  <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                  <span>JWT-authenticated private routes, tour package filtering, and responsive booking cart.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {travely.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons — Simple, Premium, Clean */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-5 border-t border-white/10">
              {travely.liveUrl && (
                <a
                  href={travely.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center"
                >
                  <span>Open Live Application</span>
                  <ExternalLink size={13} />
                </a>
              )}
              <a
                href={travely.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs sm:text-sm font-medium rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <Github size={14} />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>

          {/* CARD 2 — SyncWork Enterprise Employee System */}
          <div className="bg-[#0b0c10] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-white/25 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1">
            {/* Subtle Ambient Top Corner Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#A955F7]/10 group-hover:bg-[#A955F7]/15 blur-3xl rounded-full transition-all pointer-events-none" />

            <div>
              {/* Card Header Pill & Framework Status */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">
                  <Layers size={13} className="text-[#A955F7]" />
                  <span className="text-[11px] text-white/80 font-mono font-medium tracking-wide">
                    Enterprise Java Application
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A955F7] animate-pulse" />
                  Spring Boot 3
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                {syncwork.title}
              </h3>
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {syncwork.description}
              </p>

              {/* Clean Architecture Specifications Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Pattern</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">4-Layer MVC</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Security</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">Spring AOP Guard</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mb-1">Database</div>
                  <div className="text-[11.5px] font-semibold text-white truncate">MySQL 8.0 &bull; JPA</div>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-xs text-white/75">
                  <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                  <span>Strict layer isolation: Controller, Service, Repository, and Hibernate Entities.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/75">
                  <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                  <span>Spring AOP cross-cutting logging, session management, and relational mapping.</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {syncwork.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons — Simple, Premium, Clean */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-5 border-t border-white/10">
              <a
                href={syncwork.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center"
              >
                <Github size={14} />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("architecture");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    onNavigateToProjects();
                  }
                }}
                className="py-2.5 px-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs sm:text-sm font-medium rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
              >
                <span>View Architecture</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Clean, elegant link to see all projects */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
          <div className="flex items-center gap-2.5 text-xs text-white/60">
            <FolderGit2 size={16} className="text-[#A955F7]" />
            <span>
              Looking for all 6 projects? (AI Image Tools, Sales Analytics, Clones &amp; Demos)
            </span>
          </div>
          <button
            onClick={onNavigateToProjects}
            className="text-xs font-semibold text-[#A955F7] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Open All Projects Page</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
