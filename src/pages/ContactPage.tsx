import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Download,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ContactPageProps {
  onOpenResume: () => void;
  onOpenContactModal: () => void;
}

export default function ContactPage({ onOpenResume, onOpenContactModal }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

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
            <span className="text-xs text-[#A955F7] font-mono font-bold">05.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Recruitment &amp; Contact Portal
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4">
            Let&apos;s Build Together &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Connect.
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[680px] mx-auto leading-relaxed">
            Available immediately for Full-Time Java Full Stack Developer roles, Software Engineer openings, and direct recruiter conversations.
          </p>
        </header>

      {/* Grid: Direct Contact Details & Interactive Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-20">
        {/* Left: Quick Info & Credentials (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#A955F7]/20 border border-[#A955F7]/30 flex items-center justify-center text-[#A955F7]">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Harshal Sandip Patil</h3>
                <p className="text-xs text-white/50">Java Full Stack Developer</p>
              </div>
            </div>

            {/* Availability Badges */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3.5 py-2 rounded-xl">
                <Clock size={15} className="shrink-0" />
                <span className="font-semibold">Notice Period: Immediate (0 Days)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <MapPin size={15} className="text-[#A955F7] shrink-0" />
                <span>Preferred: Pune &bull; Mumbai &bull; Bengaluru &bull; Remote</span>
              </div>
            </div>

            {/* Direct Connect Chips */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[#A955F7]/40 text-xs text-white/90 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#A955F7]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 group-hover:text-white">Email &rarr;</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[#3B82F6]/40 text-xs text-white/90 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#3B82F6]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 group-hover:text-white">Call &rarr;</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[#0A66C2]/40 text-xs text-white/90 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 group-hover:text-white">View &rarr;</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 text-xs text-white/90 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-white" />
                  <span>GitHub Repositories</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 group-hover:text-white">Explore &rarr;</span>
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download size={14} className="text-[#A955F7]" />
                <span>View &amp; Download Verified Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Direct Recruiter Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Send Direct Message to Harshal</h3>
            <p className="text-xs sm:text-sm text-white/60 mb-6">
              Recruiters and hiring managers receive an immediate notification on my mobile and email inbox.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-xs sm:text-sm text-white/70 max-w-[420px] mx-auto">
                  Thank you for reaching out! Harshal will review your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 hover:text-white cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Your Name / Recruiter <span className="text-[#A955F7]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Work Email <span className="text-[#A955F7]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Infosys, TCS, Tech Startup"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Role or Opportunity Details <span className="text-[#A955F7]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the full-stack Java / Software Engineer opportunity, team, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#A955F7] hover:bg-[#9333EA] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
                >
                  <Send size={15} />
                  <span>Send Message to Harshal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
