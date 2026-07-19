import React, { useEffect, useRef } from 'react'

function Hero() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current && window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30
        const y = (e.clientY / window.innerHeight - 0.5) * 30
        glowRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-image">
          <div className="image-frame">
            <img 
              src="/assets/images/kenny-profile.jpg" 
              alt="Kenny - AI Developer & Tech Entrepreneur"
              className="profile-photo"
            />
          </div>
          <div className="image-glow" ref={glowRef}></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm Kenny <span className="wave">👋</span>
          </h1>
          <p className="hero-subtitle">Assistant Professor of CSE | AI Developer | Tech Entrepreneur</p>
          <p className="hero-description">
            I'm an Assistant Professor of Computer Science & Engineering passionate about AI, 
            full-stack development, and building real-world products that blend technology and creativity.
            I also run an online flower business <strong>Dipniz Blooms</strong> 🌸 with my friend Dipika!
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a 
              href="https://dipniz-blooms.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Visit Dipniz Blooms 🌸
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
