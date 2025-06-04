import React from 'react';
import './Hero.css'
import profile_img from '../../assets/Profile.jpg';
import resumeFile from '../../assets/lianecv.docx';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Liane_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='Hero'>
      <img className='Profile' src={profile_img} alt="Profile" width="250" />
      <h1 className='Heroh1'>Hello, I'm <span>Liane</span></h1>
      <p>A frontend developer from Nairobi, Kenya.</p>
      <div className='Hero-action'>
        <a 
          href="https://www.linkedin.com/in/your-linkedin-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className='hero-connect'
        >
          Connect
        </a>
        <div className='hero-resume' onClick={handleDownloadResume}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;