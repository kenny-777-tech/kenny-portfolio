import React from 'react'

function Experience() {
  const experiences = [
    {
      role: 'Assistant Professor of Computer Science & Engineering',
      company: 'Academic Institution',
      details: [
        'Teach undergraduate and postgraduate courses in Computer Science and Engineering.',
        'Mentor students in final year capstone projects on AI/ML and full-stack software development.'
      ]
    },
    {
      role: 'AI / Software Intern',
      company: 'Ember Quest Technology',
      details: [
        'Built LLM-based conversational chatbot using Streamlit',
        'Integrated backend AI logic with responsive UI'
      ]
    },
    {
      role: 'Java Developer Intern',
      company: 'Rooman Technologies',
      details: [
        'Developed Java + MySQL web applications',
        'Team collaboration improving engagement by 20%'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Karunadu Technologies Pvt Ltd',
      details: [
        'Worked with ASP.NET, C#, SQL Server',
        'Improved system efficiency by 15%'
      ]
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <ul className="timeline-details">
                  {exp.details.map((detail, detIndex) => (
                    <li key={detIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
