import { FaReact, FaNodeJs, FaJava, FaGithub, FaDocker, FaFigma } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiMongodb, SiSpringboot, SiTypescript, SiMysql, SiTailwindcss, SiSass, SiJira, SiPostman, SiDocker, SiRedux, SiMui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js", level: "Advanced" },
    { icon: <FaNodeJs />, name: "Node.js", level: "Advanced" },
    { icon: <SiSpringboot />, name: "Spring Boot", level: "Intermediate" },
    { icon: <TbBrandReactNative />, name: "React Native", level: "Intermediate" },
    { icon: <FaJava />, name: "Java", level: "Intermediate" },
    { icon: <FaPhp />, name: "PHP", level: "Intermediate" },
    { icon: <SiTypescript />, name: "TypeScript", level: "Intermediate" },
    { icon: <SiRedux />, name: "Redux", level: "Advanced" },
    { icon: <SiDocker />, name: "Docker", level: "Intermediate" },
    { icon: <SiMysql />, name: "MySQL", level: "Advanced" },
    { icon: <SiMongodb />, name: "MongoDB", level: "Advanced" },
    { icon: <SiSass />, name: "Sass", level: "Intermediate" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
    { icon: <SiMui />, name: "Material UI", level: "Intermediate" },
    { icon: <FaGithub />, name: "Git/GitHub", level: "Advanced" },
    { icon: <SiPostman />, name: "Postman", level: "Advanced" },
    { icon: <SiJira />, name: "Jira", level: "Advanced" },
    { icon: <FaFigma />, name: "Figma", level: "Intermediate" },

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