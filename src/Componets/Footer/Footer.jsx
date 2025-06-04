import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
        <div className='arap'>
            <FontAwesomeIcon icon={faCopyright} />
            <p className='P'>All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer
