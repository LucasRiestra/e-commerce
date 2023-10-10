import React, { useEffect, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from '../../Context/CartContex';
import "./Checkout.css";
import { FaGooglePay, FaPaypal } from 'react-icons/fa';
import { AddressModal, FormInputs } from './AddressModal';
import toast, {Toaster} from 'react-hot-toast';




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
  
  const [shippingSelected, setShippingSelected] = useState(false);

  const handleShippingSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingSelected(e.target.checked);
  };

  const [showAddressModal, setShowAddressModal] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);

  const [addressFormData, setAddressFormData] = useState<FormInputs>({
    Street: '',
    City: '',
    Country: '',
    PostalCode: 0,
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: 0,
  });

  const handleAddressModal = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  
    if (loggedInUser) {
      setAddressFormData({
        ...addressFormData,
        Street: loggedInUser.Street || '',
        City: loggedInUser.City || '',
        Country: loggedInUser.Country || '',
        PostalCode: loggedInUser.PostalCode || 0,
        FirstName: loggedInUser.FirstName || '',
        LastName: loggedInUser.LastName || '',
        Email: loggedInUser.Email || '',
        Phone: loggedInUser.Phone || 0,
      });
    }
  
    setShowAddressModal(!showAddressModal);
    setIsChecked(true);
  };

  
const isAddressDataValid = (formData: FormInputs): boolean => {
  return (
    formData.Street !== '' &&
    formData.City !== '' &&
    formData.Country !== '' &&
    formData.PostalCode !== 0 &&
    formData.FirstName !== '' &&
    formData.LastName !== '' &&
    formData.Email !== '' &&
    formData.Phone !== 0
  );
};

const handleFinalizePurchase = () => {
  if (!isAddressDataValid(addressFormData)) {
    toast.error('Shipping information is missing or incomplete', {
      duration: 3000,
    });
  } else {
    handleClose(); 
    toast.success('Your package is on its way!', {
      duration: 3000,
    });
  }
};


const handleCheckboxChange = () => {
  setShippingSelected(prevShippingSelected => !prevShippingSelected);
};


  return (
    <Modal show={showModal}  size="lg" dialogClassName="modal-lg">
      <Modal.Header closeButton onClick={handleClose} >
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
                  <span className='products-price'>{(product.price) * (productQuantities[product.id] || 1)}€</span>
                </div>
              </div>
            ))}
            <hr />
            <div className="subtotal">
              <h3>SubTotal:</h3>
              <span className='subtotal-price'>{subtotal}€</span>
            </div>
            <hr />
            <div className='shipping-type'>
                <h6>Shiping 24h</h6>
                <span className='shipping-price'>4€ 
                <input 
                className='input' 
                type="checkbox"
                onChange={handleShippingSelection}
                checked={shippingSelected}

                />
                </span>
            </div>
              <div className='in-store'>
                <h6>Picked up at the store (Almeria)</h6>
                <span className="in-store-span"><input className='input' type="checkbox" /></span>
              </div>
              <div className='modal-address'>
               <button className='Buttons-modal-address' onClick={handleAddressModal} >shipping information</button><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
               <AddressModal show={showAddressModal}
                handleClose={handleAddressModal}
                addressFormData={addressFormData}  
                setAddressFormData={setAddressFormData}   />
              </div>
              <hr />
              <div className="subtotal">
              <h3>Total:</h3>
              <span className='subtotal-price'>{subtotal + (shippingSelected ? 4 : 0)}€</span>
            </div>
            <hr />
            <div className='pay-finalize'>
            <button className="Buttons-modal-pay">Pay with Google <FaGooglePay size={50} style={{ marginLeft: '0.9px' }}/></button>
            <button className="Buttons-modal-finalize">Pay with Paypal <FaPaypal size={30} style={{ marginLeft: '0.9px' }}/></button>
            </div>
          </ul>
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <button className="Buttons-modal-finalize" onClick={handleFinalizePurchase} >Finalize Purchase</button>
      </Modal.Footer>
      <Toaster />
    </Modal>
  );
};

export default CheckoutModal;
