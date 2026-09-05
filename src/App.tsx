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

// Dedicated Deep-Dive Pages
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";

type PageTab = "home" | "projects" | "skills" | "education" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageTab>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("project")) return "projects";
      if (hash.includes("skill")) return "skills";
      if (hash.includes("education")) return "education";
      if (hash.includes("contact") || hash.includes("hire")) return "contact";
    }
    return "home";
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync state with browser hash navigation (Back/Forward buttons & direct link entries)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("project")) {
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
    };

    if (window.location.hash !== hashMap[target]) {
      window.history.pushState(null, "", hashMap[target]);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black text-white font-['Inter',_sans-serif] selection:bg-[#A955F7]/30 selection:text-white overflow-x-hidden relative flex flex-col justify-between">
      {/* Global Sticky Navigation Bar with active tab indicators */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
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
                onOpenContact={() => setIsContactOpen(true)}
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
                onOpenContact={() => setIsContactOpen(true)}
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
                onOpenContact={() => setIsContactOpen(true)}
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
                onOpenContact={() => setIsContactOpen(true)}
                onOpenResume={() => setIsResumeOpen(true)}
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
                onOpenContact={() => setIsContactOpen(true)}
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
                onOpenContactModal={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Cosmic Arc Planet Footer (Journey visible ONLY on home page) */}
      <FooterSection
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        showJourney={currentPage === "home"}
      />

      {/* Interactive Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
