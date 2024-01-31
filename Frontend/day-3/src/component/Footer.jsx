import React from 'react';
import '../assets/css/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <footer className="footer">
      <h3>AgriTech-Agriculture Loan</h3>
      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer_social-icon">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com" className="footer_social-icon">
          <XIcon />
        </a>
        <a href="https://www.instagram.com" className="footer_social-icon">
          <InstagramIcon />
        </a>
      </div>
      <p id='txt'>
        &copy; 2024 Your AgriTech. All rights reserved. | 
        <a href="/privacy-policy" className="footer_link">Privacy Policy</a> | 
        <a href="/terms-of-service" className="footer_link">Terms of Service</a> |
        <a href="/aboutus" className="footer_link">About us</a> |
        <a href="/contactus" className="footer_link">Contact us</a> 
      </p>
    </footer>
  );
};

export default Footer;