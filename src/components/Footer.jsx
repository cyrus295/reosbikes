import React from 'react'
import './style/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
        
            <span className="footer-brand-name">REOs<span>Bikes</span></span>
          </div>
          <p className="footer-tagline">
            Your premier destination for exploring motorcycle models and specs. Discover your next ride.
          </p>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-bottom-text">© {new Date().getFullYear()} REOsBikes. All rights reserved.</p>
    </footer>
  )
}

export default Footer
