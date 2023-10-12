import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaShoppingCart, FaBars } from 'react-icons/fa';
import './NavbarResponsive.css';

const Navbar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [searchWord, setSearchWord] = useState('');
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 600);
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchWord}`);
    setSearchWord('');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setShowMenuIcon(!showMenuIcon);
  };

  const handleCloseAside = () => {
    setShowMenuIcon(false);
  };

  const MenuContent = () => (
    <ul>
      <li onClick={scrollToTop}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/MenShop">Men Shop</Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/WomanShop">Woman Shop</Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/Accessories">Accessories</Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/About">About</Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/Login">
          <FaUserAlt />
        </Link>
      </li>
      <li onClick={scrollToTop}>
        <Link to="/Cart">
          <FaShoppingCart />
        </Link>
      </li>
      {isResponsive && (
        <button className="close-aside" onClick={handleCloseAside}>X</button>
    )}
    </ul>
  );

  return (
    <div className="container">
      {isResponsive && (
        <aside className={`menu-aside ${showMenuIcon ? 'show' : ''}`}>
          <MenuContent />
          
        </aside>
      )}
      <header className="header">
      
        <h1 onClick={scrollToTop}><Link to="/">La CaieVintage</Link></h1>
        <div className="head-btns">
          <input
            type="text"
            placeholder="search product..."
            className="search-input"
            onChange={handleSearchChange}
            value={searchWord}
          />
          <button type="button" className="search-btn" onClick={handleSearch}>
            Go
          </button>
          {isResponsive && (
            <button className="menu-icon" onClick={handleMenuToggle}>
              <FaBars />
            </button>
          )}
        </div>
        <nav className={isResponsive && showMenuIcon ? 'navbar show' : 'navbar'}>
          {!isResponsive && <MenuContent />}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
