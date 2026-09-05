import React, { useState } from "react";
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
  GitBranch,
  Workflow,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import CoreStrengthsSection from "../components/CoreStrengthsSection";
import CodeStandardsSection from "../components/CodeStandardsSection";

interface SkillsPageProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function SkillsPage({ onOpenContact, onOpenResume }: SkillsPageProps) {
  const skillMatrix = [
    {
      category: "Backend Engineering",
      icon: Server,
      color: "#A955F7",
      description: "Enterprise Java ecosystem, robust RESTful APIs, layered MVC, and automated dependency injection.",
      items: [
        { name: "Core Java (Java 8 / 11 / 17)", level: "Advanced", desc: "OOP, Collections Framework, Multithreading, Exception Handling, Streams API" },
        { name: "Spring Boot 3", level: "Proficient", desc: "Auto-configuration, Spring Data JPA, Security filters, application.properties/yml" },
        { name: "Spring MVC & REST", level: "Proficient", desc: "Controller-Service-DAO layers, DTO validation, JSON payloads, HTTP status codes" },
        { name: "Hibernate / JPA", level: "Proficient", desc: "Entity mappings (@OneToMany, @ManyToOne), HQL/JPQL, caching, transaction management" },
        { name: "Node.js & Express.js", level: "Working Knowledge", desc: "JWT tokens, CORS, middleware routing, Async/Await concurrency" },
      ],
    },
    {
      category: "Frontend & Web Craft",
      icon: Code2,
      color: "#3B82F6",
      description: "Modern component-driven web interfaces, state management, and pixel-perfect design systems.",
      items: [
        { name: "React 19 & React Hooks", level: "Advanced", desc: "useState, useEffect, useMemo, custom hooks, reusable design patterns" },
        { name: "JavaScript (ES6+) & TypeScript", level: "Advanced", desc: "Arrow functions, destructuring, promises, async/await, typing interfaces" },
        { name: "Tailwind CSS & Responsive UI", level: "Advanced", desc: "Mobile-first layouts, dark mode palettes, flexbox, CSS Grid, animation" },
        { name: "HTML5, Semantic Web & CSS3", level: "Advanced", desc: "Accessible markup, modern layout models, canvas basics, typography" },
      ],
    },
    {
      category: "Databases & Persistence",
      icon: Database,
      color: "#10B981",
      description: "Relational table schemas, normalization, ACID properties, and document collections.",
      items: [
        { name: "MySQL", level: "Advanced", desc: "Complex JOINs, indexing, foreign keys, triggers, transaction isolation" },
        { name: "MongoDB", level: "Working Knowledge", desc: "Mongoose schemas, aggregation pipelines, document indexing" },
        { name: "Database Design & Normalization", level: "Proficient", desc: "1NF to 3NF, ER diagrams, schema optimization, relational integrity" },
      ],
    },
    {
      category: "DevOps, Tools & Standards",
      icon: Terminal,
      color: "#F59E0B",
      description: "Version control workflows, API testing environments, and development toolchains.",
      items: [
        { name: "Git & GitHub", level: "Advanced", desc: "Feature branching, pull requests, merge conflict resolution, semantic commits" },
        { name: "Postman API Testing", level: "Proficient", desc: "REST endpoint benchmarking, headers, auth bearer tokens, environment vars" },
        { name: "Maven & Build Tooling", level: "Proficient", desc: "pom.xml dependency management, build plugins, artifact packaging" },
        { name: "IDEs (IntelliJ, Eclipse, VS Code)", level: "Advanced", desc: "Debugging breakpoints, profiling, Spring Boot devtools, shortcuts" },
      ],
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
            <span className="text-xs text-[#A955F7] font-mono font-bold">03.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Technical Competencies &amp; Matrix
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4">
            Technical Arsenal &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Core Stack.
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            In-depth engineering competencies spanning enterprise Java, Spring Boot 3, modern React 19, relational database schemas, and clean production code standards.
          </p>
        </header>

      {/* 4 Quadrants Detailed Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {skillMatrix.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#A955F7]/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-white/10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                    <p className="text-xs text-white/50">{cat.description}</p>
                  </div>
                </div>

                {/* List of skills */}
                <div className="space-y-3.5">
                  {cat.items.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${cat.color}15`,
                            color: cat.color,
                            border: `1px solid ${cat.color}30`,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-white/55 leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Code Standards & Engineering Excellence */}
      <div className="space-y-12">
        <CodeStandardsSection />
      </div>
    </div>
  </div>
  );
}
