import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    
    <div className="flex items-center gap-5">
      
      <a href="https://www.linkedin.com/in/deanna-constans/" 
       target="_blank"
       rel="noopener noreferrer"
        className="portfolioIconStyle">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/" 
       target="_blank"
       rel="noopener noreferrer"
      className="portfolioIconStyle">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/"
       target="_blank"
       rel="noopener noreferrer" 
      className="portfolioIconStyle">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcon;
