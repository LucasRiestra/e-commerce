import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import WomanProductsComponent from '../Components/Products/Woman';
import MenProductsComponent from '../Components/Products/Men';
import AccessoriesComponent from '../Components/Products/Accessories';
import HomePage from '../Components/Home/Home';
import About from '../Components/About/About';
import Cart from '../Components/Cart/Cart';
import Login from '../Components/Login/Login';
import Search from '../Components/Navbar/Search';

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/MenShop" element={<MenProductsComponent />} />
        <Route path="/WomanShop" element={<WomanProductsComponent />} />
        <Route path="/Accessories" element={<AccessoriesComponent />} />
        <Route path="/About" element={<About />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/search/:searchWord' element={<Search />} />
      </Routes>
  );
};

export default AppRoutes;
