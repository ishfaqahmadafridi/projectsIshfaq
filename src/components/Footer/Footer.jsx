import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div id='Footer' className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia ut unde repellendus sunt eum exercitationem quaerat facere quibusdam minus?</p>
          <div className="footer-soical-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Policy Privacy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2> GET IN TOUCH</h2>
          <ul>
            <li>+92 3341923293</li>
            <li>contact@tomota.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 Tomota. All rights reserved.</p>
    </div>
  )
}

export default Footer
