import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "../data/portfolioData";

export default function FAQSection({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={"bg-black py-20 sm:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 " + (className || "")}>
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A955F7]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header */}
        <header className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-[#A955F7] font-mono font-bold">04.</span>
            <span className="text-white/20">&mdash;</span>
            <span className="text-xs text-[#A955F7] font-mono tracking-[2px] uppercase font-bold">
              Engineering &amp; Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-white/50 font-normal max-w-[580px] mx-auto leading-relaxed">
            Key insights regarding technology stack, architecture discipline, degree credentials, and team collaboration.
          </p>
        </header>

        {/* Minimal Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={
                  "rounded-2xl border transition-all duration-300 overflow-hidden " +
                  (isOpen
                    ? "bg-white/[0.04] border-[#A955F7]/40 shadow-[0_0_25px_rgba(168,85,247,0.1)]"
                    : "bg-white/[0.015] border-white/10 hover:border-white/20 hover:bg-white/[0.025]")
                }
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none transition-colors"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="text-xs font-mono text-[#A955F7] font-semibold shrink-0">
                      0{index + 1}
                    </span>
                    <h3
                      className={
                        "text-sm sm:text-base md:text-[17px] font-medium transition-colors " +
                        (isOpen ? "text-white font-semibold" : "text-white/85")
                      }
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className={
                      "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 " +
                      (isOpen
                        ? "bg-[#A955F7]/20 border-[#A955F7]/40 text-[#A955F7]"
                        : "bg-white/5 border-white/10 text-white/40")
                    }
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={"answer-" + index}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
