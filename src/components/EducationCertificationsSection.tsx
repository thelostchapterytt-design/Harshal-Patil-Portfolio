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
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../data/portfolioData";

export default function EducationCertificationsSection({ className }: { className?: string }) {
  const fullStar = (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="#A955F7" className="shrink-0">
      <path d="M9 1l2.4 5 5.5.8-4 3.9.9 5.4L9 13.5l-4.8 2.5.9-5.4-4-3.9 5.5-.8z" />
    </svg>
  );

  const column1 = [
    {
      badge: "Degree & College",
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Pratap College, Amalner (KBC NMU)",
      metric: "CGPA: 7.56 / 10",
      year: "Completed",
      text: "Comprehensive studies in Object-Oriented Programming, Database Management Systems (DBMS), Data Structures & Algorithms, and Software Engineering methodologies.",
    },
    {
      badge: "Industry Credential",
      title: "Generative AI Certified",
      subtitle: "Oracle University",
      metric: "Oracle Certified 2025",
      year: "2025",
      text: "Validated knowledge of modern Generative AI foundations, Large Language Models, prompt engineering, and utilizing neural models for developer acceleration.",
    },
    {
      badge: "Professional Training",
      title: "Full Stack Java Development",
      subtitle: "Kiran Academy, Pune",
      metric: "Intensive Industrial Program",
      year: "2024 - Present",
      text: "Rigorous daily training in Core Java, Advanced Java, Spring Boot, Spring MVC, Hibernate/JPA, Microservices design, and MySQL database management.",
    },
    {
      badge: "Academic Foundation",
      title: "Computer Applications (BCA)",
      subtitle: "Pratap College, Amalner",
      metric: "BCA Graduate (7.56 CGPA)",
      year: "Graduated",
      text: "Demonstrated consistent academic excellence, analytical reasoning, and practical project executions across semester curricula.",
    },
  ];

  const column2 = [
    {
      badge: "Govt. Certification",
      title: "Course on Computer Concepts (CCC)",
      subtitle: "NIELIT (Govt. of India)",
      metric: "Certified Grade 2025",
      year: "2025",
      text: "Government certified competency in information technology, computer architectures, networking principles, internet protocols, and cybersecurity practices.",
    },
    {
      badge: "Peer & Mentor Review",
      title: "Kiran Academy Faculty Endorsement",
      subtitle: "Full Stack Java Mentor",
      metric: "Technical Recommendation",
      year: "2025",
      text: "Harshal exhibits strong discipline in writing clean Java code. His understanding of layered Spring Boot architecture, Hibernate mapping, and REST APIs is commendable for a fresher.",
    },
    {
      badge: "Professional Typing",
      title: "GCC-TBC Typing Certified",
      subtitle: "Maharashtra State Council of Examinations",
      metric: "Certified Speed & Accuracy",
      year: "2024",
      text: "Certified professional typing speed and accuracy enabling high coding throughput, documentation agility, and fast engineering turnaround.",
    },
    {
      badge: "Technical Endorsement",
      title: "Travely Tour System Architecture",
      subtitle: "Full-Stack Project Assessment",
      metric: "Production-Ready Build",
      year: "2025",
      text: "Seamlessly integrated Razorpay payment webhooks and protected user routes using JSON Web Tokens with full CRUD MongoDB persistence.",
    },
  ];

  const renderCard = (
    item: {
      badge: string;
      title: string;
      subtitle: string;
      metric: string;
      year: string;
      text: string;
    },
    idx: number
  ) => (
    <div
      key={idx}
      className="w-full bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[24px] p-6 flex flex-col text-left hover:border-[#A955F7]/30 hover:bg-white/[0.05] transition-all duration-500 mb-5 last:mb-0 group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A955F7] bg-[#A955F7]/10 px-2.5 py-1 rounded-full border border-[#A955F7]/20">
          {item.badge}
        </span>
        <span className="text-[11px] font-mono text-white/40 flex items-center gap-1">
          <Calendar size={11} /> {item.year}
        </span>
      </div>

      <h3 className="font-bold text-[17px] text-white tracking-tight mb-1 group-hover:text-[#A955F7] transition-colors">
        {item.title}
      </h3>
      <p className="text-[13px] text-white/50 mb-3">{item.subtitle}</p>

      <div className="flex items-center gap-2 mb-3 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
        <Sparkles size={13} className="text-[#A955F7]" />
        <span className="text-xs font-semibold text-emerald-400 font-mono">{item.metric}</span>
      </div>

      <p className="text-[13px] text-white/60 leading-[1.65] font-normal">
        {item.text}
      </p>
    </div>
  );

  return (
    <section id="education" className={"bg-black py-[96px] px-6 md:px-[60px] relative overflow-hidden " + (className || "")}>
      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#A955F7]/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1450px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[90px] items-start relative z-10">
        {/* LEFT COLUMN: Summary & Achievements */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-[96px] flex flex-col items-start h-auto lg:h-[700px]">
          <div className="flex items-center gap-[10px] mb-6">
            <span className="text-[14px] text-[#545455] font-medium">05.</span>
            <span className="text-[#323232]">&#8212;</span>
            <span className="text-[13px] text-[#545455] font-medium tracking-[2px] uppercase">
              Education & Credentials
            </span>
          </div>

          <h2 className="text-[36px] lg:text-[50px] font-medium leading-[1.12] text-white mb-6 tracking-tight">
            Academic Excellence & Validated Certifications
          </h2>

          <p className="text-[15px] text-white/60 leading-[1.7] mb-8 font-normal">
            BCA graduate from Pratap College with a 7.56 CGPA, currently mastering enterprise full-stack development through Kiran Academy Pune and Oracle AI credentials.
          </p>

          {/* Quick Metrics Badge */}
          <div className="mt-auto w-full space-y-3 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-white/60">Bachelor of Computer Applications</span>
              <span className="text-xs font-mono font-bold text-white">7.56 / 10 CGPA</span>
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-white/60">Oracle Generative AI Certification</span>
              <span className="text-xs font-mono font-bold text-[#A955F7]">Certified 2025</span>
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-white/60">Kiran Academy Full Stack Java</span>
              <span className="text-xs font-mono font-bold text-emerald-400">Trained 2024-25</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Animated Ticker */}
        <div className="w-full lg:w-[65%] h-[600px] lg:h-[750px] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* Column 1 - Scroll Up */}
            <div className="relative overflow-hidden h-full">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex flex-col"
              >
                {column1.map((item, idx) => renderCard(item, idx))}
              </motion.div>
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="relative overflow-hidden h-full">
              <motion.div
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="flex flex-col"
              >
                {column2.map((item, idx) => renderCard(item, idx))}
              </motion.div>
            </div>
          </div>

          {/* Fade Overlays */}
          <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none z-[5]" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[5]" />
        </div>
      </div>
    </section>
  );
}
