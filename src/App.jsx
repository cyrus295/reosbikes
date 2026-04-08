import React, { useState, useEffect } from 'react'
import BikeGrid from './components/BikeGrid'
import BikeDetails from './components/BikeDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [selectedBike, setSelectedBike] = useState(null)

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setSelectedBike(null)
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="app-layout">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="main-content">
        {selectedBike ? (
          <BikeDetails bike={selectedBike} onBack={handleBack} />
        ) : (
          <BikeGrid onBikeSelect={handleBikeSelect} />
        )}
      </main>
      <Footer />
     
    </div>
  )
}

export default App