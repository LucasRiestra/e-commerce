import { useEffect, useState } from 'react';
import { WomanProductsArray} from '../../assets/db';
import { useCart } from '../../Hooks/useCart';
import { Link, useParams } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetailWoman = () => {
  const { productId } = useParams(); 
  const { addToCart } = useCart();
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  const productIdAsNumber = productId ? parseInt(productId, 10) : undefined;
  const product = WomanProductsArray.find((product) => product.id === productIdAsNumber);

  useEffect(() => {
    const getRandomIndices = (max: number, count: number): number[] => {
      const indices: number[] = [];
      while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indices.includes(randomIndex) && randomIndex !== productIdAsNumber) {
          indices.push(randomIndex);
        }
      }
      return indices;
    };
  
    const randomIndices = getRandomIndices(WomanProductsArray.length, 3);
    const similarProducts = randomIndices.map(index => WomanProductsArray[index]);
    setSimilarProducts(similarProducts);
  }, [productIdAsNumber]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="detail-grid">
      <div className='column1'>
      <img className="detail-img" src={product.image} alt={product.name} />
      </div>
      <div className='column2'>
      <h1 className="detail-title">{product.name}</h1>
      <h2 className="detail-price">{product.price}€</h2>
      <p className="detail-description">{product.description}</p>
      <hr />
      <h2>Similar Products</h2>
          <div className="similar-products-grid">
          {similarProducts.map((similarProduct, index) => (
            <div className="similar-product" key={index}>
              <Link to={`/detailWoman/${similarProduct.id}`}>
              <img className="img-similar" src={similarProduct.image} alt={similarProduct.name} />
              </Link>
              <p className="similar-title">{similarProduct.name}</p>
            </div>
          ))}
          </div>
      </div>
      <button className="detail-add-button" onClick={() => addToCart(product)}>
        Add to cart
      </button>
      <Link to="/WomanShop">
      <button className="detail-back-button" onClick={handleScrollToTop}>
        Back to store
      </button>
      </Link>
    </div>
  );
};

export default ProductDetailWoman;
