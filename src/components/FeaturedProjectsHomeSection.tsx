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
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "../data/portfolioData";

interface FeaturedProjectsHomeSectionProps {
  onNavigateToProjects: () => void;
}

export default function FeaturedProjectsHomeSection({
  onNavigateToProjects,
}: FeaturedProjectsHomeSectionProps) {
  const travely = PROJECTS.find((p) => p.id === "travely") || PROJECTS[0];
  const syncwork = PROJECTS.find((p) => p.id === "syncwork") || PROJECTS[1];

  return (
    <section id="featured-work" className="bg-black py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A955F7]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* Header Row */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-[#A955F7] font-mono font-bold">02.</span>
              <span className="text-white/20">&mdash;</span>
              <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
                Featured Flagship Systems
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] max-w-[820px] mb-3 tracking-tight">
              Production-Grade Projects Built with Code &amp; Passion.
            </h2>
            <p className="text-sm sm:text-base text-white/60">
              Hand-picked enterprise architectures and full-stack systems with live deployments and public source code.
            </p>
          </div>

          <button
            onClick={onNavigateToProjects}
            className="px-6 py-3 bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2 transition-all self-start md:self-end shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer whitespace-nowrap"
          >
            <span>Explore All 6+ Projects</span>
            <ArrowRight size={15} />
          </button>
        </header>

        {/* 2 Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-8 mb-12">
          {/* CARD 1 — Travely Booking System (4 cols on lg) */}
          <div className="lg:col-span-4 bg-[#141414] border border-white/10 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-[#A955F7]/40 transition-all shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-5">
                <CreditCard size={13} className="text-[#A955F7]" />
                <span className="text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                  MERN &bull; Razorpay Live
                </span>
              </div>

              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                {travely.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                {travely.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
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

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-4 border-t border-white/10">
              {travely.liveUrl && (
                <a
                  href={travely.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-[#A955F7] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#9332EA] transition-all shadow-md"
                >
                  <span>Live App</span>
                  <ExternalLink size={12} />
                </a>
              )}
              <a
                href={travely.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 hover:bg-white/10 transition-all"
              >
                <Github size={13} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* CARD 2 — SyncWork Enterprise Employee System (6 cols on lg) */}
          <div className="lg:col-span-6 bg-[#141414] border border-white/10 rounded-[28px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative group hover:border-[#A955F7]/40 transition-all shadow-xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <Layers size={13} className="text-[#A955F7]" />
                  <span className="text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                    Enterprise Java &bull; Spring Boot 3
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    AOP Security
                  </span>
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    Hibernate ORM
                  </span>
                </div>
              </div>

              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                {syncwork.title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5 max-w-[620px]">
                {syncwork.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {syncwork.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
              <a
                href={syncwork.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-white/5 border border-white/10 text-white/80 hover:text-white text-xs font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
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
                className="py-2.5 px-5 bg-[#A955F7]/15 hover:bg-[#A955F7]/25 border border-[#A955F7]/30 text-[#A955F7] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Explore Architecture</span>
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
