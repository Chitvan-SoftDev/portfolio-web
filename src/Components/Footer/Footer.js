import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container text-center '>

        <div className='row p-4 align-middle'>

          <div className='col-md-4 col-12 demographic-details p-4'>
            <a href='mailto:singhalchitvan5@gmail.com'>singhalchitvan5@gmail.com</a>
            <br />
            <a href="tel:+919718886394">+91-9718886394</a>

          </div>
          <div className='col-md-4 col-12 p-4' style={{fontSize:'4rem', fontFamily: 'orpheus-pro'}}>
            <a href='#' className='text-decoration-none'>
              CS
              </a>
          </div>
          <div className='col-md-4 col-12 social-links d-flex justify-content-center p-4'>
            <a href='https://in.linkedin.com/in/chitvan-singhal-26550b198' target='_blank'>

            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            {/* <a href=''>

            <FontAwesomeIcon icon={faInstagram} />
            </a> */}
            <a href='https://github.com/Chitvan-SoftDev' target='_blank'>

            <FontAwesomeIcon icon={faGithub} />
            </a>


          </div>
        </div>
        <div className='row p-5 align-middle'>

          <div className='col-12'>
            <small className='copyright-text'>© {currentYear} Chitvan Singhal. All rights reserved.</small>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
