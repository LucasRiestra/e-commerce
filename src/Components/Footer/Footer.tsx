import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="join-us">
          <p>Join Us</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/lacaievintage/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://es-es.facebook.com/lacaievintage/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@lacaievintage" target="_blank">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="terms-policy">
          <p>Terms & Conditions Policy</p>
        </div>
        <div className="copyright">
          <p>© 2023 lacaievintage by lucas riestra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
