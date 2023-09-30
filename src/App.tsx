import  { FC } from 'react';
import Navbar from './Components/Navbar/Navbar';
import AppRoutes from './Routes/AppRoutes';
import './components/products/ProductsComponent.css';
import "./Components/Home/Home.css"
import "./Components/About/About.css"
import "./Components/Footer/Footer.css"
import "./index.css"
import { CartProvider } from './Context/CartContex';
import Footer from './Components/Footer/Footer';

const App: FC = () => {
  return (
    <>
    <CartProvider>
    <Navbar />
    <AppRoutes />
    </CartProvider>
    <Footer />
    </>
  );
};

export default App;
