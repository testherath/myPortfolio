import profile from "../assets/images/profile.png";
export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm <strong>Buddhila Herath</strong>, a dedicated Software Engineering
            undergraduate at <strong>SLIIT</strong>, currently pursuing my BSc (Hons)
            in Information Technology specializing in Software Engineering. I'm
            passionate about <strong>full-stack web and software development </strong>
            and driven by the goal of building clean, scalable, and impactful digital
            solutions that improve everyday experiences.
          </p>

          <p>
            I work extensively with modern technologies such as
            <strong> React, Node.js, Spring Boot, MongoDB, and microservices
              architecture</strong>. My experience includes designing and developing
            production-ready systems including <strong>food delivery platforms</strong>,
            <strong> e-commerce applications</strong>, and
            <strong> real-time safety & tracking solutions</strong>. I enjoy creating
            high-performance applications that combine elegant UI/UX with strong, stable
            engineering.
          </p>

          <p>
            I contribute to real-world commercial projects while sharpening my skills in
            <strong> Agile development, Docker, cloud technologies, CI/CD pipelines,
              and scalable software architecture</strong>. I thrive in collaborative
            environments and love taking ownership of challenges—from understanding user
            needs to delivering reliable features end-to-end.
          </p>

          <p>
            Beyond academics and work, I constantly explore new tools, architectures,
            and industry practices to stay ahead in the fast-evolving tech landscape.
            My goal is to become a well-rounded engineer capable of building
            <strong> enterprise-grade, user-centric applications</strong> that create
            meaningful impact.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
