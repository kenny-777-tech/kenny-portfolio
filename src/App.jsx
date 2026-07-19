import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Business from './components/Business'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // 1. Console Easter Egg
    console.log(`
%c👋 Hello there, fellow developer!
%cLooking for the code? Let's connect!
%c💼 LinkedIn | 💻 GitHub | 📧 Email

%c— Kenny
`,
      'color: #9d4edd; font-size: 18px; font-weight: bold;',
      'color: #e0aaff; font-size: 14px;',
      'color: #c77dff; font-size: 12px;',
      'color: #7b2cbf; font-size: 14px; font-style: italic;'
    );

    // 2. Scroll Reveal Animation using Intersection Observer
    const revealElements = document.querySelectorAll(
      '.about-card, .skill-category, .timeline-item, .project-card, .contact-link, .resume-info-card, .resume-download-card'
    );
    
    // Add reveal class initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const siblings = entry.target.parentElement?.children;
          if (siblings) {
            Array.from(siblings).forEach((sibling, index) => {
              if (sibling.classList.contains('reveal')) {
                sibling.style.transitionDelay = `${index * 0.1}s`;
              }
            });
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Skill Pills Animation
    const skillPills = document.querySelectorAll('.skill-pill');
    const skillsSection = document.getElementById('skills');

    // Set initial states for skill pills
    skillPills.forEach(pill => {
      pill.style.opacity = '0';
      pill.style.transform = 'translateY(20px)';
      pill.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillPills.forEach((pill, index) => {
            setTimeout(() => {
              pill.style.opacity = '1';
              pill.style.transform = 'translateY(0)';
            }, index * 50);
          });
        }
      });
    }, { threshold: 0.3 });

    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }

    // Cleanup observers on unmount
    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
      if (skillsSection) {
        skillsObserver.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Resume />
      <Projects />
      <Business />
      <Contact />
      <Footer />
    </>
  )
}

export default App
