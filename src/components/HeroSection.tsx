import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import DeveloperProfileCockpit from "./DeveloperProfileCockpit";

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onNavigateToProjects?: () => void;
}

export default function HeroSection({
  onOpenResume,
  onOpenContact,
  onNavigateToProjects,
}: HeroSectionProps) {
  return (
    <section id="overview" className="relative mb-12 overflow-hidden pt-[80px] sm:pt-[100px] pb-12 sm:pb-16 px-3 sm:px-6 md:px-8 lg:px-12 bg-black">
      {/* Background Cosmic Starfield / Video - Fixed Height & Position to eliminate any jumping */}
      <div className="absolute top-0 left-0 right-0 h-[1500px] overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-65 pointer-events-none"
        >
          <source
            src="https://cdn.jiro.build/Velara/Hero%2001.mp4"
            type="video/mp4"
          />
        </video>
        {/* Seamless bottom fade into page black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      </div>

      {/* Radial Gradient overlay for cosmic depth */}
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#A955F7]/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center mt-[20px] sm:mt-[30px] md:mt-[50px] mb-[40px] sm:mb-[60px] px-2 sm:px-4">
        {/* Confident Portfolio Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 sm:mb-8 max-w-full"
        >
          <div className="w-2 h-2 rounded-full bg-[#A955F7] shrink-0" />
          <span className="text-[10px] xs:text-[11px] sm:text-[12px] font-medium text-white/80 uppercase tracking-[0.10em] sm:tracking-[0.18em] truncate">
            JAVA FULL STACK &bull; SPRING BOOT &bull; REACT
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[28px] xs:text-[34px] sm:text-[50px] md:text-[66px] font-semibold text-white leading-[1.15] sm:leading-[1.08] tracking-tight sm:tracking-[-1.5px] mb-4 sm:mb-6"
        >
          Aspiring Java Full Stack Developer <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
            &amp; Software Enthusiast
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[14px] xs:text-[15px] sm:text-[17px] md:text-[18px] text-white/70 leading-[1.6] max-w-[680px] mx-auto mb-7 sm:mb-9 font-normal px-2 sm:px-0"
        >
          Hi, I&apos;m <strong className="text-white font-semibold">Harshal Patil</strong>. BCA student currently learning and training in Java Full Stack Development at Kiran Academy Pune. Building hands-on projects with Core Java, Spring Boot, Hibernate, REST APIs, and React.js.
        </motion.p>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
          <motion.button
            onClick={() => {
              if (onNavigateToProjects) {
                onNavigateToProjects();
              } else {
                window.location.hash = "#projects";
              }
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-[#A955F7] text-white text-sm sm:text-base font-bold rounded-full flex items-center justify-center gap-2.5 sm:gap-3 transition-all cursor-pointer shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            <span>Explore My Projects</span>
            <ArrowRight size={17} />
          </motion.button>

          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-white/5 text-white text-sm sm:text-base font-semibold border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center gap-2.5 sm:gap-3 transition-all hover:bg-white/10"
          >
            <Github size={17} />
            <span>GitHub Profile</span>
          </motion.a>
        </div>
      </div>

      {/* Interactive Full Stack Architecture & Engineering DNA Cockpit */}
      <DeveloperProfileCockpit onOpenContact={onOpenContact} />
    </section>
  );
}
