import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with form submission logic
  };

  return (
    <div className='Contact'>
      <h1 className='high'>Contacts</h1>
      <div className='contant-container'>
        <div className='details'>
          <div className='div1'>
            {/* Social Media Icons */}
            <a href="https://www.instagram.com/theriotslab?igsh=MWxhMnVxeWNmd3NwZw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a className="smw" href="https://mail.google.com/mail/?view=cm&fs=1&to=vomirone@gmail.com&su=Hello&body=Hi,%20I%20wanted%20to%20reach%20out%20to%20you." target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>

            
            <a href="https://www.tiktok.com/@onlystormyclouds?_t=ZM-8wvcwpAMXZg&_r=1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="social-icon" />
            </a>
            <a href="https://wa.link/q1blid" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" />
            </a>
          </div>

          <div className='deta'>
            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className='form-field'>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  placeholder='Your full name'
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className='form-field'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className='form-field'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  placeholder='+254 XXX XXX XXX'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

            

              <div className='form-field'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Tell us about your business needs...'
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type='submit' className='submit-button'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
