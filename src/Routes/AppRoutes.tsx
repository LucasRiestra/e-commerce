import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import WomanProductsComponent from '../Components/products/Woman';
import MenProductsComponent from '../Components/products/Men';
import AccessoriesComponent from '../Components/products/Accessories';
import HomePage from '../Components/Home/Home';
import About from '../Components/About/About';
import Cart from '../Components/Cart/Cart';
import Login from '../Components/Login/Login';
import Search from '../Components/Navbar/Search';
import ProductDetailMen from '../Components/ProducDetails/ProductDetailsMen';
import ProductDetailWoman from '../Components/ProducDetails/ProducDetailsWoman';
import ProductDetailAccesories from '../Components/ProducDetails/ProductDetailsAccesories';

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
        <Route path='/detailMen/:productId' element={<ProductDetailMen />} />
        <Route path='/detailWoman/:productId' element={<ProductDetailWoman />} />
        <Route path='/detailAccesories/:productId' element={<ProductDetailAccesories />} />


      </Routes>
  );
};

export default AppRoutes;
