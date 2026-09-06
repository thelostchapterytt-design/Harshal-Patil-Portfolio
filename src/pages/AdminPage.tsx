import React, { useState, useMemo } from "react";
import {
  Lock,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  RotateCcw,
  Download,
  Upload,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
  Eye,
  LogOut,
  Star,
  Search,
  Filter,
  KeyRound,
  AlertCircle,
} from "lucide-react";
import { Project } from "../data/portfolioData";
import { usePortfolioProjects } from "../data/portfolioStore";

interface AdminPageProps {
  onNavigateHome: () => void;
}

const COMMON_TECH_SUGGESTIONS = [
  "Java 17",
  "Spring Boot 3",
  "Spring MVC",
  "Hibernate JPA",
  "MySQL 8.0",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "JWT Security",
  "Razorpay API",
  "RESTful APIs",
  "Maven",
  "Git & GitHub",
  "Docker",
  "Postman",
];

export default function AdminPage({ onNavigateHome }: AdminPageProps) {
  const { projects, addOrUpdateProject, deleteProject, resetProjects } = usePortfolioProjects();

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("hp_admin_session") === "true";
    }
    return false;
  });
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  // Passkey Modal State
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [newKeyInput, setNewKeyInput] = useState("");
  const [confirmKeyInput, setConfirmKeyInput] = useState("");
  const [keyUpdateMsg, setKeyUpdateMsg] = useState("");

  // Edit / Add Modal State
  const [isEditing, setIsEditing] = useState(false);
  const [activeProject, setActiveProject] = useState<Partial<Project>>({
    id: "",
    title: "",
    category: "Full Stack",
    summary: "",
    description: "",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    highlight: "",
    stats: [
      { label: "Architecture", value: "" },
      { label: "Security", value: "" },
      { label: "Database", value: "" },
    ],
    featured: false,
  });

  const [techInput, setTechInput] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Authentication check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validPassword = localStorage.getItem("hp_admin_custom_pwd") || "HP#Spring2026!Dev";
    if (password === validPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("hp_admin_session", "true");
      setAuthError("");
    } else {
      setAuthError("Access Denied: Invalid master authorization passkey.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("hp_admin_session");
    setPassword("");
  };

  // Open Form to Add
  const openNew = () => {
    const newId = `project-${Date.now()}`;
    setActiveProject({
      id: newId,
      title: "",
      category: "Full Stack",
      summary: "",
      description: "",
      technologies: ["Java", "Spring Boot 3", "MySQL", "React 19"],
      githubUrl: "https://github.com/harshalpatil-dev",
      liveUrl: "",
      highlight: "High Performance Architecture",
      stats: [
        { label: "Architecture", value: "MVC Decoupled" },
        { label: "Security", value: "JWT Auth" },
        { label: "Database", value: "MySQL 8.0" },
      ],
      featured: false,
    });
    setTechInput("Java, Spring Boot 3, MySQL, React 19");
    setIsEditing(true);
    setSaveSuccess(false);
  };

  // Open Form to Edit
  const openEdit = (p: Project) => {
    setActiveProject({ ...p });
    setTechInput(p.technologies.join(", "));
    setIsEditing(true);
    setSaveSuccess(false);
  };

  // Toggle Featured
  const handleToggleFeatured = (project: Project) => {
    const updated = { ...project, featured: !project.featured };
    addOrUpdateProject(updated);
    showToast(updated.featured ? `"${project.title}" set as Featured on Home` : `"${project.title}" removed from Featured`);
  };

  // Save Project
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeProject.title || !activeProject.summary) {
      alert("Please provide both a Project Title and a Summary.");
      return;
    }

    const techArray = techInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const completeProject: Project = {
      id: activeProject.id || `project-${Date.now()}`,
      title: activeProject.title,
      category: activeProject.category || "Full Stack",
      summary: activeProject.summary,
      description: activeProject.description || activeProject.summary,
      technologies: techArray.length > 0 ? techArray : ["Software Engineering"],
      githubUrl: activeProject.githubUrl || "https://github.com/harshalpatil-dev",
      liveUrl: activeProject.liveUrl || undefined,
      highlight: activeProject.highlight || "Enterprise Engineering",
      stats: activeProject.stats && activeProject.stats.length > 0 ? activeProject.stats : [
        { label: "Architecture", value: "Decoupled" },
        { label: "Security", value: "Hardened" },
        { label: "Database", value: "Normalized" },
      ],
      featured: !!activeProject.featured,
    };

    addOrUpdateProject(completeProject);
    setSaveSuccess(true);
    showToast(`Project "${completeProject.title}" saved successfully!`);
    setTimeout(() => {
      setIsEditing(false);
      setSaveSuccess(false);
    }, 600);
  };

  // Handle Passkey Change
  const handleUpdatePasskey = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyInput.length < 6) {
      setKeyUpdateMsg("Error: Passkey must be at least 6 characters.");
      return;
    }
    if (newKeyInput !== confirmKeyInput) {
      setKeyUpdateMsg("Error: Passkeys do not match.");
      return;
    }

    localStorage.setItem("hp_admin_custom_pwd", newKeyInput);
    setKeyUpdateMsg("Success: Master passkey updated securely!");
    setTimeout(() => {
      setIsKeyModalOpen(false);
      setNewKeyInput("");
      setConfirmKeyInput("");
      setKeyUpdateMsg("");
      showToast("Master passkey updated successfully!");
    }, 1200);
  };

  // Export JSON
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `harshal_portfolio_projects_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Projects JSON backup exported!");
  };

  // Import JSON file
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (Array.isArray(imported)) {
          localStorage.setItem("hp_portfolio_custom_projects", JSON.stringify(imported));
          window.dispatchEvent(new Event("portfolio_projects_updated"));
          showToast(`Successfully imported ${imported.length} projects!`);
        } else {
          alert("Invalid file format. Expected a JSON array of projects.");
        }
      } catch (err) {
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        categoryFilter === "ALL" ||
        (categoryFilter === "FEATURED" && p.featured) ||
        p.category.toUpperCase().includes(categoryFilter.toUpperCase());

      return matchesSearch && matchesCat;
    });
  }, [projects, searchQuery, categoryFilter]);

  // 1. If not authenticated, render login portal
  if (!isAuthenticated) {
    return (
      <div className="bg-black text-white min-h-screen pt-28 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#A955F7]/[0.06] blur-[140px] pointer-events-none" />

        <div className="max-w-md w-full bg-[#0b0c10] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative z-10">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#A955F7]/10 border border-[#A955F7]/30 flex items-center justify-center text-[#A955F7] mx-auto mb-3">
              <Lock size={22} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Portfolio Admin Console</h1>
            <p className="text-xs text-white/50 mt-1">
              Enter confidential passkey to manage projects and portfolio data
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase text-white/60 mb-1.5">
                Confidential Master Key
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your confidential passkey..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-sm outline-none transition-colors"
                autoFocus
              />
            </div>

            {authError && (
              <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg flex items-center gap-2">
                <AlertCircle size={14} className="shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#A955F7] hover:bg-[#9333ea] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(169,85,247,0.3)] flex items-center justify-center gap-2"
            >
              <span>Unlock Admin Console</span>
              <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <button
              onClick={onNavigateHome}
              className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              &larr; Return to Public Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Authenticated Admin Dashboard
  return (
    <div className="bg-black text-white min-h-screen pt-24 sm:pt-28 pb-24 px-4 sm:px-8 max-w-[1250px] mx-auto relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-[200] bg-[#0b0c10] border border-[#A955F7]/40 text-white px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs font-mono flex items-center gap-2">
          <Check size={14} className="text-[#A955F7]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Live Session Authenticated
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Portfolio Admin Console
          </h1>
          <p className="text-xs text-white/50 mt-0.5">
            Manage projects, toggle home features, and maintain your repository records.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={openNew}
            className="px-3.5 py-2 bg-[#A955F7] hover:bg-[#9333ea] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(169,85,247,0.25)]"
          >
            <Plus size={14} />
            <span>Add New Project</span>
          </button>

          <button
            onClick={() => setIsKeyModalOpen(true)}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Change Passkey"
          >
            <KeyRound size={13} className="text-[#A955F7]" />
            <span>Passkey</span>
          </button>

          <button
            onClick={handleExport}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Export JSON Backup"
          >
            <Download size={13} />
            <span>Export</span>
          </button>

          <label
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Import JSON Backup"
          >
            <Upload size={13} />
            <span>Import</span>
            <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
          </label>

          <button
            onClick={() => {
              if (confirm("Reset all projects to factory defaults? Any custom added projects will be reset.")) {
                resetProjects();
                showToast("Projects reset to original defaults.");
              }
            }}
            className="px-2.5 py-2 bg-white/5 hover:bg-red-500/15 border border-white/10 text-white/50 hover:text-red-300 text-xs font-medium rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw size={13} />
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut size={13} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Quick Statistics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3.5 rounded-xl bg-[#0b0c10] border border-white/10">
          <span className="text-[10px] font-mono text-white/40 uppercase">Total Repositories</span>
          <div className="text-xl font-bold font-mono text-white mt-0.5">{projects.length}</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0b0c10] border border-white/10">
          <span className="text-[10px] font-mono text-white/40 uppercase">Featured On Home</span>
          <div className="text-xl font-bold font-mono text-[#A955F7] mt-0.5">
            {projects.filter((p) => p.featured).length}
          </div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0b0c10] border border-white/10">
          <span className="text-[10px] font-mono text-white/40 uppercase">Storage Engine</span>
          <div className="text-xs font-mono font-medium text-emerald-400 mt-1">LocalStorage &bull; Active</div>
        </div>
        <div className="p-3.5 rounded-xl bg-[#0b0c10] border border-white/10">
          <span className="text-[10px] font-mono text-white/40 uppercase">Public Access</span>
          <button
            onClick={onNavigateHome}
            className="text-xs text-white/70 hover:text-white flex items-center gap-1 mt-1 font-mono transition-colors cursor-pointer"
          >
            <span>View Public Site &rarr;</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 p-3 rounded-xl bg-[#0b0c10] border border-white/10">
        <div className="relative w-full sm:w-80">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, technologies..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-[#A955F7]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X size={12} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All" },
            { id: "FEATURED", label: "Featured" },
            { id: "FULL STACK", label: "Full Stack" },
            { id: "BACKEND", label: "Backend" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setCategoryFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                categoryFilter === f.id
                  ? "bg-[#A955F7] text-white"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {filteredProjects.length === 0 ? (
          <div className="p-8 text-center rounded-xl bg-[#0b0c10] border border-white/10 text-white/40 text-xs font-mono">
            No projects matched your search criteria.
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b0c10] border border-white/10 hover:border-white/20 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A955F7]/15 text-[#A955F7] border border-[#A955F7]/25 font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 flex items-center gap-1 font-semibold">
                      <Star size={10} fill="#f59e0b" />
                      <span>Home Featured</span>
                    </span>
                  )}
                  <span className="text-[10.5px] font-mono text-white/30 truncate max-w-[120px]">
                    {project.id}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white truncate">{project.title}</h3>
                <p className="text-xs text-white/60 line-clamp-1 mt-0.5">{project.summary}</p>

                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/70 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                <button
                  onClick={() => handleToggleFeatured(project)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                    project.featured
                      ? "bg-amber-400/10 text-amber-300 border-amber-400/30 hover:bg-amber-400/20"
                      : "bg-white/5 text-white/50 border-white/10 hover:text-white"
                  }`}
                  title="Toggle Featured on Home Page"
                >
                  {project.featured ? "★ Featured" : "☆ Set Featured"}
                </button>

                <button
                  onClick={() => openEdit(project)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Edit3 size={12} />
                  <span>Edit</span>
                </button>

                <button
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
                      deleteProject(project.id);
                      showToast(`Project "${project.title}" deleted.`);
                    }
                  }}
                  className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 border border-white/10 transition-colors cursor-pointer"
                  title="Delete Project"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* EDIT / ADD MODAL */}
      {isEditing && (
        <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b0c10] border border-white/20 rounded-2xl p-6 sm:p-7 max-w-xl w-full my-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <h2 className="text-lg font-bold text-white mb-0.5">
              {activeProject.id && activeProject.title ? `Edit: ${activeProject.title}` : "Add New Project"}
            </h2>
            <p className="text-xs text-white/50 mb-5">
              Updates sync live into your portfolio and persist automatically.
            </p>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={activeProject.title || ""}
                    onChange={(e) => setActiveProject({ ...activeProject, title: e.target.value })}
                    placeholder="e.g. Travely Tour Booking"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                    Category
                  </label>
                  <select
                    value={activeProject.category || "Full Stack"}
                    onChange={(e) => setActiveProject({ ...activeProject, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Backend">Backend &amp; APIs</option>
                    <option value="Frontend">Frontend UI</option>
                    <option value="AI Tools">AI Tools</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                  Card Summary (Short pitch) *
                </label>
                <input
                  type="text"
                  required
                  value={activeProject.summary || ""}
                  onChange={(e) => setActiveProject({ ...activeProject, summary: e.target.value })}
                  placeholder="e.g. Production tour booking system with Razorpay live payments..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                  Technologies (Comma Separated)
                </label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="e.g. Java, Spring Boot 3, Hibernate, MySQL, React 19"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none mb-1.5"
                />

                {/* Quick Add Tech Tag Chips */}
                <div className="flex flex-wrap gap-1">
                  <span className="text-[9.5px] font-mono text-white/40 mr-1 pt-0.5">Quick add:</span>
                  {COMMON_TECH_SUGGESTIONS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        const existing = techInput.split(",").map((s) => s.trim()).filter(Boolean);
                        if (!existing.includes(tag)) {
                          const updated = [...existing, tag].join(", ");
                          setTechInput(updated);
                        }
                      }}
                      className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 hover:bg-[#A955F7]/20 hover:text-[#A955F7] text-white/60 border border-white/5 cursor-pointer"
                    >
                      +{tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={activeProject.githubUrl || ""}
                    onChange={(e) => setActiveProject({ ...activeProject, githubUrl: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                    Live URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={activeProject.liveUrl || ""}
                    onChange={(e) => setActiveProject({ ...activeProject, liveUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                  />
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeProject.featured || false}
                    onChange={(e) => setActiveProject({ ...activeProject, featured: e.target.checked })}
                    className="w-4 h-4 accent-[#A955F7] rounded"
                  />
                  <span className="text-xs text-white/80 font-medium">
                    Feature prominently on Portfolio Home Page
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 text-white/70 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#A955F7] hover:bg-[#9333ea] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(169,85,247,0.3)]"
                >
                  {saveSuccess ? (
                    <>
                      <Check size={14} />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <span>Save Project</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PASSKEY CHANGE MODAL */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b0c10] border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative">
            <button
              onClick={() => {
                setIsKeyModalOpen(false);
                setKeyUpdateMsg("");
              }}
              className="absolute top-4 right-4 text-white/40 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <KeyRound size={18} className="text-[#A955F7]" />
              <h2 className="text-base font-bold text-white">Update Master Passkey</h2>
            </div>
            <p className="text-xs text-white/50 mb-4">
              Set a new private passkey to lock and unlock the Admin Console.
            </p>

            <form onSubmit={handleUpdatePasskey} className="space-y-3">
              <div>
                <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                  New Passkey (min 6 characters)
                </label>
                <input
                  type="password"
                  required
                  value={newKeyInput}
                  onChange={(e) => setNewKeyInput(e.target.value)}
                  placeholder="Enter new passkey..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[10.5px] font-mono uppercase text-white/60 mb-1">
                  Confirm New Passkey
                </label>
                <input
                  type="password"
                  required
                  value={confirmKeyInput}
                  onChange={(e) => setConfirmKeyInput(e.target.value)}
                  placeholder="Repeat new passkey..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#A955F7] text-white text-xs outline-none"
                />
              </div>

              {keyUpdateMsg && (
                <div
                  className={`text-xs px-3 py-2 rounded-lg ${
                    keyUpdateMsg.startsWith("Success")
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                      : "text-red-400 bg-red-500/10 border border-red-500/20"
                  }`}
                >
                  {keyUpdateMsg}
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsKeyModalOpen(false);
                    setKeyUpdateMsg("");
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 text-white/70 hover:text-white text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-[#A955F7] hover:bg-[#9333ea] text-white text-xs font-semibold cursor-pointer"
                >
                  Update Key
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
