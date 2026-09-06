import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Copy,
  Check,
  ArrowUpRight,
  Github,
  Layers,
  Globe2,
  Lock,
  Database,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function CodeStandardsSection({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const codeString = `@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin(origins = "*")
public class SyncWorkController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DepartmentService departmentService;

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<EmployeeDTO> list = employeeService.findPaginated(page, size);
        return ResponseEntity.ok(list);
    }

    @PostMapping("/create")
    public ResponseEntity<EmployeeResponse> createEmployee(
            @Valid @RequestBody EmployeeRequest request) {
        // Layered architecture: validate, persist via JPA, audit log
        EmployeeResponse res = employeeService.saveEmployee(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }
}`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const standards = [
    {
      title: "Clean Layered Architecture",
      description: "Strict isolation of concerns: Controller, Service, DAO/Repository, and JPA Entity layers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      tag: "SOLID Architecture",
    },
    {
      title: "REST Standards & Status Codes",
      description: "Proper HTTP semantics, customized GlobalExceptionHandler, and structured error payloads.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      tag: "RFC Semantics",
    },
    {
      title: "AOP & Aspect-Based Auditing",
      description: "Cross-cutting concerns like logging, session validation, and execution timers handled via AspectJ.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      tag: "Spring AOP",
    },
    {
      title: "ACID Database Transactions",
      description: "@Transactional safety, optimized JPA relational mappings, and indexed MySQL queries.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      tag: "ACID Guarantees",
    },
  ];

  return (
    <section className={"w-full relative overflow-hidden " + (className || "")}>
      {/* 06. Header: Exact theme typography and spacing */}
      <header className="text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-3">
          <span className="text-xs text-[#A955F7] font-mono font-bold shrink-0">06.</span>
          <span className="text-white/20 shrink-0">&mdash;</span>
          <span className="text-xs text-[#A955F7] font-mono tracking-wider sm:tracking-[2px] uppercase font-bold text-center">
            Engineering Discipline
          </span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2] sm:leading-[1.15] max-w-[840px] mx-auto tracking-tight">
          Enterprise Code Standards &amp; Best Practices
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[640px] mx-auto mt-3 sm:mt-4 leading-relaxed">
          Production guidelines and architectural patterns applied rigorously across modern full-stack development.
        </p>
      </header>

      {/* 4 Cards Matrix: Exact matching theme #171616 with #242425 grid borders */}
      <div className="border border-[#242425] rounded-[24px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
        {standards.map((item, index) => {
          const isLast = index === standards.length - 1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={
                "bg-[#171616] p-7 md:p-8 flex flex-col justify-between gap-6 transition-all duration-300 relative group hover:bg-[#1b1a1b] " +
                (!isLast ? "lg:border-r border-[#242425] " : "") +
                (index < 2 ? "md:border-b lg:border-b-0 border-[#242425] " : "") +
                (index % 2 === 0 ? "md:border-r lg:border-r-0 border-[#242425] " : "")
              }
            >
              {/* Hover Glow Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A955F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Row: Icon + Tag */}
                <div className="flex items-center justify-between w-full mb-6 relative z-10">
                  <div className="w-14 h-14 bg-[#111010] border border-[#222222] rounded-[16px] flex items-center justify-center transition-all duration-300 group-hover:border-[#A955F7]/50 group-hover:bg-[#A955F7]/10 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] text-white group-hover:text-[#A955F7]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold text-[#fffffe] tracking-tight group-hover:text-[#A955F7] transition-colors duration-300 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#767677] leading-[1.65] font-normal group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/35 relative z-10">
                <span>PATTERN 0{index + 1}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Verified
                </span>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A955F7] group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Open Source & Public Repositories + Beautiful Formatted Java Controller */}
      <div className="bg-[#141414] border border-white/10 rounded-2xl sm:rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl relative group hover:border-[#A955F7]/40 transition-all w-full max-w-full">
        {/* Left Side: Repository Info & GitHub link */}
        <div className="p-5 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-[#161517] to-[#111012]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-5">
              <Github size={13} className="text-[#A955F7]" />
              <span className="text-[10.5px] sm:text-[11px] text-[#A955F7] font-mono font-bold tracking-wide">
                Open Source &amp; Public Repositories
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3 sm:mb-4 leading-snug">
              Inspect Source Code On GitHub
            </h3>

            <p className="text-xs sm:text-sm text-[#8e8d91] leading-relaxed mb-5 sm:mb-6 font-normal">
              Every project I build is open, organized with clear README documentation, commit histories, and straightforward setup instructions.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
              {[
                "Clean commit logs & feature branching",
                "Explicit dependencies in pom.xml & package.json",
                "Layered package hierarchy (controller, service, dao)",
                "Full REST API Postman collections ready",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/70">
                  <CheckCircle2 size={14} className="text-[#A955F7] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Profile Button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-3 sm:px-5 sm:py-3.5 bg-[#1a191c] hover:bg-[#201f24] border border-white/10 hover:border-[#A955F7]/60 rounded-xl sm:rounded-2xl text-white transition-all duration-300 group/btn shadow-md"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center text-[#A955F7] group-hover/btn:scale-110 transition-transform shrink-0">
                <Github size={16} />
              </div>
              <div className="text-left min-w-0">
                <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#A955F7] font-bold">
                  Explore Repos
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white truncate">
                  github.com/harshal-patil-dev
                </div>
              </div>
            </div>
            <ArrowUpRight size={15} className="text-white/50 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0 ml-2" />
          </a>
        </div>

        {/* Right Side: TravelyController.java Clean IDE Showcase */}
        <div className="lg:col-span-7 bg-[#0b0a0e] flex flex-col justify-between overflow-hidden min-w-0">
          {/* Mac IDE Header */}
          <div className="bg-[#121116] px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex items-center gap-1.5 opacity-80 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="h-3.5 sm:h-4 w-px bg-white/10 mx-0.5 sm:mx-1 shrink-0" />
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:py-1 bg-black/40 border border-white/10 rounded-md text-[11px] sm:text-xs font-mono text-white/90 min-w-0">
                <FileCode size={12} className="text-[#A955F7] shrink-0" />
                <span className="truncate">SyncWorkController.java</span>
              </div>
            </div>

            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check size={11} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={11} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Formatted Syntax-Colored Code Body */}
          <div className="p-3.5 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed overflow-x-auto select-text scrollbar-thin scrollbar-thumb-white/10 max-w-full">
            <pre className="text-white/90 font-mono min-w-max">
              <code>
                <div><span className="text-white/30 mr-3 sm:mr-4 select-none">01</span><span className="text-[#C084FC] font-semibold">@RestController</span></div>
                <div><span className="text-white/30 mr-3 sm:mr-4 select-none">02</span><span className="text-[#C084FC] font-semibold">@RequestMapping</span>(<span className="text-[#38BDF8]">&quot;/api/v1/employees&quot;</span>)</div>
                <div><span className="text-white/30 mr-3 sm:mr-4 select-none">03</span><span className="text-[#C084FC] font-semibold">@CrossOrigin</span>(origins = <span className="text-[#38BDF8]">&quot;*&quot;</span>)</div>
                <div><span className="text-white/30 mr-4 select-none">04</span><span className="text-[#F43F5E] font-semibold">public class</span> <span className="text-yellow-300 font-bold">SyncWorkController</span> &#123;</div>
                <div><span className="text-white/30 mr-4 select-none">05</span></div>
                <div><span className="text-white/30 mr-4 select-none">06</span>    <span className="text-[#C084FC] font-semibold">@Autowired</span></div>
                <div><span className="text-white/30 mr-4 select-none">07</span>    <span className="text-[#F43F5E] font-semibold">private</span> <span className="text-cyan-300">EmployeeService</span> employeeService;</div>
                <div><span className="text-white/30 mr-4 select-none">08</span></div>
                <div><span className="text-white/30 mr-4 select-none">09</span>    <span className="text-[#C084FC] font-semibold">@Autowired</span></div>
                <div><span className="text-white/30 mr-4 select-none">10</span>    <span className="text-[#F43F5E] font-semibold">private</span> <span className="text-cyan-300">DepartmentService</span> departmentService;</div>
                <div><span className="text-white/30 mr-4 select-none">11</span></div>
                <div><span className="text-white/30 mr-4 select-none">12</span>    <span className="text-[#C084FC] font-semibold">@GetMapping</span></div>
                <div><span className="text-white/30 mr-4 select-none">13</span>    <span className="text-[#F43F5E] font-semibold">public</span> <span className="text-yellow-300">ResponseEntity</span>&lt;<span className="text-cyan-300">List&lt;EmployeeDTO&gt;</span>&gt; <span className="text-emerald-400 font-semibold">getAllEmployees</span>(</div>
                <div><span className="text-white/30 mr-4 select-none">14</span>            <span className="text-[#C084FC] font-semibold">@RequestParam</span>(defaultValue = <span className="text-[#38BDF8]">&quot;0&quot;</span>) <span className="text-[#F43F5E]">int</span> page,</div>
                <div><span className="text-white/30 mr-4 select-none">15</span>            <span className="text-[#C084FC] font-semibold">@RequestParam</span>(defaultValue = <span className="text-[#38BDF8]">&quot;10&quot;</span>) <span className="text-[#F43F5E]">int</span> size) &#123;</div>
                <div><span className="text-white/30 mr-4 select-none">16</span>        <span className="text-cyan-300">List&lt;EmployeeDTO&gt;</span> list = employeeService.findPaginated(page, size);</div>
                <div><span className="text-white/30 mr-4 select-none">17</span>        <span className="text-[#F43F5E] font-semibold">return</span> <span className="text-yellow-300">ResponseEntity</span>.ok(list);</div>
                <div><span className="text-white/30 mr-4 select-none">18</span>    &#125;</div>
                <div><span className="text-white/30 mr-4 select-none">19</span></div>
                <div><span className="text-white/30 mr-4 select-none">20</span>    <span className="text-[#C084FC] font-semibold">@PostMapping</span>(<span className="text-[#38BDF8]">&quot;/create&quot;</span>)</div>
                <div><span className="text-white/30 mr-4 select-none">21</span>    <span className="text-[#F43F5E] font-semibold">public</span> <span className="text-yellow-300">ResponseEntity</span>&lt;<span className="text-cyan-300">EmployeeResponse</span>&gt; <span className="text-emerald-400 font-semibold">createEmployee</span>(</div>
                <div><span className="text-white/30 mr-4 select-none">22</span>            <span className="text-[#C084FC] font-semibold">@Valid</span> <span className="text-[#C084FC] font-semibold">@RequestBody</span> <span className="text-cyan-300">EmployeeRequest</span> request) &#123;</div>
                <div><span className="text-white/30 mr-4 select-none">23</span>        <span className="text-emerald-400/80 italic">// Layered architecture: validate, persist via JPA, audit log</span></div>
                <div><span className="text-white/30 mr-4 select-none">24</span>        <span className="text-cyan-300">EmployeeResponse</span> res = employeeService.saveEmployee(request);</div>
                <div><span className="text-white/30 mr-4 select-none">25</span>        <span className="text-[#F43F5E] font-semibold">return</span> <span className="text-yellow-300">ResponseEntity</span>.status(HttpStatus.CREATED).body(res);</div>
                <div><span className="text-white/30 mr-4 select-none">26</span>    &#125;</div>
                <div><span className="text-white/30 mr-4 select-none">27</span>&#125;</div>
              </code>
            </pre>
          </div>

          {/* IDE Bottom Status Bar */}
          <div className="bg-[#121116] px-3.5 sm:px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/50">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Spring Boot 3.2.0
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:inline text-white/60">SyncWork &bull; Java 17 (LTS)</span>
            </div>
            <div>
              <span className="text-[#A955F7] font-semibold">Layered Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

