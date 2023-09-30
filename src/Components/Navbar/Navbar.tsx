import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';


const Navbar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <header className='header'>
      <h1>La CaieVintage</h1>
      <nav>
        <ul>
        <input
          type="text"
          placeholder="serch product..."
          className='serch-input'
        />
          <button type="submit" className='serch-btn'>Go</button>
          <li onClick={scrollToTop}><Link to="/">Home</Link></li>
          <li onClick={scrollToTop}><Link to="/MenShop">Men Shop</Link></li>
          <li onClick={scrollToTop}><Link to="/WomanShop">Woman Shop</Link></li>
          <li onClick={scrollToTop}><Link to="/Accessories">Accessories</Link></li>
          <li onClick={scrollToTop}><Link to="/About">About</Link></li>
          <li onClick={scrollToTop}><Link to="/Login"><FaUserAlt /></Link></li>
          <li onClick={scrollToTop}><Link to="/Cart"><FaShoppingCart /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
