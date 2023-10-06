import React, { useEffect } from 'react';
import { useCart } from "../../Hooks/useCart";
import { MenProductsArray, WomanProductsArray, AccessoriesArray } from '../../assets/db';
import { Link, useParams } from 'react-router-dom';

const Search: React.FC = () => {
  const { addToCart } = useCart();
  const { searchWord } = useParams<{ searchWord?: string }>();

  const allProducts = [...MenProductsArray, ...WomanProductsArray, ...AccessoriesArray];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes((searchWord || '').toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemProducts = filteredProducts.map((product) => (
    <li key={product.id}>
      <Link to={`/detailMen/${product.id}`}>
      <img src={product.image} alt={product.name} />
      </Link>
      
      <h1 className='product-title'>{product.name}</h1>
      <h2 className='product-price'>{product.price}€</h2>
      <button className="add-button" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </li>
  ));

  return (
    <div>
      <h2>Products matching: {searchWord}</h2>
      <ul className="products-grid">{itemProducts}</ul>
    </div>
  );
};

export default Search;
