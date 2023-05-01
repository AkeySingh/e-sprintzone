import * as React from 'react'
import { Box } from './style.component'
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import './footer.page.css'

const Footer = () => {
  return (
    <Box>
      <div className='footer-parent'>
        <div className='footer-logo'>LOGO</div>
        <div className='parent'>
          <div className='child'>
            <h3>SUPPORT</h3>
            <p className='innerChild'>Delivery</p>
            <p className='innerChild'>Return Policy</p>
            <p className='innerChild'>Contact our Store</p>
          </div>
          <div className='child'>
            <h3>OUR SERVICES</h3>
            <p className='innerChild'>Decathlon for School</p>
            <p className='innerChild'>Decathlon for Gift Card</p>
            <p className='innerChild'>Installation & Assembly Service</p>
            <p className='innerChild'>Decathlon for Sport Club</p>
          </div>
          <div className='child'>
            <h3>ABOUT US</h3>
            <p className='innerChild'>Who we are</p>
            <p className='innerChild'>Careers</p>
            <p className='innerChild'>NewsRoom</p>
            <p className='innerChild'>Made In India</p>
          </div>

          <div className='child'>
            <h3>Follow Us</h3>
            <p className='innerChild'>
              <BsLinkedin /> LinkedIn
            </p>
            <p className='innerChild'>
              <BsInstagram /> Instagram
            </p>
            <p className='innerChild'>
              <BsFacebook /> Facebook
            </p>
            <p className='innerChild'>
              <BsTwitter /> Twitter
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Footer
