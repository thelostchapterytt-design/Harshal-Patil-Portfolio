import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, ExternalLink, Check, FileText } from "lucide-react";
import jsPDF from "jspdf";
import { PERSONAL_INFO } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  // Generates genuine, crisp vector PDF document using jsPDF directly
  const createResumeDoc = (): jsPDF => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
    const margin = 45;
    const contentWidth = pageWidth - margin * 2; // ~505 pt
    let y = 52;

    // Header: Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    doc.text("HARSHAL SANDIP PATIL", pageWidth / 2, y, { align: "center" });

    // Header: Subtitle
    y += 18;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(60, 60, 60);
    doc.text("JAVA FULL STACK DEVELOPER | BCA GRADUATE", pageWidth / 2, y, { align: "center" });

    // Header: Contact Info Line
    y += 15;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(
      "Amalner, Maharashtra  •  +91-9322414106  •  harsheditz79@gmail.com  •  LinkedIn  •  GitHub",
      pageWidth / 2,
      y,
      { align: "center" }
    );

    // Divider Line
    y += 14;
    doc.setDrawColor(210, 210, 210);
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);

    const addSectionHeader = (title: string) => {
      y += 20;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(20, 20, 20);
      doc.text(title, margin, y);
      y += 4;
      doc.setDrawColor(210, 210, 210);
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
      y += 12;
    };

    // 1. PROFESSIONAL SUMMARY
    addSectionHeader("PROFESSIONAL SUMMARY");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.2);
    doc.setTextColor(50, 50, 50);
    const summary =
      "BCA Graduate and aspiring Java Full Stack Developer currently undergoing intensive corporate software training at The Kiran Academy, Pune. Strong command of Core Java, Advanced Java, Spring Boot 3, Spring MVC, Hibernate JPA, REST APIs, MySQL, and modern React.js with practical experience in enterprise architecture, JWT security, and Razorpay integration.";
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    doc.text(splitSummary, margin, y, { lineHeightFactor: 1.35 });
    y += splitSummary.length * 12 + 6;

    // 2. SKILLS
    addSectionHeader("SKILLS");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);

    const colWidth = contentWidth / 3;
    const col1 = ["•  Java", "•  Spring MVC", "•  Spring Boot"];
    const col2 = ["•  Hibernate / JPA", "•  REST APIs", "•  SQL / MySQL"];
    const col3 = ["•  React.js", "•  HTML / CSS / JavaScript", "•  Git / GitHub / Postman"];

    const skillsStartY = y;
    col1.forEach((t, i) => doc.text(t, margin, skillsStartY + i * 13));
    col2.forEach((t, i) => doc.text(t, margin + colWidth, skillsStartY + i * 13));
    col3.forEach((t, i) => doc.text(t, margin + colWidth * 2, skillsStartY + i * 13));
    y = skillsStartY + 3 * 13 + 6;

    // 3. PROJECTS
    addSectionHeader("PROJECTS");

    // Project 1: SyncWork
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text("Project: SyncWork – Employee Management System", margin, y);
    y += 12;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text("Technologies Used: Java | Spring Boot | Spring MVC | JSP | Hibernate/JPA | MySQL", margin, y);
    y += 11;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    const syncDesc =
      "Description: Developed an employee management system with CRUD operations and department-based search. Implemented layered architecture using Controller, Service, Repository, and Entity layers. Added user registration/login, session-based authentication, and AOP-based login checking.";
    const splitSync = doc.splitTextToSize(syncDesc, contentWidth);
    doc.text(splitSync, margin, y, { lineHeightFactor: 1.35 });
    y += splitSync.length * 12 + 10;

    // Project 2: Travely
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text("Project: Travely – Full-Stack Travel Booking System", margin, y);
    y += 12;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text("Technologies Used: MERN Stack | MongoDB | Express.js | React.js | Node.js | Razorpay", margin, y);
    y += 11;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    const travelDesc =
      "Description: Developed a travel booking application with user authentication, private routes, and REST APIs. Implemented CRUD operations, MongoDB integration, and Razorpay payment gateway integration.";
    const splitTravel = doc.splitTextToSize(travelDesc, contentWidth);
    doc.text(splitTravel, margin, y, { lineHeightFactor: 1.35 });
    y += splitTravel.length * 12 + 10;

    // 4. EDUCATION
    addSectionHeader("EDUCATION");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text("Bachelor of Computer Applications (BCA)", margin, y);
    y += 12;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(70, 70, 70);
    doc.text("Pratap College, Amalner (KBC NMU, Jalgaon)", margin, y);
    y += 11;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 50);
    doc.text("•  Degree Status: BCA Graduate (Completed)", margin, y);
    y += 11;
    doc.text("•  Cumulative CGPA: 7.56 / 10", margin, y);
    y += 12;

    // 5. ADDITIONAL INFORMATION
    addSectionHeader("ADDITIONAL INFORMATION");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(20, 20, 20);
    doc.text("•  Certifications: ", margin, y);
    const certW = doc.getTextWidth("•  Certifications: ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
    doc.text("Generative AI – Oracle (2025) | CCC – NIELIT (2025)", margin + certW, y);
    y += 13;

    doc.setFont("helvetica", "bold");
    doc.setTextColor(20, 20, 20);
    doc.text("•  Professional Training: ", margin, y);
    const purW = doc.getTextWidth("•  Professional Training: ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
    doc.text("Full Stack Java Development – Kiran Academy Pune (Enrolled) | Typing – GCC-TBC", margin + purW, y);

    return doc;
  };

  const handleDownloadPDF = () => {
    try {
      const doc = createResumeDoc();
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = "Harshal_Sandip_Patil_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 1000);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (e) {
      console.error("Download error:", e);
      // Fallback
      window.print();
    }
  };

  const handleOpenInNewTab = () => {
    try {
      const doc = createResumeDoc();
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (e) {
      window.print();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#141414] border border-white/15 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 max-h-[94vh] flex flex-col my-auto"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#1a1a1a] shrink-0">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#A955F7]" />
              <span className="text-white font-semibold text-sm sm:text-base tracking-tight">
                Harshal Sandip Patil — Resume
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Open in tab button */}
              <button
                onClick={handleOpenInNewTab}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 text-xs font-medium transition-colors"
                title="Open PDF in new tab"
              >
                <ExternalLink size={13} />
                <span>Open in Tab</span>
              </button>

              {/* Download PDF Button */}
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#A955F7] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#9332ea] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                {downloadSuccess ? (
                  <>
                    <Check size={14} className="text-white" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Document Viewer Body (Scrollable container showing clean A4 preview) */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 bg-[#0a0a0a]">
            <div
              className="bg-white text-black font-sans max-w-[760px] mx-auto p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm leading-tight select-text"
              style={{ minHeight: "1000px" }}
            >
              {/* 1. Header */}
              <div className="text-center pb-4 border-b border-gray-300">
                <h1 className="text-2xl sm:text-[32px] font-black tracking-tight text-gray-950 uppercase mb-1 font-sans">
                  HARSHAL SANDIP PATIL
                </h1>
                <p className="text-xs sm:text-[14px] font-bold text-gray-800 tracking-wider uppercase mb-2.5">
                  JAVA FULL STACK DEVELOPER | BCA GRADUATE
                </p>
                <p className="text-[11px] sm:text-[12.5px] text-gray-600 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                  <span>Amalner, Maharashtra</span>
                  <span>•</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-black">
                    +91-9322414106
                  </a>
                  <span>•</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-black">
                    harsheditz79@gmail.com
                  </a>
                  <span>•</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>

              {/* 2. Professional Summary */}
              <div className="pt-5 pb-4">
                <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-[1.5px] text-gray-950 pb-1.5 border-b border-gray-300 mb-2.5">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-[11.5px] sm:text-[13px] text-gray-800 leading-relaxed text-justify">
                  BCA Graduate and aspiring Java Full Stack Developer currently undergoing intensive corporate software training at The Kiran Academy, Pune. Strong command of Core Java, Advanced Java, Spring Boot 3, Spring MVC, Hibernate JPA, REST APIs, MySQL, and modern React.js with practical experience in enterprise architecture, JWT security, and Razorpay integration.
                </p>
              </div>

              {/* 3. Skills */}
              <div className="py-2">
                <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-[1.5px] text-gray-950 pb-1.5 border-b border-gray-300 mb-2.5">
                  SKILLS
                </h2>
                <div className="grid grid-cols-3 gap-2 text-[11.5px] sm:text-[13px] text-gray-800">
                  <div className="space-y-1">
                    <p>• Java</p>
                    <p>• Spring MVC</p>
                    <p>• Spring Boot</p>
                  </div>
                  <div className="space-y-1">
                    <p>• Hibernate / JPA</p>
                    <p>• REST APIs</p>
                    <p>• SQL / MySQL</p>
                  </div>
                  <div className="space-y-1">
                    <p>• React.js</p>
                    <p>• HTML / CSS / JavaScript</p>
                    <p>• Git / GitHub / Postman</p>
                  </div>
                </div>
              </div>

              {/* 4. Projects */}
              <div className="pt-4 pb-2">
                <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-[1.5px] text-gray-950 pb-1.5 border-b border-gray-300 mb-3">
                  PROJECTS
                </h2>

                <div className="space-y-4">
                  {/* SyncWork */}
                  <div>
                    <h3 className="text-[12px] sm:text-[13.5px] font-bold text-gray-950">
                      Project: SyncWork – Employee Management System
                    </h3>
                    <p className="text-[11px] sm:text-[12.5px] text-gray-700 font-medium my-0.5">
                      Technologies Used: Java | Spring Boot | Spring MVC | JSP | Hibernate/JPA | MySQL
                    </p>
                    <p className="text-[11px] sm:text-[12.5px] text-gray-800 leading-relaxed text-justify mt-1">
                      Description: Developed an employee management system with CRUD operations and department-based search. Implemented layered architecture using Controller, Service, Repository, and Entity layers. Added user registration/login, session-based authentication, and AOP-based login checking.
                    </p>
                  </div>

                  {/* Travely */}
                  <div>
                    <h3 className="text-[12px] sm:text-[13.5px] font-bold text-gray-950">
                      Project: Travely – Full-Stack Travel Booking System
                    </h3>
                    <p className="text-[11px] sm:text-[12.5px] text-gray-700 font-medium my-0.5">
                      Technologies Used: MERN Stack | MongoDB | Express.js | React.js | Node.js | Razorpay
                    </p>
                    <p className="text-[11px] sm:text-[12.5px] text-gray-800 leading-relaxed text-justify mt-1">
                      Description: Developed a travel booking application with user authentication, private routes, and REST APIs. Implemented CRUD operations, MongoDB integration, and Razorpay payment gateway integration.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Education */}
              <div className="pt-4 pb-2">
                <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-[1.5px] text-gray-950 pb-1.5 border-b border-gray-300 mb-2.5">
                  EDUCATION
                </h2>
                <div>
                  <h3 className="text-[12px] sm:text-[13.5px] font-bold text-gray-950">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-[11px] sm:text-[12.5px] text-gray-700">
                    Pratap College, Amalner (KBC NMU, Jalgaon)
                  </p>
                  <div className="text-[11px] sm:text-[12.5px] text-gray-800 space-y-0.5 mt-1">
                    <p>• Degree Status: BCA Graduate (Completed)</p>
                    <p>• Cumulative CGPA: 7.56 / 10</p>
                  </div>
                </div>
              </div>

              {/* 6. Additional Information */}
              <div className="pt-4">
                <h2 className="text-xs sm:text-[13px] font-black uppercase tracking-[1.5px] text-gray-950 pb-1.5 border-b border-gray-300 mb-2.5">
                  ADDITIONAL INFORMATION
                </h2>
                <div className="text-[11px] sm:text-[12.5px] text-gray-800 space-y-1">
                  <p>
                    • <span className="font-semibold text-gray-950">Certifications:</span> Generative AI – Oracle (2025) | CCC – NIELIT (2025)
                  </p>
                  <p>
                    • <span className="font-semibold text-gray-950">Professional Training:</span> Full Stack Java Development – Kiran Academy Pune (Enrolled) | Typing – GCC-TBC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
