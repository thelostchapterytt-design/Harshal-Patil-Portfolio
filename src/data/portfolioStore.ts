import { useState, useEffect } from "react";
import { PROJECTS, Project } from "./portfolioData";

const STORAGE_KEY = "hp_portfolio_custom_projects_v1";

// Helper to get initial projects from localStorage or default
export function getStoredProjects(): Project[] {
  if (typeof window === "undefined") return PROJECTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load projects from storage:", e);
  }
  return PROJECTS;
}

// Helper to save projects to localStorage and dispatch event
export function saveStoredProjects(projects: Project[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    window.dispatchEvent(new CustomEvent("portfolio_projects_updated"));
  } catch (e) {
    console.error("Failed to persist projects:", e);
  }
}

// React hook to use dynamic projects throughout the app
export function usePortfolioProjects() {
  const [projects, setProjects] = useState<Project[]>(() => getStoredProjects());

  useEffect(() => {
    const handler = () => {
      setProjects(getStoredProjects());
    };
    window.addEventListener("portfolio_projects_updated", handler);
    return () => window.removeEventListener("portfolio_projects_updated", handler);
  }, []);

  const addOrUpdateProject = (project: Project) => {
    const current = getStoredProjects();
    const index = current.findIndex((p) => p.id === project.id);
    let updated: Project[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = project;
    } else {
      updated = [project, ...current];
    }
    saveStoredProjects(updated);
    setProjects(updated);
  };

  const deleteProject = (id: string) => {
    const current = getStoredProjects();
    const updated = current.filter((p) => p.id !== id);
    saveStoredProjects(updated);
    setProjects(updated);
  };

  const resetProjects = () => {
    saveStoredProjects(PROJECTS);
    setProjects(PROJECTS);
  };

  return {
    projects,
    addOrUpdateProject,
    deleteProject,
    resetProjects,
  };
}
