import { useCart } from "../../Hooks/useCart";
import { WomanProductsArray } from '../../assets/db';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const WomanProductsComponent = () => {
  const { addToCart } = useCart();

  const notify = () => toast("added to cart");
    
    const itemProducts = WomanProductsArray.map((product) => (
        <li key={product.id}>
          <Link to={`/detailWoman/${product.id}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          <h1 className='product-title'>{product.name}</h1>
          <h2 className='product-price'>{product.price} €</h2>
          <button className="add-button" onClick={() => { notify(); addToCart(product); }}>
          Add To Cart
          </button>
          <Toaster />
        </li>
      ));
    
    return <ul className="products-grid">{itemProducts}</ul>;
  };

export default WomanProductsComponent