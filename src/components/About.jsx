import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <div className="education-item">
              <span className="degree">M.Tech Computer Science & Engineering</span>
              <span className="year">2025–2026 (Expected)</span>
            </div>
            <div className="education-item">
              <span className="degree">B.Tech Computer Science & Engineering</span>
              <span className="year">2024</span>
            </div>
          </div>
          <div className="about-card">
            <div className="card-icon">💡</div>
            <h3>Interests</h3>
            <ul className="interests-list">
              <li>Artificial Intelligence & LLM Applications</li>
              <li>Full-Stack Web Development</li>
              <li>Startup Projects & Entrepreneurship</li>
              <li>Building Real-World Products</li>
            </ul>
          </div>
          <div className="about-card">
            <div className="card-icon">🌍</div>
            <h3>Languages</h3>
            <div className="languages-container">
              <span className="language-tag">English</span>
              <span className="language-tag">Malayalam</span>
              <span className="language-tag">Hindi</span>
              <span className="language-tag">Kannada</span>
              <span className="language-tag">Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
