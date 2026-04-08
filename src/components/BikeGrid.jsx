import React, { useState } from 'react'
import { bikes } from '../data/bikes'
import BikeCard from './BikeCard'
import './style/BikeGrid.css'

function BikeGrid({ onBikeSelect }) {

  const allBikes = bikes.flatMap(bike =>
    bike.versions.map(version => ({
      id: `${bike.id}-${version}`,
      model: bike.model,
      version,
      imageUrl: bike.imageUrl,
      category: bike.category
    }))
  )

  const groupedBikes = bikes.reduce((acc, bike) => {
    if (!bike.category) return acc
    const category = bike.category
    if (!acc[category]) acc[category] = []
    const versions = bike.versions.map(version => ({
      id: `${bike.id}-${version}`,
      model: bike.model,
      version,
      imageUrl: bike.imageUrl
    }))
    acc[category].push(...versions)
    return acc
  }, {})

  const [expandedCategories, setExpandedCategories] = useState({})
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const VISIBLE_LIMIT = 4

  return (
    <div className="bike-grid-section">

      

      {/* ALL BIKES */}
      <div className="bike-grid-container">
        <div className="section-header">
          <h2 className="section-heading">All Bikes</h2>
          <span className="section-badge">{allBikes.length} models</span>
        </div>
        <div className="bike-grid">
          {(allExpanded ? allBikes : allBikes.slice(0, 8)).map((bike) => (
            <BikeCard
              key={bike.id}
              model={bike.model}
              version={bike.version}
              imageUrl={bike.imageUrl}
              onSelect={() => onBikeSelect(bike)}
            />
          ))}
        </div>
        {allBikes.length > 8 && (
          <button
            onClick={() => setAllExpanded(prev => !prev)}
            className="view-more-btn"
          >
            {allExpanded ? '▲ Show Less' : `▼ View All ${allBikes.length} Bikes`}
          </button>
        )}
      </div>

      {/* CATEGORY SECTIONS */}
      {Object.entries(groupedBikes).map(([category, bikes]) => {
        const isExpanded = expandedCategories[category] || false
        const bikesToShow = isExpanded ? bikes : bikes.slice(0, VISIBLE_LIMIT)
        const showButton = bikes.length > VISIBLE_LIMIT

        return (
          <div key={category} className="bike-grid-container">
            <div className="section-header">
              <h2 className="section-heading">{category}</h2>
              <span className="section-badge">{bikes.length} models</span>
            </div>

            <div className="bike-grid">
              {bikesToShow.map((bike) => (
                <BikeCard
                  key={bike.id}
                  model={bike.model}
                  version={bike.version}
                  imageUrl={bike.imageUrl}
                  onSelect={() => onBikeSelect(bike)}
                />
              ))}
            </div>

            {showButton && (
              <button
                onClick={() => toggleCategory(category)}
                className="view-more-btn"
              >
                {isExpanded ? '▲ Show Less' : '▼ View More'}
              </button>
            )}
          </div>
        )
      })}

    </div>
  )
}

export default BikeGrid
