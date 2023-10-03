import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import './Checkout.css';

export interface AddressModalProps {
  show: boolean;
  handleClose: () => void;
}

export const AddressModal: React.FC<AddressModalProps> = ({ show, handleClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className='data-grid'>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Address and Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formAddress'>
                  <Form.Label>Street</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Street' />
                </Form.Group>

                <Form.Group controlId='formCity'>
                  <Form.Label>City</Form.Label>
                  <Form.Control type='text' placeholder='Enter your City' />
                </Form.Group>

                <Form.Group controlId='formCountry'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Country' />
                </Form.Group>

                <Form.Group controlId='formPostalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Postal Code' />
                </Form.Group>
              </Form>
            </div>
            <div className='col-md-6'>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formFirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your First Name' />
                </Form.Group>

                <Form.Group controlId='formLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Last Name' />
                </Form.Group>

                <Form.Group controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter your Email' />
                </Form.Group>

                <Form.Group controlId='formPhone'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Phone Number' />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Body>
          <h6>Additional Information (Optional)</h6>
          <Form.Group controlId='TextArea'>
                  <Form.Control type='text-area' placeholder='' />
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className='Buttons-modal-pay'>Save Data</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressModal;
