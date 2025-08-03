import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container text-center '>

        <div className='row p-4 align-middle'>

          <div className='col-4 demographic-details'>
            <a href='mailto:singhalchitvan5@gmail.com'>singhalchitvan5@gmail.com</a>
            <br />
            <a href="tel:+919718886394">+91-9718886394</a>

          </div>
          <div className='col-4' style={{fontSize:'4rem', fontFamily: 'orpheus-pro'}}>
            CS
          </div>
          <div className='col-4 social-links'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <div className='row p-5 align-middle'>

          <div className='col-12'>
            <small className='copyright-text'>© 2025 Chitvan Singhal. All rights reserved.</small>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
