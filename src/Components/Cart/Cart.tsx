import { FC, useContext, useState } from "react";
import { CartContext, CartContextProps } from "../../Context/CartContex";
import "./Cart.css";
import CheckoutModal from "../Checkout/Checkout";
import toast, {Toaster} from 'react-hot-toast';

const Cart: FC = () => {
  const cartContext = useContext<CartContextProps | undefined>(CartContext);

  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({});
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  
  const handleIncrement = (productId: number, productPrice: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  
    if (cartContext) {
      cartContext.addToCart({
        id: productId,
        name: "",
        price: productPrice,
        quantity: 1,
        image: "",
        description: ""
      });
    }
  };
  
  const handleDecrement = (productId: number, productPrice: number) => {
    if (productQuantities[productId] && productQuantities[productId] > 1) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
  
      if (cartContext) {
        cartContext.addToCart({
          id: productId,
          name: "",
          price: productPrice,
          quantity: -1,
          image: "",
          description: ""
        });
      }
    }
  };
  const handleRemove = (productId: number) => {
    if (cartContext) {
      cartContext.removeFromCart(productId);
    }
  };

  const cartCheckboxId: string = cartContext ? cartContext.cartCheckboxId : "";

  const handleClearCart = () => {
    if (cartContext) {
      cartContext.clearCart();
    }
  };


  const handleOpenCheckoutModal = () => {
    setShowCheckoutModal(true);
  };

  const handleCloseCheckoutModal = () => {
    setShowCheckoutModal(false);
  };

  const handleCloseAndShowToast = () => {
    toast.success('Your package is coming!', {
      duration: 3000, // Duración de 3 segundos
    });
  };

  

  return (
    <>
      <label className="cart-buton" htmlFor={cartCheckboxId}></label>
      <input type="text" id={cartCheckboxId} />
      <aside className="cart">
      <h1>Shopping</h1>
        {cartContext?.cart.length === 0 ? (
          <div className="empty-cart-message">Your Cart is Empty</div>
        ) : (
          <ul className="cart-list">
            {cartContext?.cart.map((product) => (
              <li className="cart-element" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <strong>{product.name}</strong> - price: {(product.price) * (productQuantities[product.id] || 1)}€
                </div>
                <footer className="cart-footer">
                  <small>Qty: {productQuantities[product.id] || 1}</small>
                  <button onClick={() => handleIncrement(product.id, product.price)}>+</button>
                  <button onClick={() => handleDecrement(product.id, product.price)}>-</button>
                  <br />
                  <button onClick={() => handleRemove(product.id)}>Remove</button>
                </footer>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-footer-buttons">
        <button className="checkout-btn" onClick={handleOpenCheckoutModal}>Go CheckOut</button>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
        </div>
        <CheckoutModal showModal={showCheckoutModal} handleClose={() => {
        handleCloseCheckoutModal();
        handleCloseAndShowToast(); 
      }} cartProducts={cartContext?.cart || []} productQuantities={productQuantities} />
      </aside>
      <Toaster />
    </>
  );
};
export default Cart;