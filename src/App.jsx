// src/App.jsx
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollPerformance from "./components/ScrollPerformance";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Debounced scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          // Update active nav link or other scroll-based features
          ticking = false;
        });
      }
    };

    // Throttle scroll events
    const throttleScroll = () => {
      let lastScrollTime = 0;
      const throttleDelay = 100; // ms
      
      return () => {
        const now = Date.now();
        if (now - lastScrollTime >= throttleDelay) {
          handleScroll();
          lastScrollTime = now;
        }
      };
    };

    const throttledScroll = throttleScroll();
    window.addEventListener('scroll', throttledScroll, { passive: true });

    setIsLoaded(true);

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#0d1224',
        color: '#7dd3fc'
      }}>
        <div style={{
          textAlign: 'center',
          animation: 'pulse 2s infinite'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            border: '4px solid rgba(125, 211, 252, 0.3)',
            borderTop: '4px solid #7dd3fc',
            animation: 'spin 1s linear infinite'
          }} />
          <p>Loading Portfolio...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
        </div>
      </div>
    );
  }

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

        <ScrollPerformance>
          <div className="canvas-card">
            <Hero />
          </div>
        </ScrollPerformance>
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