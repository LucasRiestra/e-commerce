import  { FC } from 'react';
import Navbar from './Components/Navbar/Navbar';
import AppRoutes from './Routes/AppRoutes';
import './Components/products/ProductsComponent.css';
import "./Components/Home/Home.css"
import "./Components/About/About.css"
import "./Components/Footer/Footer.css"
import "./Components/ProducDetails/ProductDetails.css"
import "./index.css"
import { CartProvider } from './Context/CartContex';
import Footer from './Components/Footer/Footer';
import Users from './Components/Login/Users';

const App: FC = () => {
  return (
    <>
    <CartProvider>
    <Navbar />
    <AppRoutes />
    <Footer />
    <Users />
    </CartProvider>
    </>
  );
};

export default App;
