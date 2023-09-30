import { useCart } from "../../Hooks/useCart";
import { WomanProductsArray } from '../../assets/db';

const WomanProductsComponent = () => {
  const { addToCart } = useCart();
    
    const itemProducts = WomanProductsArray.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h1 className='product-title'>{product.name}</h1>
          <h2 className='product-price'>{product.price} €</h2>
          <button className="add-button" onClick={() => addToCart(product)}>
            Add To Cart</button>
        </li>
      ));
    
    return <ul className="products-grid">{itemProducts}</ul>;
  };

export default WomanProductsComponent