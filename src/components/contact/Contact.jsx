import React from 'react';
import './contact.css';
import ContactBanner from '../../assets/contactBanner.png';

const Contact = () => {

  const handleChange = e => {
    this.form.validateFields(e.target);
  }

    const contactSubmit = e => {
    e.preventDefault();
    this.form.validateFields();
    }

  return (
    <div id='contact-section' className='container contact-container'>
      <div className='contact-banner'>
        <h3>Your business idea is <span>valuable</span>. We are are to provide you with the right business expertise.</h3>
        <p>On-call assistance in all timezones Projects consulting by experts Detail project estimation</p>
        <img src={ContactBanner} alt='banner-mg'/>
      </div>
      <div className='contact-form'>
        <h1>Have a Query?</h1>
        <h2>Request Free Consultaion</h2>
        <form onSubmit={contactSubmit}>
          <input type="text" name='name' placeholder='Your Full Name' onChange={handleChange} required/>
            <input type="email" name='email' placeholder='Email ID' onChange={handleChange}  required/>
            <div className='phoneNumber-container'>
              <div className='dropDown'>
              <select> 
                <option value="+91">+91</option>
                <option value="+00">+00</option>
                <option value="+55">+55</option>
              </select>
              </div>
              <input type="number" name="number" min="1000000000" max="9999999999" placeholder='Phone Number' required/>
            </div>
            <textarea name='message' rows="3" placeholder='Requirements' required></textarea>
            <label>
              <input type="checkbox" />
              <span></span>
              I accept all the terms and conditions
            </label>
              
            
            <button type='submit' className='button-c'>Submit your free Consultaion</button>
        </form>
      </div>
    </div>
  )
}

export default Contact