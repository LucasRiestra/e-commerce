import React, { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from '../../Context/CartContex';
import "./Checkout.css";

interface CheckoutModalProps {
  showModal: boolean;
  handleClose: () => void;
  cartProducts: Product[]; 
  productQuantities: { [key: number]: number };
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ showModal, handleClose, cartProducts, productQuantities }) => {
  const [subtotal, setSubtotal] = useState<number>(0);
  useEffect(() => {
    const newSubtotal = cartProducts.reduce((acc, product) => {
      return acc + (product.price * (productQuantities[product.id] || 1));
    }, 0);
    setSubtotal(newSubtotal);
  }, [cartProducts, productQuantities]);
  

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ul>
            <h3>Products:</h3>
            {cartProducts.map((product) => (
              <div key={product.id} className="modal-grid product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <strong>{product.name}</strong>
                </div>
                <div className="product-details">
                  <span>{(product.price) * (productQuantities[product.id] || 1)}€</span>
                </div>
              </div>
            ))}
            <hr />
            <div className="subtotal">
              <h3>SubTotal:</h3>
              <span>{subtotal}€</span>
            </div>
            <hr />
            <div className='shipping-type'>
              <div><h6>Shiping 24h<span>4 €</span><input type="checkbox" /></h6></div>
              <div><h6>Picked up at the store (Almeria)<span></span><input type="checkbox" /></h6></div>
              <div className='modal-addres'>
               <button className='Buttons-modal'>Address</button>
              </div>
            </div>

          </ul>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <button className="Buttons-modal">finalize purchase</button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
