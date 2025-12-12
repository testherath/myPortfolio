import { FaBriefcase, FaGraduationCap, FaCertificate, FaUniversity } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "Trainee Software Engineer",
      company: "CodeLantic (Pvt) Ltd",
      period: "Feb 2025 - Present",
      description: "Collaborated with cross-functional teams in Agile environment to design, develop, and maintain applications. Troubleshooting to ensure high-quality, scalable, and reliable software solutions."
    },
    {
      icon: <FaGraduationCap />,
      title: "B.Sc. (Hons) in Information Technology",
      company: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 - Present",
      description: "Specializing in Software Engineering."
    },
    {
      icon: <FaUniversity />,
      title: "G.C.E Advanced Level",
      company: "Dharmaraja College, Kandy",
      period: "2019 - 2022",
    },
    {
      icon: <FaCertificate />,
      title: "French Language Proficiency",
      company: "Alliance de Française, Sri Lanka",
      period: "2019 - 2022",
      description: "Completed A1, A2, and B1 levels"
    }
  ];

  return (
    <div className="experience">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company} • <span className="period">{exp.period}</span></p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}