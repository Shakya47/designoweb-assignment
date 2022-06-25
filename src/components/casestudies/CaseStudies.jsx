/* eslint-disable */ 
import React from 'react'
import './caseStudies.css';
import CarouselImg from '../../assets/carouselImg.png'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CaseStudies = () => {
  return (
    <div id='caseStudy-section'>
      <div className='container caseStudy-container'>
        <div className='container-title'>
          <h3>Repository of our Work</h3>
          <h1>We Help to Enhance your Business</h1>
        </div>
        <Carousel controls={false}>
        <Carousel.Item>
          <div className='carousel-content'>
            <h3>Pets Care</h3>
            <h5>South Africa</h5>
            <p>Get easy and quick services for your pet just by sitting at your home. Take care of the well being and the fun activities of your pet by a gew clicks away.</p>
            <button className='button-c'>View Website</button>
          </div>
          <div className='carousel-image'>  
            <img src={CarouselImg} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-content'>
            <h3>Pets Care 1</h3>
            <h5>India</h5>
            <p>Get easy and quick services for your pet just by sitting at your home. Take care of the well being and the fun activities of your pet by a gew clicks away.</p>
            <button className='button-c'>View Website</button>
          </div>
          <div className='carousel-image'>  
            <img src={CarouselImg} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel-content'>
            <h3>Pets Care 2</h3>
            <h5>Spain</h5>
            <p>Get easy and quick services for your pet just by sitting at your home. Take care of the well being and the fun activities of your pet by a gew clicks away.</p>
            <button className='button-c'>View Website</button>
          </div>
          <div className='carousel-image'>  
            <img src={CarouselImg} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className='caseStudy-button'>
        <button className='button-c'>Explore more Case Studies</button>
      </div>
      </div>
    </div>
  )
}

export default CaseStudies