import React from 'react'

import "./Landing.css"
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'

function Landing({setLoaded}) {
  return (
    <div className='app__landing section__padding' id="home">
        <Hero/>
        <Nav setLoaded={setLoaded}/>
        <div className="app__landing-bg"></div>
    </div>
  )
}

export default Landing