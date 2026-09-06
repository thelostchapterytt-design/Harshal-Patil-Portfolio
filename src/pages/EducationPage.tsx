import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building2,
  CheckCircle2,
  Star,
  Quote,
  ArrowRight,
  ShieldCheck,
  Download,
  Eye,
  X,
  MapPin,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";

interface EducationPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function EducationPage({ onOpenContact, onOpenResume }: EducationPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMilestone, setSelectedMilestone] = useState<any | null>(null);

  const academicData = [
    {
      id: "bca",
      title: "Bachelor of Computer Applications (BCA)",
      period: "Completed",
      status: "Graduated • 7.56 CGPA",
      score: "CGPA: 7.56 / 10",
      institution: "Pratap College, Amalner",
      affiliated: "Affiliated to KBC North Maharashtra University (KBC NMU)",
      location: "Amalner, Maharashtra",
      type: "Formal University Degree",
      badgeColor: "#A955F7",
      summary:
        "Comprehensive three-year undergraduate program focusing on core computer science fundamentals, object-oriented design, relational database architecture, and software engineering lifecycles.",
      keySubjects: [
        "Core & Advanced Java",
        "C & C++ Programming",
        "Database Management (MySQL)",
        "Data Structures & Algorithms",
        "Operating Systems & Networks",
        "Software Engineering (SDLC)",
      ],
      highlights: [
        "Consistent academic track record with 7.56 cumulative CGPA across all semesters",
        "Distinction in Advanced Java Programming & Relational Database laboratory practicals",
        "Final Year Major Capstone: Production-level software architecture design",
      ],
      syllabus: [
        {
          semester: "First Year (Sem I - II)",
          topics: "C Programming Language, Computer Fundamentals, Web Designing (HTML/CSS/JS), Discrete Mathematics",
        },
        {
          semester: "Second Year (Sem III - IV)",
          topics: "Core Java with OOP, C++, Data Structures in C, Relational Database Management Systems (MySQL), OS",
        },
        {
          semester: "Final Year (Sem V - VI)",
          topics: "Advanced Java Programming, Software Engineering, Python Programming, Computer Networks, Capstone Project",
        },
      ],
    },
    {
      id: "kiran-academy",
      title: "Java Full Stack Development Program",
      period: "2024 – Present",
      status: "Currently Enrolled • Pune Campus",
      score: "Enterprise Immersion",
      institution: "The Kiran Academy",
      affiliated: "Premier Enterprise Software Engineering Institute",
      location: "Pune, Maharashtra",
      type: "Professional Finishing School",
      badgeColor: "#3B82F6",
      summary:
        "Rigorous corporate training program bridging academic fundamentals into enterprise software readiness. Focuses on full-stack Java development, Spring Boot 3 micro-architecture, Hibernate ORM, and modern React 19.",
      keySubjects: [
        "Core Java (OOP & Collections)",
        "Spring Boot 3 & Spring MVC",
        "Hibernate JPA & MySQL 8.0",
        "RESTful APIs & Postman Testing",
        "React 19 & Tailwind CSS",
        "Maven CI & Git Workflow",
      ],
      highlights: [
        "Engineered 2 production-grade full-stack systems: Travely (MERN) & SyncWork (Spring Boot 3)",
        "Mastered 4-tier MVC enterprise architecture: Controller, Service, DAO Repository & DTO layers",
        "Trained on industry security standards, JWT authentication, and Razorpay webhook integrations",
      ],
      syllabus: [
        {
          semester: "Module 1: Core Java",
          topics: "OOP Principles, JVM Internals, Exception Handling, Collections Framework, Java 8 Stream API & Lambdas, Concurrency",
        },
        {
          semester: "Module 2: Enterprise Backend",
          topics: "Spring Boot 3, Spring MVC, Spring Data JPA, Hibernate ORM, MySQL 8.0, Transaction Management, REST API Design",
        },
        {
          semester: "Module 3: Full-Stack Web",
          topics: "React 19 Components, State Management, Tailwind CSS, JWT Token Authorization, Razorpay Payment Gateway, Maven",
        },
      ],
    },
  ];

  const certifications = [
    {
      id: "oracle",
      title: "Oracle Generative AI Certified Professional",
      issuer: "Oracle University",
      organization: "Oracle Cloud Infrastructure (OCI)",
      year: "2025",
      type: "Global Credential",
      description:
        "Validates technical proficiency in Large Language Models (LLMs), prompt engineering patterns, Retrieval-Augmented Generation (RAG) pipelines, fine-tuning methodologies, and enterprise cloud AI services.",
      topics: ["LLM Architectures", "Prompt Engineering", "RAG Pipelines", "Cloud AI Integration"],
      verifiedText: "Verified by Oracle Cloud Infrastructure",
    },
    {
      id: "nielit",
      title: "Course on Computer Concepts (CCC)",
      issuer: "NIELIT",
      organization: "Ministry of Electronics & IT, Govt. of India",
      year: "2025",
      type: "Govt. of India",
      description:
        "Government-accredited certification validating strong foundational competency in computer hardware, GUI operating systems, TCP/IP networking protocols, cybersecurity hygiene, and digital productivity tools.",
      topics: ["Computer Architecture", "TCP/IP Networking", "Cybersecurity Hygiene", "Operating Systems"],
      verifiedText: "Ministry of Electronics & IT, Govt. of India",
    },
    {
      id: "typing",
      title: "GCC-TBC Typing Professional Certification",
      issuer: "MSCE Pune",
      organization: "Maharashtra State Council of Examinations",
      year: "2024",
      type: "State Council Certified",
      description:
        "Official state examination credential validating high typing speed and keystroke precision. Translates to rapid code drafting, clean command-line agility, and fast technical documentation.",
      topics: ["High Speed Keyboarding", "Terminal Agility", "Accurate Documentation", "Code Drafting"],
      verifiedText: "MSCE Maharashtra State Certified",
    },
  ];

  const testimonials = [
    {
      quote:
        "Harshal approaches Java backend development with remarkable discipline. His command over Spring Boot layered architecture and clean relational database transactions shows the maturity of a dedicated engineer.",
      author: "Full Stack Java Mentor",
      role: "Corporate Software Trainer",
      org: "The Kiran Academy, Pune",
    },
    {
      quote:
        "In university practical labs, Harshal consistently demonstrated strong algorithmic reasoning in OOP Java and database queries. His academic consistency and problem-solving focus make him an asset for technical teams.",
      author: "Senior Computer Science Faculty",
      role: "Department of Computer Applications",
      org: "Pratap College, Amalner",
    },
  ];

  const categories = [
    { id: "all", label: "All Qualifications" },
    { id: "bca", label: "University Degree (BCA)" },
    { id: "kiran-academy", label: "Corporate Training (Pune)" },
    { id: "certifications", label: "Certifications (3)" },
  ];

  return (
    <div className="bg-transparent text-white antialiased min-h-screen pt-24 sm:pt-32 pb-20 px-3 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Cosmic Atmosphere & Subtle Technical Grid — Exact match with Projects & Skills pages */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix opacity-15" />
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#A955F7]/[0.05] blur-[170px] rounded-full" />
        <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[#A955F7]/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10">
        {/* 1. Header: Matching ProjectsPage & SkillsPage EXACT Typography, Dimensions & 4 Metric Boxes */}
        <header className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-2">
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold shrink-0">04.</span>
            <span className="text-white/20 shrink-0">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-wider sm:tracking-[2px] uppercase font-bold text-center">
              Academic Background &amp; Training
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Qualifications.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            Bachelor of Computer Applications graduate from Pratap College, Amalner paired with ongoing intensive enterprise Java full-stack finishing school at The Kiran Academy, Pune.
          </p>

          {/* EXACT 4 METRIC BOXES — IDENTICAL TO PROJECTS & SKILLS PAGES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-7 max-w-2xl mx-auto">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-white">7.56</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">BCA CGPA</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-[#A955F7]">Kiran Academy</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Pune (Enrolled)</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-emerald-400">03</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">Certifications</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <span className="block text-lg sm:text-xl font-bold font-mono text-blue-400">Graduated</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50 uppercase">BCA Completed</span>
            </div>
          </div>
        </header>

        {/* 2. Interactive Filter Tabs — EXACT MATCH WITH PROJECTS & SKILLS PAGES */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 justify-start sm:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#A955F7] text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] font-semibold scale-[1.02]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Dynamic Card Content based on Selected Tab */}
        {(activeCategory === "all" || activeCategory === "bca" || activeCategory === "kiran-academy") && (
          <div
            className={`grid gap-6 sm:gap-8 mb-16 ${
              activeCategory === "all" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"
            }`}
          >
            {academicData
              .filter((item) => activeCategory === "all" || item.id === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0b0c10] border border-white/10 hover:border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 relative group"
                >
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#A955F7]/10 group-hover:bg-[#A955F7]/15 blur-3xl rounded-full transition-all pointer-events-none" />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#A955F7] animate-pulse" />
                        <span className="text-xs font-mono font-semibold text-white/90">
                          {item.period}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#A955F7] bg-[#A955F7]/10 border border-[#A955F7]/25 px-3 py-1 rounded-full font-semibold">
                        {item.score}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <div className="mb-4">
                      <span className="text-[10.5px] font-mono text-white/40 uppercase tracking-wider font-semibold block mb-1">
                        {item.type}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                        <Building2 size={14} className="text-[#A955F7] shrink-0" />
                        <span className="font-semibold text-white">{item.institution}</span>
                        <span className="text-white/20">&bull;</span>
                        <span className="text-white/50">{item.location}</span>
                      </div>
                      <p className="text-xs text-white/40 mt-1 font-mono">{item.affiliated}</p>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-5 font-normal">
                      {item.summary}
                    </p>

                    {/* Core Subjects Tag Grid */}
                    <div className="mb-5">
                      <div className="text-[10px] font-mono uppercase text-white/40 mb-2.5 font-medium tracking-wider">
                        Core Subjects &amp; Technical Focus
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.keySubjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-white/80 border border-white/5 hover:border-white/15 transition-colors"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-4 border-t border-white/5 mb-5">
                      {item.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75">
                          <CheckCircle2 size={14} className="text-[#A955F7] shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedMilestone(item)}
                      className="px-4 py-2 bg-white/5 hover:bg-[#A955F7]/20 hover:border-[#A955F7]/40 border border-white/10 text-xs font-semibold text-white rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Eye size={13} className="text-[#A955F7]" />
                      <span>View Semester Syllabus</span>
                    </button>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                      {item.status.split("•")[0].trim()}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* 4. Verified Certifications Section (Visible in "all" and "certifications" tab) */}
        {(activeCategory === "all" || activeCategory === "certifications") && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-[#A955F7]" />
                  <span className="text-xs font-mono text-[#A955F7] tracking-wider uppercase font-semibold">
                    Official Credentials
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Verified Industry Certifications
                </h2>
              </div>
              <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
                3 Authenticated Records
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#0b0c10] border border-white/10 hover:border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10.5px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 font-semibold">
                        {cert.year}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <BadgeCheck size={14} />
                        <span>Verified</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/50 mb-3 font-medium">
                      {cert.organization}
                    </p>

                    <p className="text-xs text-white/65 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-3">
                      {cert.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/70 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10.5px] font-mono text-white/40 truncate">
                      {cert.verifiedText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Faculty & Mentor Endorsements */}
        <section className="mb-16">
          <div className="mb-6 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 mb-1">
              <Quote size={16} className="text-[#A955F7]" />
              <span className="text-xs font-mono text-[#A955F7] tracking-wider uppercase font-semibold">
                Faculty Endorsements
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Academic &amp; Training Evaluations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-1 text-[#A955F7] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#A955F7" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed italic mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-white/5">
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-[#A955F7] font-medium">{t.role}</p>
                  <p className="text-[11px] text-white/40 font-mono">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Minimal Bottom CTA */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0b0c10] border border-white/10 p-6 sm:p-10 text-center max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80 mb-3">
            <GraduationCap size={14} className="text-[#A955F7]" />
            <span>BCA Graduate &bull; Available for Opportunities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            Interested in Reviewing My Credentials?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mb-6 max-w-[460px] mx-auto leading-relaxed">
            I am actively interviewing for Java Full Stack and Software Engineering roles across campus and off-campus drives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <span>Connect For Hiring</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs sm:text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Download Resume (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b0c10] border border-white/20 rounded-2xl p-6 sm:p-7 max-w-lg w-full my-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative">
            <button
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A955F7]/15 text-[#A955F7] border border-[#A955F7]/25 font-semibold">
                {selectedMilestone.type}
              </span>
              <span className="text-xs font-mono text-white/50">{selectedMilestone.period}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white mb-0.5">
              {selectedMilestone.title}
            </h2>
            <p className="text-xs text-white/50 mb-5">{selectedMilestone.institution}</p>

            <div className="space-y-3 mb-5">
              <div className="text-[10.5px] font-mono uppercase text-white/50 tracking-wider font-semibold">
                Coursework Breakdown
              </div>
              {selectedMilestone.syllabus.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <span className="text-xs font-mono font-semibold text-[#A955F7] block mb-1">
                    {item.semester}
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed">{item.topics}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedMilestone(null);
                  onOpenResume();
                }}
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Download size={13} />
                <span>Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
