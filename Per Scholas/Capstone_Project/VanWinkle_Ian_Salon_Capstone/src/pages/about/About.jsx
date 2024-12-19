import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Your Beauty Expert</p>
      </header>

      <section className="about-section">
        <h2>My Journey</h2>
        <p>
          My name is <strong>Bailey Smith</strong>, and I am a passionate beauty 
          professional who has spent years perfecting my craft. I graduated from 
          Empire Beauty School, where I studied from August 2021 to June 2022. 
          During my time there, I learned a vast array of techniques that have 
          shaped me into the stylist I am today.
        </p>
        <p>
          I specialize in a variety of beauty services, including:
        </p>
        <ul>
          <li>Blonding</li>
          <li>Coloring</li>
          <li>Waxing</li>
          <li>Women's Haircuts</li>
          <li>Special Occasion Makeup & Hair</li>
          <li>Hair Styling</li>
        </ul>
      </section>

      <section className="future-plans">
        <h2>Looking Ahead</h2>
        <p>
          I currently work from home 2-3 days a week, offering a comfortable and 
          personalized experience for my clients. In the next year, I plan to 
          transition to a salon space, named <em>--</em>, and am excited to continue 
          my professional journey. I also hope to get certified in extensions and 
          laser hair treatments in the near future.
        </p>
      </section>

      <section className="passion-section">
        <h2>Why I Do What I Do</h2>
        <p>
          My true passion lies in making people feel beautiful and confident in 
          themselves. There's nothing more rewarding than helping my clients look 
          and feel their best. Whether it's a fresh new cut, the perfect color, or 
          special occasion styling, I love seeing the transformation and knowing 
          that I've made a positive impact in someone's life.
        </p>
      </section>
    </div>
  );
}