import { AccessoriesArray } from '../../assets/db';
import { useCart } from "../../Hooks/useCart";

const AccessoriesComponent = () => {
    const { addToCart } = useCart();
    

    const itemProducts = AccessoriesArray.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <h1 className='product-title'>{product.name}</h1>
          <h2 className='product-price'>{product.price}€</h2>
          <button className="add-button" onClick={() => addToCart(product)}>
            Add To Cart</button>
        </li>
      ));
    return <ul className="products-grid">{itemProducts}</ul>;
  };

export default AccessoriesComponent