import { FaReact, FaNodeJs, FaJava, FaGithub, FaDocker, FaFigma } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiSpringboot, SiThreedotjs, SiTypescript, SiMysql, SiTailwindcss } from "react-icons/si";
import { TbCube } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js", level: "Advanced" },
    { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
    { icon: <SiSpringboot />, name: "Spring Boot", level: "Intermediate" },
    { icon: <SiJavascript />, name: "JavaScript", level: "Advanced" },
    { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate" },
    { icon: <FaJava />, name: "Java", level: "Intermediate" },
    { icon: <SiThreedotjs />, name: "Three.js", level: "Intermediate" },
    { icon: <SiMongodb />, name: "MongoDB", level: "Intermediate" },
    { icon: <SiMysql />, name: "MySQL", level: "Intermediate" },
    { icon: <FaDocker />, name: "Docker", level: "Intermediate" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
    { icon: <FaGithub />, name: "Git/GitHub", level: "Advanced" },
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