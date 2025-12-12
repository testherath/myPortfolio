// src/App.jsx
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
    <>
      {/* NAVBAR - Outside app container for true sticky behavior */}
      <header className="header glass-header">
        <div className="header-content">
          <div className="logo">Buddhila Herath</div>
          <Nav />
        </div>
      </header>

      <div className="app">

        {/* HERO SECTION */}
        <main className="main">
          {/* Animated Background Elements */}
          <div className="hero-bg-gradient"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="hero-content">
            <div className="hero-text fade-in">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Available for opportunities
              </div>
              <h1 className="h-title">
                Hi, I'm <span className="accent gradient-text">Buddhila Herath</span>
              </h1>
              <h2 className="h-subtitle">Full-Stack Software Engineer</h2>
              <p className="h-sub">
                I craft modern web applications, mobile experiences, and interactive 3D worlds
                using React, Node.js, Java, and Three.js. Let's build something amazing together.
              </p>

              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                  <span>View My Work</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline">
                  <span>Get In Touch</span>
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>

            <div className="hero-image-card">
              <img
                src="/src/assets/images/mine.jpg"
                alt="Buddhila Herath"
                className="hero-profile-image"
              />
              <div className="image-glow"></div>
            </div>
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
      <ScrollToTop />
    </>
  );
}