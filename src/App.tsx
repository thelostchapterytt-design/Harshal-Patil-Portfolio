import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoreStrengthsSection from "./components/CoreStrengthsSection";
import FeaturedProjectsHomeSection from "./components/FeaturedProjectsHomeSection";
import ArchitectureShowcaseSection from "./components/ArchitectureShowcaseSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import ResumeModal from "./components/ResumeModal";
import ContactModal from "./components/ContactModal";
import InterviewScheduleModal from "./components/InterviewScheduleModal";

// Dedicated Deep-Dive Pages
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

type PageTab = "home" | "projects" | "skills" | "education" | "contact" | "admin";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageTab>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("admin")) return "admin";
      if (hash.includes("project")) return "projects";
      if (hash.includes("skill")) return "skills";
      if (hash.includes("education")) return "education";
      if (hash.includes("contact") || hash.includes("hire")) return "contact";
    }
    return "home";
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);

  // Sync state with browser hash navigation (Back/Forward buttons & direct link entries)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("admin")) {
        setCurrentPage("admin");
      } else if (hash.includes("project")) {
        setCurrentPage("projects");
      } else if (hash.includes("skill")) {
        setCurrentPage("skills");
      } else if (hash.includes("education")) {
        setCurrentPage("education");
      } else if (hash.includes("contact") || hash.includes("hire")) {
        setCurrentPage("contact");
      } else if (hash.includes("overview") || hash === "" || hash === "#") {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const target = page as PageTab;
    setCurrentPage(target);

    // Update URL hash for sharing & history without full page reload
    const hashMap: Record<PageTab, string> = {
      home: "#overview",
      projects: "#projects",
      skills: "#skills",
      education: "#education",
      contact: "#hire",
      admin: "#admin",
    };

    if (window.location.hash !== hashMap[target]) {
      window.history.pushState(null, "", hashMap[target]);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#A955F7]/30 selection:text-white overflow-x-hidden relative flex flex-col justify-between">
      {/* Global Background Layer: Original Cosmic Depth for Home, Deep Obsidian for other pages */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute inset-0 bg-dot-matrix ${currentPage === "home" ? "opacity-25" : "opacity-15"}`} />
        {currentPage === "home" ? (
          <>
            {/* Original Atmospheric Cosmic Violet Glow for Home Page */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[580px] bg-[#A955F7]/[0.14] blur-[170px] rounded-full" />
            <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-blue-600/[0.06] blur-[200px] rounded-full" />
            <div className="absolute top-[70%] -left-[15%] w-[600px] h-[600px] bg-[#A955F7]/[0.05] blur-[200px] rounded-full" />
          </>
        ) : (
          <>
            {/* Deep Clean Obsidian Accents for dedicated pages */}
            <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[580px] bg-[#A955F7]/[0.04] blur-[170px] rounded-full" />
            <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-blue-600/[0.02] blur-[200px] rounded-full" />
            <div className="absolute top-[70%] -left-[15%] w-[600px] h-[600px] bg-[#A955F7]/[0.02] blur-[200px] rounded-full" />
          </>
        )}
      </div>

      {/* Global Sticky Navigation Bar with active tab indicators */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => navigateTo("contact")}
      />

      {/* Main Dynamic View Content */}
      <div className="flex-1 w-full">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              {/* 1. Hero Section with Command Center Cockpit */}
              <HeroSection
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContact={() => navigateTo("contact")}
                onNavigateToProjects={() => navigateTo("projects")}
              />

              {/* 2. Core Strengths Snapshot */}
              <CoreStrengthsSection />

              {/* 3. Featured Flagship Systems (Travely + SyncWork) */}
              <FeaturedProjectsHomeSection
                onNavigateToProjects={() => navigateTo("projects")}
              />

              {/* 4. Technical Architecture & Live API Simulator */}
              <ArchitectureShowcaseSection
                onOpenContact={() => navigateTo("contact")}
                onOpenInterviewModal={() => setIsInterviewModalOpen(true)}
              />

              {/* 5. Recruiter FAQ */}
              <FAQSection />
            </motion.div>
          )}

          {currentPage === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              <ProjectsPage
                onOpenContact={() => navigateTo("contact")}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            </motion.div>
          )}

          {currentPage === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              <SkillsPage
                onOpenContact={() => navigateTo("contact")}
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenInterviewModal={() => setIsInterviewModalOpen(true)}
              />
            </motion.div>
          )}

          {currentPage === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              <EducationPage
                onOpenContact={() => navigateTo("contact")}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              <ContactPage
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContactModal={() => navigateTo("contact")}
              />
            </motion.div>
          )}

          {currentPage === "admin" && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28 }}
            >
              <AdminPage onNavigateHome={() => navigateTo("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Cosmic Arc Planet Footer (Clean footer without home journey block) */}
      <FooterSection
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => navigateTo("contact")}
        showJourney={false}
      />

      {/* Interactive Modals - Always Rendered at Root Above Navbar (z-[100]) */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <InterviewScheduleModal isOpen={isInterviewModalOpen} onClose={() => setIsInterviewModalOpen(false)} />
    </main>
  );
}
