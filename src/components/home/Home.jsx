import React from 'react'
import './home.css';
import HomeImg from '../../assets/home-img.png';

const Home = () => {
  return (
    <section id='home'>
      <div className='container  home-container'>
        <div className='home-data'>
          <h1>We Build</h1>
          <h1>WEB & MOBILE APPS that users loves!</h1>
          <p>The team of LOGO provides the best services out there for web and mobile applications to deliver you the best projects</p>
          <button className='button-c'>Let's build your Idea</button>
        </div>
        <div className='home-img'>
          <img src={HomeImg} alt='home-img'/>
        </div>
      </div>
    </section>
  )
}

export default Home