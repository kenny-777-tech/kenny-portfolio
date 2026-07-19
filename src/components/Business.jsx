import React from 'react'

function Business() {
  const flowers = [
    { emoji: '🌸', className: 'flower-1', delay: '0s' },
    { emoji: '🌸', className: 'flower-2', delay: '0.5s' },
    { emoji: '🌷', className: 'flower-3', delay: '1s' }
  ]

  return (
    <section className="business" id="business">
      <div className="container">
        <div className="business-content">
          <div className="business-text">
            <span className="business-badge">🌺 Co-Founders</span>
            <h2>Kenny & Dipika – Dipniz Blooms</h2>
            <p>
              Dipniz Blooms is our online flower business combining creativity, aesthetics,
              and customer experience. Together with my friend Dipika, we craft beautiful
              floral arrangements for every occasion, bringing nature's beauty to your special moments.
            </p>
            <a 
              href="https://dipniz-blooms.netlify.app" 
              className="btn btn-floral" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Dipniz Blooms Website 🌸
            </a>
          </div>
          <div className="business-image">
            <div className="founders-frame">
              <img 
                src="/assets/images/dipniz-founders.jpg" 
                alt="Kenny and Dipika - Dipniz Blooms Founders"
                className="founders-photo"
              />
            </div>
            {flowers.map((flower, index) => (
              <div 
                className={`flower ${flower.className}`} 
                style={{ animationDelay: flower.delay }} 
                key={index}
              >
                {flower.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Business
