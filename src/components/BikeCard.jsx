import React from 'react'
import './style/BikeCard.css'

function BikeCard({ model, version, imageUrl, onSelect }) {
  return (
    <div className="bike-card" onClick={onSelect}>
      <div className="bike-image-wrap">
        <img
          src={imageUrl}
          alt={`${model} ${version}`}
          className="bike-image"
          loading="lazy"
        />
      </div>
      <div className="bike-card-body">
        <h3 className="bike-model">{model}</h3>
        <span className="bike-version">{version}</span>
      </div>
    </div>
  )
}

export default BikeCard
