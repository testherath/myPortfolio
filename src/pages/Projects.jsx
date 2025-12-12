import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "BiteUp - Food Order & Delivery",
    period: "Feb 2025 - July 2025",
    description: "Full-featured food delivery application with Docker, Microservices, and Spring Boot backend.",
    technologies: ["Spring Boot", "React", "Docker", "Microservices", "Tailwind CSS"],
    github: "https://github.com/akilaManu-MaHiTo/biteup-gateway"
  },
  {
    title: "RideOn - Mobility Safety App",
    period: "July 2025 - Nov 2025",
    description: "Real-time ride tracking with safety alerts, off-route detection, and JWT authentication.",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "WebSocket"],
    github: "https://github.com/SupunLiyanage88/RideOn"
  },
  {
    title: "GeoGlobe - Country Explorer",
    period: "Feb 2025 - July 2025",
    description: "React-based application to explore countries with real-time weather, news, and maps integration.",
    technologies: ["React", "REST API", "Clerk Auth", "React Query", "MUI"],
    github: "https://github.com/gitbuddhila/geoglobe"
  },
  {
    title: "Swarna Bridalware Shop",
    period: "July 2024 - Nov 2024",
    description: "E-commerce platform for bridal sarees and accessories with intuitive UI and responsive design.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/gitbuddhila/Bridal_Ware_project"
  },
  {
    title: "MindMeld (Android App)",
    period: "July 2024 - Nov 2024",
    description: "Android app transforming thoughts into interactive mind maps with sleep tracking and collaboration.",
    technologies: ["Kotlin", "JavaScript", "Android Studio", "Shared Preferences"],
    github: "https://github.com/gitbuddhila/mindmeld"
  },
  {
    title: "Finance Tracker System",
    period: "Feb 2025 - July 2025",
    description: "Comprehensive financial management system with secure RESTful API and JWT authentication.",
    technologies: ["Spring Boot", "MongoDB", "REST API", "JWT", "React"],
    github: "https://github.com/gitbuddhila/Spring-FinanceTracker"
  },
  {
    title: "Melobea - Musical Store",
    period: "Feb 2023 - July 2023",
    description: "E-commerce platform for musical instruments and pre-owned musical items, featuring a clean, intuitive UI and fully responsive design.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/gitbuddhila/Melobea"
  },
  {
    title: "Eco Waste System",
    period: "Jan 2024 - Apr 2024",
    description: "Smart eco-waste management system. Enables to view waste collections, schedule pickups, track recycling activities interact with sustainability features.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/akilaManu-MaHiTo/eco-waste-client"
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <div className="project-body">
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}