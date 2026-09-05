import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Coffee,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../data/portfolioData";
import EducationCertificationsSection from "../components/EducationCertificationsSection";

interface EducationPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function EducationPage({ onOpenContact, onOpenResume }: EducationPageProps) {
  const milestones = [
    {
      year: "2023 - 2026",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Pratap College, Amalner (KBC NMU, Jalgaon)",
      metric: "CGPA: 7.56 / 10",
      description: "Rigorous academic study in Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Management Systems (DBMS), and Software Development Life Cycle (SDLC).",
      tags: ["OOP", "Data Structures", "DBMS", "C++", "Java Basics", "Web Tech"],
    },
    {
      year: "2024 - Present",
      title: "Java Full Stack Development Professional Training",
      organization: "Kiran Academy, Pune",
      metric: "Intensive Industrial Program",
      description: "Hands-on corporate-level software engineering training specializing in Core Java, Spring Boot 3, Spring MVC, Hibernate/JPA, RESTful APIs, MySQL, and full-stack project implementation.",
      tags: ["Spring Boot", "Hibernate", "REST APIs", "Microservices", "MySQL", "Git"],
    },
    {
      year: "2025",
      title: "Generative AI Certified",
      organization: "Oracle University",
      metric: "Oracle Certified 2025",
      description: "Validated understanding of foundational Generative AI mechanisms, Large Language Models, prompt engineering strategies, and AI API integrations.",
      tags: ["LLMs", "Generative AI", "Prompt Engineering", "Oracle Cloud"],
    },
    {
      year: "2025",
      title: "Course on Computer Concepts (CCC)",
      organization: "NIELIT (Govt. of India)",
      metric: "Govt. Recognized Certification",
      description: "Nationally certified foundational knowledge in computer hardware, networking topologies, internet protocols, cybersecurity, and digital information systems.",
      tags: ["Computer Hardware", "Networking", "Cybersecurity", "Operating Systems"],
    },
    {
      year: "2024",
      title: "GCC-TBC Typing Professional",
      organization: "Maharashtra State Council of Examinations",
      metric: "Certified Speed & Accuracy",
      description: "High-speed professional typing certification ensuring fast documentation, clean source code drafting, and swift terminal operations.",
      tags: ["30+ WPM", "Accuracy", "Documentation", "Terminal Speed"],
    },
  ];

  return (
    <div className="bg-black text-white antialiased min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] bg-[#A955F7]/12 blur-[160px] rounded-full" />
        <div className="absolute top-[35%] right-[-5%] w-[450px] h-[450px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* Centered Sophisticated Page Header */}
        <header className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold">04.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Academics &amp; Credentials
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4">
            Academic Foundations &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Credentials.
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            Strong academic track record combining formal computer applications university coursework with targeted industry-aligned full-stack Java training in Pune.
          </p>
        </header>

      {/* Timeline Journey Cards */}
      <div className="space-y-6 sm:space-y-8 mb-16">
        {milestones.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#A955F7]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs font-mono font-bold text-[#A955F7] bg-[#A955F7]/10 border border-[#A955F7]/20 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={11} />
                  {item.metric}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-white/50 mb-3">{item.organization}</p>
              <p className="text-xs sm:text-[14px] text-white/70 leading-relaxed mb-4 max-w-[820px]">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dual Ticker Endorsements / Education Section component */}
      <EducationCertificationsSection />
    </div>
  </div>
  );
}
