import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ArchitectureShowcaseSectionProps {
  onOpenContact: () => void;
  onOpenInterviewModal?: () => void;
}

export default function ArchitectureShowcaseSection({
  onOpenContact,
  onOpenInterviewModal,
}: ArchitectureShowcaseSectionProps) {
  return (
    <section id="architecture" className="bg-black py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A955F7]/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* LEFT COLUMN: Pure, Clean & Cinematic Rotating Earth */}
          <div className="w-full lg:w-[50%] relative">
            <div className="bg-[#0b0c0e] border border-white/10 rounded-[28px] sm:rounded-[32px] h-[300px] xs:h-[360px] sm:h-[440px] lg:h-[500px] relative overflow-hidden flex items-center justify-center shadow-2xl group">
              {/* Soft Radial Cosmic Glow Behind Earth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[340px] lg:w-[420px] h-[260px] sm:h-[340px] lg:h-[420px] rounded-full bg-[#A955F7]/20 blur-[90px] sm:blur-[110px] pointer-events-none" />

              {/* Crystal Clear Rotating Earth Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-contain pointer-events-none mix-blend-screen scale-110 sm:scale-105 will-change-transform opacity-95"
              >
                <source
                  src="https://cdn.jiro.build/Velara/make-it-169-and-make-this-animation-like-world-cir.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Subtle Edge Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,#0b0c0e_96%)]" />

              {/* Minimal Clean Status Pill at Top-Left */}
              <div className="absolute top-3.5 sm:top-5 left-3.5 sm:left-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono text-white/80 font-medium tracking-wide">
                  Global Cloud Architecture
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Description & Architectural Principles */}
          <div className="w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-[#A955F7] font-mono font-bold">03.</span>
                <span className="text-white/20">&mdash;</span>
                <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
                  Technical Architecture &amp; APIs
                </span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-4 sm:mb-5 tracking-tight">
                Architected For Performance, Scalability &amp; Security
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 font-normal">
                I do not just write code that &quot;works&quot;&mdash;I implement clean layered architectures, decouple business logic into reusable service layers, and write secure, maintainable endpoints that handle real user traffic across cloud environments.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-7 sm:mb-9">
                {[
                  "Layered Controller, Service, Repository & Entity separation in Spring Boot 3",
                  "Session & JWT token security with custom middleware & AOP auditing",
                  "Razorpay Payment Gateway integration with signature verification",
                  "Normalized relational schema design with Hibernate JPA mappings",
                ].map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#A955F7]/20 flex items-center justify-center text-[#A955F7] shrink-0 mt-0.5 border border-[#A955F7]/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="text-xs sm:text-sm md:text-[15px] text-white/90 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (onOpenInterviewModal) {
                      onOpenInterviewModal();
                    }
                  }}
                  className="w-full sm:w-auto bg-white text-black px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-[#eaeaea] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-center"
                >
                  Schedule an Interview
                </button>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium border border-white/20 text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Explore GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

