import React from 'react'
import './style/Header.css'
import { Sun, Moon } from 'lucide-react'

function Header({ isDark, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-icon">
          <img 
            src="/logo.png" 
            alt="REOs Bikes Logo" 
            className="logo-img"
          />
        </div>

        <a href="/" className="header-title">
          REOs<span>Bikes</span>
        </a>
      </div>

      <div className="header-right">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}

export default Header