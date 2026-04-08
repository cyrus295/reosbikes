import React from 'react'
import './style/BikeDetails.css'
import { ArrowLeft, Calendar, Gauge, Fuel } from 'lucide-react'
import { bikeDetail } from '../data/bikeDetail'

function BikeDetails({ bike, onBack }) {
 
const [bikeId, version] = bike.id.split('-')

const details = bikeDetail.find(
  item => item.id === Number(bikeId) && item.version === version
)
  return (
    <div className="details-container">
      <button onClick={onBack} className="back-button">
        <ArrowLeft size={20} />
        <span>Back to Gallery</span>
      </button>

      <div className="details-content">
        <div className="details-image-wrapper">
          <img 
            src={bike.imageUrl} 
            alt={bike.model} 
            className="details-image"
          />
        </div>

        <div className="details-info">
          <span className="details-badge">{bike.version} Model</span>
          <h1 className="details-title">{bike.model}</h1>

          <p className="details-description">
            {details?.description}
          </p>

          <div className="details-extra">
            <p><Calendar size={16} /> Year : {details?.year}</p>
            <p><Gauge size={16} /> Mileage : {details?.mileage}</p>
            <p><Fuel size={16} /> Fuel : {details?.fuel}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BikeDetails