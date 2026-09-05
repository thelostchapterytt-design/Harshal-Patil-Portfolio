import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Terminal,
  Cpu,
  Github,
  CheckCircle2,
  Lock,
  Layers,
  FileCode,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function CodeStandardsSection({ className }: { className?: string }) {
  const standards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Clean Layered Architecture",
      description: "Strict isolation of concerns: Controller, Service, DAO/Repository, and JPA Entity layers.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "REST Standards & Status Codes",
      description: "Proper HTTP semantics, customized GlobalExceptionHandler, and structured error payloads.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12 L11 14 L15 10" stroke="white" strokeWidth="2" />
        </svg>
      ),
      title: "AOP & Aspect-Based Auditing",
      description: "Cross-cutting concerns like logging, session validation, and execution timers handled via AspectJ.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9a2.5 2.5 0 0 0 0 5H14" />
        </svg>
      ),
      title: "ACID Database Transactions",
      description: "@Transactional safety, optimized JPA relational mappings, and indexed MySQL queries.",
    },
  ];

  return (
    <section className={"bg-black py-[96px] px-6 md:px-[60px] relative overflow-hidden " + (className || "")}>
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-[#A955F7]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1450px] mx-auto relative z-10">
        {/* PART 1 — STANDARDS SECTION */}
        <div className="mb-[60px] md:mb-[100px]">
          <header className="mb-[50px]">
            <div className="flex items-center gap-[10px] mb-3">
              <span className="text-[14px] text-[#545454] font-medium">06.</span>
              <span className="text-[#323233]">—</span>
              <span className="text-[13px] text-[#545454] font-medium tracking-[2px] uppercase">
                Engineering Discipline
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[34px] md:text-[52px] font-medium text-white leading-[1.1] max-w-[820px] mb-4 tracking-tight"
            >
              Enterprise Code Standards & Best Practices
            </motion.h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-8 items-start">
            {standards.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#A955F7] to-[#7F22CE] rounded-[14px] flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(168,85,247,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[17px] text-white mb-2.5 transition-colors group-hover:text-[#A955F7]">
                  {s.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-[1.6]">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PART 2 — DEVELOPER WORKSTATION BANNER (Velara Style) */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#101110] border border-[#252525] rounded-[30px] overflow-hidden min-h-[420px] relative flex flex-col lg:flex-row group"
          >
            {/* Left Content */}
            <div className="flex-1 p-[40px] md:p-[60px] lg:p-[70px] flex flex-col justify-center relative z-20">
              <span className="text-xs font-mono text-[#A955F7] uppercase tracking-wider mb-2">
                Open Source & Public Repositories
              </span>
              <h2 className="font-medium text-[34px] md:text-[46px] text-white leading-[1.1] mb-5 tracking-tight">
                Inspect Source Code On GitHub
              </h2>
              <p className="text-[15px] text-white/50 leading-[1.6] max-w-[420px] mb-8 font-normal">
                Every project I build is open, organized with clear README documentation, commit histories, and straightforward setup instructions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1d1c1e] border border-[#323233] rounded-[16px] px-6 py-3.5 inline-flex items-center gap-3.5 hover:bg-[#2a2a2a] transition-all hover:scale-[1.02] hover:border-[#A955F7]/30"
                >
                  <Github size={20} className="text-white" />
                  <div className="text-left">
                    <p className="text-[10px] text-white/40 leading-none mb-1 uppercase tracking-wider font-bold">
                      Explore Repos
                    </p>
                    <p className="text-[15px] font-bold text-white leading-none">github.com/harshal-patil-dev</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side — Code Editor Window Mockup */}
            <div className="flex-1 relative overflow-hidden hidden lg:flex items-center justify-end">
              <div className="absolute right-[-20px] top-[40px] w-[620px] bg-[#141414] rounded-[20px_20px_0_0] border border-[#2a2a2a] overflow-hidden z-10 transition-transform duration-700 group-hover:translate-x-[-10px]">
                {/* Window Chrome */}
                <div className="bg-[#181818] h-[40px] border-b border-[#2a2a2a] px-5 flex items-center gap-3">
                  <div className="flex gap-1.5 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[12px] text-white/70 font-mono flex items-center gap-1.5 ml-4">
                    <FileCode size={14} className="text-[#A955F7]" /> TravelyController.java
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-xs text-white/80 space-y-2 bg-[#0d0e0f] h-[340px] overflow-y-auto">
                  <p className="text-[#A955F7]">@RestController</p>
                  <p className="text-[#A955F7]">@RequestMapping(&quot;/api/v1/bookings&quot;)</p>
                  <p className="text-[#A955F7]">@CrossOrigin(origins = &quot;*&quot;)</p>
                  <p className="text-white">public class <span className="text-yellow-300">BookingController</span> &#123;</p>
                  <p className="pl-4 text-white/50">@Autowired</p>
                  <p className="pl-4 text-white">private <span className="text-cyan-300">BookingService</span> bookingService;</p>
                  <p className="pl-4 text-white/50">@Autowired</p>
                  <p className="pl-4 text-white">private <span className="text-cyan-300">RazorpayService</span> paymentGateway;</p>
                  <br />
                  <p className="pl-4 text-[#A955F7]">@PostMapping(&quot;/create-order&quot;)</p>
                  <p className="pl-4 text-white">public <span className="text-yellow-300">ResponseEntity</span>&lt;OrderResponse&gt; createOrder(</p>
                  <p className="pl-8 text-white">@Valid @RequestBody BookingRequest request) &#123;</p>
                  <p className="pl-12 text-emerald-400">// Generate secure Razorpay signature & order ID</p>
                  <p className="pl-12 text-white">OrderResponse res = paymentGateway.process(request);</p>
                  <p className="pl-12 text-white">return ResponseEntity.ok(res);</p>
                  <p className="pl-8 text-white">&#125;</p>
                  <p className="text-white">&#125;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
