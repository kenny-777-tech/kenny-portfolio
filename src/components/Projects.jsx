import React from 'react'

function Projects() {
  const projects = [
    {
      icon: '🩺',
      title: 'AI Doctor with Voice & Vision',
      description: 'AI-powered medical assistant with voice control and computer vision capabilities for health diagnostics.',
      tags: ['Python', 'AI/ML', 'Voice Control'],
      btnText: 'View Details',
      link: '#',
      featured: false
    },
    {
      icon: '💬',
      title: 'Conversational Chatbot',
      description: 'LLM-based intelligent chatbot built with Streamlit featuring natural language understanding.',
      tags: ['Python', 'LLMs', 'Streamlit'],
      btnText: 'View Details',
      link: '#',
      featured: false
    },
    {
      icon: '🔍',
      title: 'DeepFake Detection',
      description: 'Deep learning model to detect manipulated media and synthetic faces using neural networks.',
      tags: ['Python', 'Deep Learning', 'CNN'],
      btnText: 'View Details',
      link: '#',
      featured: false
    },
    {
      icon: '🏫',
      title: 'College Management System',
      description: 'Comprehensive system for managing student records, courses, and administrative tasks.',
      tags: ['Java', 'MySQL', 'Web'],
      btnText: 'View Details',
      link: '#',
      featured: false
    },
    {
      icon: '🗳️',
      title: 'E-Voting Android App',
      description: 'Secure electronic voting application for Android with authentication and result tracking.',
      tags: ['Android', 'Java', 'Firebase'],
      btnText: 'View Details',
      link: '#',
      featured: false
    },
    {
      icon: '🤖',
      title: 'Final Year AI Project',
      description: 'Advanced AI research project currently in development - stay tuned for updates!',
      tags: ['AI/ML', 'Research', 'Innovation'],
      btnText: 'Coming Soon',
      link: '#',
      featured: true,
      badge: '🚀 Ongoing'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${project.featured ? 'featured' : ''}`} 
              key={index}
            >
              {project.featured && project.badge && (
                <div className="project-badge">{project.badge}</div>
              )}
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-btn">
                  {project.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
