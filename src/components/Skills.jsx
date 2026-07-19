import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: '💻 Programming',
      skills: ['Python', 'Java']
    },
    {
      title: '🌐 Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS']
    },
    {
      title: '🗄️ Databases',
      skills: ['MySQL', 'Oracle SQL']
    },
    {
      title: '🛠️ Tools & IDEs',
      skills: ['Streamlit', 'Eclipse IDE', 'Visual Studio', 'Android Studio']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div className="skill-category" key={catIndex}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-pills">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-pill" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
