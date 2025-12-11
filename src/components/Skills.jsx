import { FaReact, FaNodeJs, FaJava, FaGithub, FaDocker, FaFigma } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiMongodb, SiSpringboot, SiTypescript, SiMysql, SiTailwindcss, SiSass, SiJira, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js", level: "Advanced" },
    { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
    { icon: <SiSpringboot />, name: "Spring Boot", level: "Intermediate" },
    { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate" },
    { icon: <FaJava />, name: "Java", level: "Intermediate" },
    { icon: <FaPhp />, name: "PHP", level: "Intermediate" },
    { icon: <SiMongodb />, name: "MongoDB", level: "Intermediate" },
    { icon: <SiMysql />, name: "MySQL", level: "Intermediate" },
    { icon: <FaDocker />, name: "Docker", level: "Intermediate" },
    { icon: <SiSass />, name: "Sass", level: "Intermediate" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
    { icon: <FaGithub />, name: "Git/GitHub", level: "Advanced" },
    { icon: <SiJira />, name: "Jira", level: "Advanced" },
    { icon: <SiPostman />, name: "Postman", level: "Advanced" },
    { icon: <FaFigma />, name: "Figma", level: "Basic" },
  ];

  return (
    <div className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((s, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <span className="skill-level">{s.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}