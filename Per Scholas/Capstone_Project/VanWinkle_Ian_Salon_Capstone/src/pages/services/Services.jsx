import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './services.css'

export default function Services() {
  const [prices, setPrices] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/api/prices')
      .then(response => {
        // console.log(response.data)
        setPrices(response.data)
      })
      .catch(error => {
        console.error('Error fetching prices', error)
      })
  }, [])

  return (
    <div className="services-page">
      <header className="hero-section">
        <h1>My Services</h1>
      </header>

      <section className="services-list">
        <h2>Pricing & Services</h2>
        <div className="services">
          {prices.length > 0 ? (
            <ul>
              <li><strong>Full Highlight:</strong> ${prices[0].fullHighlight}</li>
              <li><strong>Partial Highlight:</strong> ${prices[0].partialHighlight}</li>
              <li><strong>Color:</strong> ${prices[0].color}</li>
              <li><strong>Cut:</strong> ${prices[0].cut}</li>
              <li><strong>Tone:</strong> ${prices[0].tone}</li>
              <li><strong>Wax:</strong> ${prices[0].wax}</li>
              <li><strong>Style:</strong> ${prices[0].style}</li>
              <li><strong>Makeup:</strong> ${prices[0].makeup}</li>
            </ul>
          ) : (
            <p>Loading prices...</p>
          )}
        </div>
      </section>
    </div>
  )
}