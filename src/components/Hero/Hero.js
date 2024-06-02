import React from 'react'
import coffee from "../../assets/logo.png";

import "./Hero.css";

function Hero() {
  return (
    <div className='app__hero'>
      <div className="app__hero-brand">
        <div className="app__hero-logo">
          <img src={coffee} alt="app logo" />
        </div>
      </div>
      <div className="app__hero-text">
        <p className='p__base'>A cup of coffee & a croissant,<br/>what can be better?</p>
      </div>
    </div>
  )
}

export default Hero