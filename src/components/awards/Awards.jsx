import React from 'react'
import './awards.css';
import Clutch from '../../assets/clutch.png';
import Iso from '../../assets/iso.png';
import Award from '../../assets/awards.png';

const Awards = () => {
  return (
    <div id='awards-section'>
      <div className='container awards-container'>
        <div className='awards-1'>
          <div className='award'>
            <img src={Clutch} alt='clutch'/>
            <h3>The most promising mobile apps solution providers globally</h3>
            <p>We have been recognized as a market leader globally, post a rigorous evaluation of factors presence & client experience</p>
          </div> 
          <div className='award'>
            <img src={Iso} alt='iso'/>
            <h3>The most promising mobile apps solution providers globally</h3>
            <p>We have been recognized as a market leader globally, post a rigorous evaluation of factors presence & client experience</p>
          </div>
        </div>
        <div className='awards-title'>
          <img src={Award} alt='award'/>
          <h1>Awards <br />&<br /> Recognition</h1>
        </div>
        <div className='awards-2'>
        <div className='award'>
            <img src={Iso} alt='iso'/>
            <h3>The most promising mobile apps solution providers globally</h3>
            <p>We have been recognized as a market leader globally, post a rigorous evaluation of factors presence & client experience</p>
          </div>
          <div className='award'>
            <img src={Clutch} alt='clutch'/>
            <h3>The most promising mobile apps solution providers globally</h3>
            <p>We have been recognized as a market leader globally, post a rigorous evaluation of factors presence & client experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards