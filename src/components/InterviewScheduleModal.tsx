import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Mail,
  Building,
  User,
  X,
  CheckCircle2,
  Video,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface InterviewScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InterviewScheduleModal({
  isOpen,
  onClose,
}: InterviewScheduleModalProps) {
  const [formData, setFormData] = useState({
    recruiterName: "",
    email: "",
    company: "",
    role: "Java Full Stack Developer",
    date: "",
    timeSlot: "11:00 AM IST",
    platform: "Google Meet",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Interview Invitation: ${formData.role} at ${formData.company || "Our Company"}`
    );
    const body = encodeURIComponent(
      `Hi Harshal,\n\nWe would like to schedule a technical interview with you regarding the ${formData.role} role.\n\n` +
      `Candidate: Harshal Patil\n` +
      `Interviewer: ${formData.recruiterName}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Proposed Date: ${formData.date || "Next available mutual slot"}\n` +
      `Proposed Time: ${formData.timeSlot}\n` +
      `Platform: ${formData.platform}\n\n` +
      `Notes: ${formData.notes || "Looking forward to speaking with you."}\n\nBest regards,\n${formData.recruiterName}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 py-8 sm:py-12 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl bg-[#0e0e11] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden z-20 my-auto text-white"
        >
          {/* Top Subtle Purple Glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#A955F7]/20 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#A955F7]/15 border border-[#A955F7]/30 flex items-center justify-center text-[#A955F7] shrink-0">
                <Calendar size={16} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                    Schedule Technical Interview
                  </h3>
                  <span className="hidden xs:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#A955F7]/15 text-[#A955F7] border border-[#A955F7]/30">
                    Direct Calendar
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-white/50 truncate">
                  Connect with Harshal Patil &bull; Java Full Stack
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 size={30} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Interview Invitation Ready!
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.recruiterName}</strong> from{" "}
                    <strong className="text-white">{formData.company || "your team"}</strong>.
                    The interview details for the <strong className="text-[#A955F7]">{formData.role}</strong> position have been recorded.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                  <div className="flex justify-between text-white/70">
                    <span>Role:</span>
                    <span className="text-white font-medium">{formData.role}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Preferred Date:</span>
                    <span className="text-white font-medium">{formData.date || "Earliest available"}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Slot &amp; Platform:</span>
                    <span className="text-white font-medium">{formData.timeSlot} ({formData.platform})</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Candidate Email:</span>
                    <span className="text-[#A955F7] font-medium">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getMailtoLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xs:w-auto h-10 px-5 rounded-full bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
                  >
                    <Mail size={14} />
                    <span>Send via Email Client</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full xs:w-auto h-10 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2-col inputs: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Your Name / Recruiter *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        required
                        value={formData.recruiterName}
                        onChange={(e) =>
                          setFormData({ ...formData, recruiterName: e.target.value })
                        }
                        placeholder="e.g. Priya Sharma"
                        className="w-full h-10 pl-9 pr-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#A955F7] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. hr@company.com"
                        className="w-full h-10 pl-9 pr-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#A955F7] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Company & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Company / Organization *
                    </label>
                    <div className="relative">
                      <Building size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Infosys / Startup"
                        className="w-full h-10 pl-9 pr-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#A955F7] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Role / Track
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-[#17161b] border border-white/10 text-xs text-white focus:outline-none focus:border-[#A955F7] transition-all cursor-pointer"
                    >
                      <option value="Java Full Stack Developer">Java Full Stack Developer</option>
                      <option value="Backend Software Engineer (Spring Boot)">
                        Backend Software Engineer (Spring Boot)
                      </option>
                      <option value="Frontend Developer (React.js)">Frontend Developer (React.js)</option>
                      <option value="Full Stack Associate Engineer">Full Stack Associate Engineer</option>
                      <option value="Technical Screening / Discussion">Technical Screening</option>
                    </select>
                  </div>
                </div>

                {/* Date, Time & Platform */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Proposed Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full h-10 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white focus:outline-none focus:border-[#A955F7] transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-[#17161b] border border-white/10 text-xs text-white focus:outline-none focus:border-[#A955F7] transition-all cursor-pointer"
                    >
                      <option value="10:00 AM IST">10:00 AM IST</option>
                      <option value="11:30 AM IST">11:30 AM IST</option>
                      <option value="02:30 PM IST">02:30 PM IST</option>
                      <option value="04:00 PM IST">04:00 PM IST</option>
                      <option value="06:00 PM IST">06:00 PM IST</option>
                      <option value="Flexible / Mutual">Flexible Slot</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                      Platform
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) =>
                        setFormData({ ...formData, platform: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-[#17161b] border border-white/10 text-xs text-white focus:outline-none focus:border-[#A955F7] transition-all cursor-pointer"
                    >
                      <option value="Google Meet">Google Meet</option>
                      <option value="Zoom">Zoom Meeting</option>
                      <option value="Microsoft Teams">MS Teams</option>
                      <option value="Phone Screen">Phone Call</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-[11px] font-mono text-white/70 mb-1.5 uppercase tracking-wide">
                    Meeting Link or Job Context (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Share any job description link, meeting link, or specific topics..."
                    className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#A955F7] transition-all resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 px-6 rounded-full bg-[#A955F7] hover:bg-[#9333EA] text-white text-xs font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Confirm &amp; Send Invitation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
