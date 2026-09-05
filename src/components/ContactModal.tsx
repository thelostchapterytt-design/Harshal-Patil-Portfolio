import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Send, Copy, Check, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hi Harshal,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 p-6 sm:p-8 my-auto overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Clean Header */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-sm text-white/60 mt-1.5 leading-relaxed">
              Have an opening, project, or question? Send a message directly or connect through WhatsApp / Email.
            </p>
          </div>

          {/* Quick Connect Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
            {/* Email Chip with Copy */}
            <button
              type="button"
              onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#A955F7]/40 hover:bg-white/[0.07] transition-all text-left group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#A955F7]/10 flex items-center justify-center text-[#A955F7] shrink-0">
                  <Mail size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Email</p>
                  <p className="text-xs text-white font-medium truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <span className="text-white/40 group-hover:text-white shrink-0 ml-2">
                {copiedField === "email" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
              </span>
            </button>

            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/919322414106?text=Hi%20Harshal,%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-emerald-400/70 tracking-wider">WhatsApp</p>
                  <p className="text-xs text-white font-medium truncate">+91 9322414106</p>
                </div>
              </div>
              <ExternalLink size={14} className="text-white/40 group-hover:text-emerald-400 shrink-0 ml-2" />
            </a>
          </div>

          {/* Simple Clean Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/75 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#A955F7] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/75 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#A955F7] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/75 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Harshal, we have an opening for a Java Full Stack Developer..."
                className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#A955F7] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full mt-2 bg-[#A955F7] hover:bg-[#9332ea] text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-[0.99] disabled:opacity-50 text-sm"
            >
              {sent ? (
                <>
                  <Check size={16} className="text-white" />
                  <span>Opening Mail...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Minimal Footer */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
            <span>Amalner, MH (Open to Relocate)</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              github.com/harshal-sp
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
