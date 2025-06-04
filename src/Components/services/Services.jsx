import React from 'react'
import "./services.css"

const services = () => {
  return (
    <div>
        <div className='services'>
          <div className="services-title">
            <h1>My Services</h1>

            <div className="services-tab">
              <div className="ser">
                <h2 className='sevrices-hearder'>Web design</h2>
                <p>Building responsive websites with React, Next.js, and modern CSS.</p>
              </div>

              <div className="ser">
              <h2 className='sevrices-hearder'>Hosting & Deployment</h2>
              <p>Deploying projects to reliable hosting.</p>
              </div>

              <div className="ser">
              <h2 className='sevrices-hearder'>UI/UX Implementation</h2>
              <p>Turning Figma or Adobe XD designs into pixel-perfect, functional code.</p>
              </div>
              
              <div className="ser">
              <h2 className='sevrices-hearder'>Performance Optimization</h2>
              <p>Speeding up load times, lazy-loading components, and optimizing Lighthouse scores.</p>
              </div>

              <div className="ser">
              <h2 className='sevrices-hearder'>API Integration</h2>
              <p>Efficient backend communication using REST or GraphQL.</p>
              </div>

              <div className="ser">
              <h2 className='sevrices-hearder'>SEO optimization</h2>
              <p>Efficient backend communication using REST or GraphQL.</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default services