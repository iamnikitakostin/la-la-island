import React from 'react'

import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="app__findUs section__padding" id="contact">
      <h1 className='headtext__base'>Contact Us</h1>
      <div className="app__findUs-container">
        <div className="app__findUs-info">
          <div className='findUs__location'>
            <h2 className='p__base' style={{fontFamily: "var(--font-base)", fontWeight: "600"}}>Address</h2>
            <p className='p__alt' style={{fontWeight: "200"}}>2951 W Broadway<br/>Vancouver, BC</p>
          </div>
          <div className='findUs__hours'>
            <h2 className='p__base' style={{fontFamily: "var(--font-base)", fontWeight: "600"}}>Open Hours</h2>
            <ul>
              <li className='p__alt' style={{fontWeight: "200", textTransform: "none"}}>Mon - Sun: 8 a.m. – 6 p.m.</li>
            </ul>
          </div>
          <div className="findUs__contacts">
          <h2 className='p__base' style={{fontFamily: "var(--font-base)", fontWeight: "600"}}>Call Us</h2>
            <p className='p__alt' style={{fontWeight: "200"}}>+1 (604) 423-5811</p>
          </div>
          <div className='horizontal__divider'/>
          <div className='findUs__identity-social'>
            {/* <a href='https://www.instagram.com/yah_yah_yaramen/' target='_blank' rel="noreferrer"><div aria-label='instagram'><BsInstagram size="1.5rem" color='#aa2fb7'/></div></a>
            <a href='https://www.facebook.com/richmondyahyahya/' target='_blank' rel="noreferrer"><div aria-label='facebook'><BsFacebook size="1.5rem" color='#0765ff'/></div></a>
            <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' target='_blank' rel="noreferrer"><div aria-label='doordash'><SiDoordash size="1.5rem" color='#eb1600'/></div></a>
            <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' target='_blank' rel="noreferrer"><div aria-label='fantuan'><TbCircleLetterF size="1.5rem" color='#15c2c2'/></div></a> */}
          </div>
        </div>
        <div className="app__findUs-identity">
          <div className="identity-logo">
            {/* <img src={images.logo} alt="logo" /> */}
          </div>
          <div className='identity-map'>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.6386351707306!2d-123.1740380235121!3d49.26429487139004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486736253d8951d%3A0x919eb0dc8147b132!2sLa%20La%20Island!5e0!3m2!1sen!2sca!4v1717347655390!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          <div className='app__developer' style={{marginTop: "1rem"}}>
            <p className='p__alt' style={{fontWeight: "200"}}>Developed by <a href='https://nikitakostin.com' target='_blank' rel="noreferrer" style={{textDecoration: "underline", fontWeight: "200"}}>Nikita Kostin</a></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs