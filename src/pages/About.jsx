export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-image">
          <img
            src="/profile.jpg"
            alt="Buddhila Herath"
            className="profile-image"
          />
        </div>
        
        <div className="about-text">
          <p>
            I'm <strong>Buddhila Herath</strong>, a passionate Software Engineering undergraduate at SLIIT with a 
            strong focus on full-stack web and mobile development. Currently pursuing my BSc (Hons) in 
            Information Technology with a specialization in Software Engineering.
          </p>
          
          <p>
            My expertise spans across modern web technologies including <strong>React, Node.js, Spring Boot, 
            and MongoDB</strong>, with hands-on experience in building scalable applications using 
            <strong> microservices architecture</strong>. I have a proven track record of developing 
            production-ready applications like food delivery systems, e-commerce platforms, and real-time 
            safety applications.
          </p>
          
          <p>
            Currently interning at <strong>CodeLantic (Pvt) Ltd</strong>, I'm actively contributing to 
            real-world projects while enhancing my skills in <strong>Agile development, Docker, and cloud 
            technologies</strong>. I'm passionate about creating efficient, user-friendly solutions that 
            solve real-world problems.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
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