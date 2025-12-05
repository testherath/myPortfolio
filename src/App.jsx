import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="header glass-header">
        <div className="logo">Buddhila Herath</div>
        <Nav />
      </header>

      {/* HERO SECTION */}
      <main className="main">
        <div className="hero-text fade-in">
          <h1 className="h-title">Hi — I'm <span className="accent">Buddhila Herath</span>, a Software Engineer.</h1>
          <p className="h-sub">I build modern web apps, mobile applications, and interactive 3D experiences using React, Node.js, Java, & Three.js.</p>
          <p className="muted">Scroll to explore more.</p>
        </div>

        <div className="canvas-card">
          <Hero />
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <Skills />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark-section">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}