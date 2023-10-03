import React from 'react'
import heroImg from "./Assest/w.avif"
import "./heroStyle.css"

const Hero = () => {
  return (
    <div className="home-container">
        <div className="hero-section">
        <img src={heroImg} alt="hero-img"  className="hero-img"/>
    </div>
      <div className="content">
        <h1>Explore Our Stunning Image Gallery</h1>
        <p>Photography is the art of freezing moments in time. Our gallery features photographs that encapsulate the beauty of nature, the emotions of people, and the wonders of the world.</p>
      </div>
    </div>
    
  )
}

export default Hero