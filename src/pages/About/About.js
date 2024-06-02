import React from 'react'
import image from "../../assets/about.jpg";

import "./About.css";

function About() {
  return (
    <div className='app__about flex__center app__bg section__padding' id="about">
        <h1 className='headtext__base'>About us</h1>
        <div className="app__about-context">
          <div className="about__context-img">
            <img src={image} alt="restaraunt" />
          </div>
          <div className="about__context-text section__padding">
            <p className='p__base' style={{textTransform: "none", fontWeight: "400"}}>Welcome to La La Island, your cozy local retreat.<br/>We offer a warm atmosphere, perfect for coffee breaks, study sessions, or catching up with friends. <br/>Join us and experience the inviting charm of our community cafe.<br/>We look forward to seeing you soon!</p>
          </div>
        </div>

    </div>
  )
}

export default About