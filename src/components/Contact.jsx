import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+94 70 456 1240",
      link: "tel:+94704561240"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "buddhilalakshan12@gmail.com",
      link: "mailto:buddhilalakshan12@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/buddhilaherath",
      link: "https://linkedin.com/in/buddhilaherath"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/gitbuddhila",
      link: "https://github.com/gitbuddhila"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Sri Lanka",
      link: null
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in collaborating or have a project in mind? Feel free to reach out!
        </p>
        
        {contactInfo.map((item, index) => (
          <div className="contact-item" key={index}>
            <div className="contact-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {item.value}
                </a>
              ) : (
                <p>{item.value}</p>
              )}
            </div>
          </div>
        ))}
        
        <div className="social-links">
          <a href="https://github.com/gitbuddhila" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/buddhilaherath" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}