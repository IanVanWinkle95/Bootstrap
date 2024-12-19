import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

fetch('http://localhost:5000/api/prices')

import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
// import image4 from '../images/image4.jpeg'
// import image5 from '../images/image5.jpeg'
// import image6 from '../images/image6.jpeg'
// import image7 from '../images/image7.jpeg'
// import image8 from '../images/image8.jpeg'
// import image9 from '../images/image9.jpeg'
// import image10 from '../images/image10.jpeg'
// import image11 from '../images/image11.jpeg'
// import image12 from '../images/image12.jpeg'
// import image13 from '../images/image13.jpeg'
// import image14 from '../images/image14.jpeg'
// import image15 from '../images/image15.jpeg'
// import image16 from '../images/image16.jpeg'

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero-section">
        <h1>BeautyByyBai</h1>
        <Link to="/services" className="cta-button">Explore my Services</Link>
      </header>

      <section className="about-section">
        <h2>Welcome to BeautyByyBai</h2>
        <p>My name is Bailey Smith, and I attended cosmetology school from August 2021 to June 2022 
          at Empire Beauty School. During my time there, I learned so many amazing things that have 
          shaped me into the professional I am today. I specialize in blonding, coloring, waxing, 
          women’s cuts, special occasion makeup and hair, as well as styling hair. I currently work 
          from home 2-3 days a week, and within the next year, I plan to transition to a salon 
          called Bombshell Studio. I am also considering getting certified in extensions and laser hair 
          treatments in the future. My passion is helping people feel beautiful and empowering them 
          to be their best selves.</p>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img src={image1} alt="Hair Styling Example 1" />
          </div>
          <div className="gallery-item">
            <img src={image2} alt="Hair Styling Example 2" />
          </div>
          <div className="gallery-item">
            <img src={image3} alt="Hair Styling Example 3" />
          </div>
          
        </div>
      </section>

      <section className="contact-section">
        <h2>Ready to Book?</h2>
        <p>Visit my <Link to="/contact">Contact page</Link> to book your appointment and find more information about our location.</p>
      </section>
    </div>
  );
}
