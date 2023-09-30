import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WomanProductsComponent from '../Components/products/Woman';
import MenProductsComponent from '../Components/products/Men';
import AccessoriesComponent from '../Components/products/Accessories';
import HomePage from '../Components/Home/Home';
import About from '../Components/About/About';
import Cart from '../Components/Cart/Cart';
import Login from '../Components/Login/Login';

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
      </Routes>
  );
};

export default AppRoutes;
