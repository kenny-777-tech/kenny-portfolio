import React from 'react'

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-grid">
          <div className="resume-info-card">
            <div className="resume-header-inline">
              <span className="resume-badge">📄 Professional File</span>
              <h3>Curriculum Vitae</h3>
            </div>
            <p className="resume-pitch">
              Explore my academic background, technical skills, and software development experience. 
              You can download the full PDF resume or view it directly in your browser.
            </p>
            <div className="resume-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <h4>Current Role</h4>
                  <p>Assistant Professor of Computer Science & Engineering</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>M.Tech & B.Tech in Computer Science & Engineering</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💻</span>
                <div>
                  <h4>Key Expertise</h4>
                  <p>AI, Full-Stack Web Apps, and Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-download-card">
            <div className="resume-preview-icon">📂</div>
            <h3 className="download-card-title">Kenny_Resume.pdf</h3>
            <p className="file-info">PDF Format • 145 KB</p>
            <div className="resume-action-buttons">
              <a 
                href="/assets/Kenny_Resume.pdf" 
                download="Kenny_Resume.pdf" 
                className="btn btn-primary btn-resume"
              >
                <span>Download Resume</span>
                <span className="btn-icon">⬇️</span>
              </a>
              <a 
                href="/assets/Kenny_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-resume-view"
              >
                <span>View Full PDF</span>
                <span className="btn-icon">👁️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
