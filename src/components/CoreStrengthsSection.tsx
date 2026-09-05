import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Terminal,
  Cpu,
} from "lucide-react";

export default function CoreStrengthsSection({ className }: { className?: string }) {
  const strengths = [
    {
      title: "Core & Advanced Java",
      description: "Strong command over Object-Oriented Programming, Java Collections, Exception Handling, Multithreading, and Clean Code practices.",
      tag: "Backend Foundation",
      icon: (
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <Cpu size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
    {
      title: "Spring Boot & Spring MVC",
      description: "Proficient in building robust enterprise backend services, Dependency Injection, Hibernate/JPA ORM, and layered architectural models.",
      tag: "Framework Mastery",
      icon: (
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <Server size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
    {
      title: "Secure RESTful APIs",
      description: "Hands-on experience designing REST endpoints, JWT/Session authentication, AOP security logging, and Razorpay payment gateway integration.",
      tag: "API & Web Services",
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <ShieldCheck size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
    {
      title: "Modern React & Tailwind",
      description: "Building fast, dynamic, 100% responsive user interfaces with React 19, modern hooks, component lifecycle, and sleek Tailwind styling.",
      tag: "Frontend Engineering",
      icon: (
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <Code2 size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
    {
      title: "Relational & NoSQL Data",
      description: "Skilled in database normalization, SQL queries, MySQL transaction handling, as well as MongoDB document aggregations in MERN apps.",
      tag: "Data Persistence",
      icon: (
        <motion.div
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 4, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <Database size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
    {
      title: "Strong Fundamentals & Fast Learner",
      description: "Undergoing disciplined training at Kiran Academy Pune alongside BCA academics. Eager to master new tech, write clean code, and contribute to production teams.",
      tag: "Growth Mindset",
      icon: (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity as number, ease: "easeInOut" as const }}
        >
          <Zap size={28} className="text-white" strokeWidth={2} />
        </motion.div>
      ),
    },
  ];

  return (
    <section id="skills" className={"bg-black py-20 px-6 md:px-[60px] relative overflow-hidden " + (className || "")}>
      {/* Ambient background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A955F7]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold">01.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Core Competencies &amp; Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] max-w-[840px] mx-auto tracking-tight">
            Why Hire Harshal For Your Development Team?
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-normal max-w-[640px] mx-auto mt-4 leading-relaxed">
            A balanced mix of robust enterprise Java backend discipline and rapid modern frontend craftsmanship.
          </p>
        </header>

        {/* Feature Grid Container */}
        <div className="border border-[#242425] rounded-[24px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const isLastInRow = (index + 1) % 3 === 0;
            const isFirstRow = index < 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={
                  "bg-[#171616] p-9 md:p-10 flex flex-col items-start gap-6 transition-all duration-300 relative group hover:bg-[#1b1a1b] " +
                  (!isLastInRow ? "lg:border-r border-[#242425] " : "") +
                  (isFirstRow ? "lg:border-b border-[#242425] " : "") +
                  (index % 2 === 0 ? "md:border-r border-[#242425] " : "") +
                  (index < 4 ? "md:border-b border-[#242425] " : "")
                }
              >
                {/* Hover Glow Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A955F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Icon + Tag */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="w-16 h-16 bg-[#111010] border border-[#222222] rounded-[18px] flex items-center justify-center transition-all duration-300 group-hover:border-[#A955F7]/50 group-hover:bg-[#A955F7]/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <div className="group-hover:scale-110 transition-transform duration-300 group-hover:text-[#A955F7]">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 relative z-10">
                  <h3 className="text-[20px] font-medium text-[#fffffe] tracking-tight group-hover:text-[#A955F7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#767677] leading-[1.65] font-normal group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A955F7] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
