import React from 'react'
import './footer.css';
import Logo from '../../assets/logo.png'
import { FaDribbble } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer-section'>
    <div className='container footer-container'>
      <div className='footer-menu'>
        <div className='footer-logo'>
          <div>
            <img src={Logo} alt='logo'/>
          </div>
          <div className='logo-content'>
            <h1>LOGO<span>®</span></h1>
            <h2>TECHNOLOGIES</h2>
          </div>
        </div>
        <div className='menu-options'>
          <div className='menu-option'>
            <h3>STAFF AUGMENTATION</h3>
            <p><a href='#footer-section'>Hire App Developers</a></p>
            <p><a href='#footer-section'>Hire Web Developers</a></p>
            <p><a href='#footer-section'>Hire Full Stack Developers</a></p>
            <p><a href='#footer-section'>Hire JS Developers</a></p>
          </div>
          <div className='menu-option'>
            <h3>WHO WE ARE</h3>
            <p><a href='#footer-section'>About Us</a></p>
            <p><a href='#footer-section'>Founder</a></p>
            <p><a href='#footer-section'>Testimonials</a></p>
            <p><a href='#footer-section'>CareersHIRING</a></p>
            <p><a href='#footer-section'>FAQ's</a></p>
            <p><a href='#footer-section'>Contact Us</a></p>
          </div>
          <div className='menu-option'>
            <h3>DEDICATED HIRING</h3>
            <p><a href='#footer-section'><span>Looking for hire for long<br /> term or full time<br /> assignment</span></a></p>
          </div>
        </div>
      </div>
      <div className='seperator-line'></div>
      <div className='footer-links'>
        <div className='footer-copyright'>
          <h3>© Copyright:2022 Logo Technologies /All Rights Reserved</h3>
        </div>
        <div className='footer-site-links'>
        <p><a href='#footer-section'>Site Map</a></p>
        <p><a href='#footer-section'>Terms of Use</a></p>
        <p><a href='#footer-section'>Privacy Policy</a></p>
        </div>
        <div className='footer-social-links'>
          <a href='#footer-section' ><FaFacebookF /></a>
          <a href='#footer-section' ><FaInstagram /></a>
          <a href='#footer-section' ><FaLinkedinIn /></a>
          <a href='#footer-section' ><FaDribbble /></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer