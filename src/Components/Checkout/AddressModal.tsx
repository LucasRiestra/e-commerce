import React, { useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import './Checkout.css';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface AddressModalProps {
  show: boolean;
  handleClose: () => void;
}

interface FormInputs {
  Street: string;
  City: string
  Country: string;
  PostalCode: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: number;
}

export const AddressModal: React.FC<AddressModalProps> = ({ show, handleClose }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
      if (!data.Street) {
        return;
      }
      if (!data.City) {
        return;
      }
      if (!data.Country) {
        return;
      }
      if (!data.PostalCode) {
        return;
      }
      if (!data.FirstName) {
        return;
      }
      if (!data.LastName) {
        return;
      }
      if (!data.Email) {
        return;
      }
      if (!data.Phone) {
        return;
      }
  };

  const formData = watch(); 
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  console.log(formData)

  return (
    <div className='data-grid'>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Address and Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formAddress'>
                  <Form.Label>Street</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Street' 
                  {...register("Street",{required:true, minLength: 3, maxLength:50 })}/>
                    {errors.Street?.type === 'required' && <p style={{ color: 'red' }}>Please enter the street.</p>}
                    {errors.Street?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.Street?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                </Form.Group>
                <Form.Group controlId='formCity'>
                  <Form.Label>City</Form.Label>
                  <Form.Control type='text' placeholder='Enter your City'
                   {...register("City",{required:true, minLength: 3, maxLength:20, pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/})}/>
                    {errors.City?.type === 'required' && <p style={{ color: 'red' }}>Please enter the city.</p>}
                    {errors.City?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.City?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                    {errors.City?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only letters.</p>}
                </Form.Group>

                <Form.Group controlId='formCountry'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Country'
                   {...register("Country",{required:true, minLength: 3, maxLength:20, pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/})}/>
                    {errors.Country?.type === 'required' && <p style={{ color: 'red' }}>Please enter the country.</p>}
                    {errors.Country?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.Country?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                    {errors.Country?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only letters.</p>}
                </Form.Group>

                <Form.Group controlId='formPostalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type='string' placeholder='Enter your Postal Code'
                   {...register("PostalCode",{required:true, minLength: 3, maxLength:20, pattern: /^[0-9]+$/})}/>
                   {errors.PostalCode?.type === 'required' && <p style={{ color: 'red' }}>Please enter the postal code.</p>}
                    {errors.PostalCode?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.PostalCode?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 20 characters allowed.</p>}
                    {errors.PostalCode?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only numeric characters.</p>}
                </Form.Group>
              </Form>
            </div>
            <div className='col-md-6'>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formFirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your First Name'
                   {...register("FirstName",{required:true, minLength: 3, maxLength:20, pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/})}/>
                    {errors.FirstName?.type === 'required' && <p style={{ color: 'red' }}>Please enter the first name.</p>}
                    {errors.FirstName?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.FirstName?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                    {errors.FirstName?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only letters.</p>}
                </Form.Group>

                <Form.Group controlId='formLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Last Name'
                   {...register("LastName",{required:true, minLength: 3, maxLength:20, pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/})}/>
                    {errors.LastName?.type === 'required' && <p style={{ color: 'red' }}>Please enter the last name.</p>}
                    {errors.LastName?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.LastName?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                    {errors.LastName?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only letters.</p>}
                </Form.Group>

                <Form.Group controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter your Email' 
                   {...register("Email",{required:true, minLength: 3, maxLength:30})}/>
                    {errors.Email?.type === 'required' && <p style={{ color: 'red' }}>Please enter the e-mail.</p>}
                    {errors.Email?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.Email?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 30 characters allowed.</p>}
                </Form.Group>

                <Form.Group controlId='formPhone'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type='string' placeholder='Enter your Phone Number' 
                   {...register("Phone",{required:true, minLength: 3, maxLength:10, pattern: /^[0-9]+$/})}/>
                   {errors.Phone?.type === 'required' && <p style={{ color: 'red' }}>Please enter the phone.</p>}
                    {errors.Phone?.type === 'minLength' && <p style={{ color: 'red' }}>At least 3 characters required.</p>}
                    {errors.Phone?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum 10 characters allowed.</p>}
                    {errors.Phone?.type === 'pattern' && <p style={{ color: 'red' }}>Please enter only numeric characters.</p>}
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
        <button
    type='submit'
    className='Buttons-modal-pay'
    onClick={() => {
      const hasErrors = !!Object.keys(errors).length;
      if (hasErrors) {
        return;
      }
      handleSubmit(onSubmit)();
      handleClose();
      }}>
    Save Data
  </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressModal;
