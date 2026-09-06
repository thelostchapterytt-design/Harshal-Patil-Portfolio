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
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ContactPageProps {
  onOpenResume: () => void;
  onOpenContactModal: () => void;
}

export default function ContactPage({ onOpenResume }: ContactPageProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const emailSubject = encodeURIComponent(
      subject ? `[Portfolio Inquiry] ${subject} - ${name}` : `Inquiry from ${name}`
    );
    const emailBody = encodeURIComponent(
      `Hi Harshal,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via your portfolio website.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

    setIsSent(true);
  };

  return (
    <div className="bg-transparent text-white antialiased min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 md:px-12 relative overflow-hidden flex flex-col justify-center">
      {/* Ambient background glow & technical grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix opacity-15" />
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-[#A955F7]/[0.05] blur-[170px] rounded-full" />
        <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[180px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[#A955F7]/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10 my-auto">
        {/* Clean Consistent Contact Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold shrink-0">05.</span>
            <span className="text-white/20 shrink-0">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-wider sm:tracking-[2px] uppercase font-bold text-center">
              Direct Inquiries &amp; Career Opportunities
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-3 sm:mb-4">
            Connect &amp;{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-[#A955F7] bg-clip-text text-transparent">
              Collaborate.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-normal max-w-[620px] mx-auto leading-relaxed">
            Have a role opening, technical interview request, or want to discuss a project? Reach out directly and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* 2-Column Clean Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Contact Box */}
            <div className="bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4">
              <h2 className="text-base font-semibold text-white">Contact Information</h2>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#A955F7]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#A955F7]/10 flex items-center justify-center text-[#A955F7] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-mono text-white/40">Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm text-white hover:text-[#A955F7] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0 cursor-pointer ml-2"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-mono text-white/40">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0 cursor-pointer ml-2"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-white/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-white/40">Location &amp; Mobility</div>
                  <div className="text-xs sm:text-sm text-white/90">Amalner / Pune, Maharashtra</div>
                  <div className="text-[11px] text-emerald-400/90 font-mono mt-0.5">Open to Relocation &amp; Remote</div>
                </div>
              </div>
            </div>

            {/* Social Links & Resume Box */}
            <div className="bg-[#121214] border border-white/10 rounded-2xl p-5 space-y-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#0A66C2]/40 text-xs text-white/80 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin size={16} className="text-[#0A66C2]" />
                  <span>Connect on LinkedIn</span>
                </div>
                <ArrowUpRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 text-xs text-white/80 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={16} />
                  <span>View GitHub Profile</span>
                </div>
                <ArrowUpRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full mt-2 py-3 rounded-xl bg-[#A955F7]/15 hover:bg-[#A955F7]/25 border border-[#A955F7]/30 text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download size={15} className="text-[#A955F7]" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8 relative">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-white/50 mb-6 font-normal">
                Leave your email and requirements below, I will reply promptly.
              </p>

              {isSent ? (
                <div className="py-10 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Ready to Send!</h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto">
                    Your email client has opened with your drafted message. You can also directly write to{" "}
                    <span className="text-white font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Your Name <span className="text-[#A955F7]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5">
                        Your Email <span className="text-[#A955F7]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Opportunity / Interview / Project"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Message <span className="text-[#A955F7]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Harshal, I'd like to talk to you about..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#A955F7] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#A955F7] hover:bg-[#9333EA] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
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
