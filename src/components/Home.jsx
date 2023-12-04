// eslint-disable-next-line
import React, { useState } from 'react';
import './ShippingAddressForm.css'; // Import your CSS file for styling

const ShippingAddressForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
   
  };

  return (
    
    <><div className="shipping-address-container">
      <h2>Shipping Address</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='firstName'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='lastName'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            rows="4"
            cols="5"
            value={formData.address}
            onChange={handleChange}
            placeholder='please enter your address'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder='country'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder='state'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder='city'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip/Postal Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder='zipcode'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder='Enter your mobile Number'
            required />
        </div>
        <div className="form-group">
          <label htmlFor="gstnNumber">GSTN Number</label>
          <input
            type="text"
            id="gstnNumber"
            name="gstnNumber"
            value={formData.gstnNumber}
            onChange={handleChange}
            placeholder='Enter your GSTN Number'
            required />
        </div>
        <button type="submit" className="proceed-to-payment-btn">
          Proceed to Payment(cash On Delivery)
        </button>
      </form>
    </div>
    
    <div class="right">
    <div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" srcset="" />
        <h3>Magic Milan</h3>
        <p>Qty: 1</p>
        <p>Rs. 62000</p>
        <a href="#" class="view-details">View Details</a>
      </div><div class="card">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" srcset="" />
        <h3>Magic Milan</h3>
        <p>Qty: 1</p>
        <p>Rs. 62000</p>
        <a href="http://google.com" class="view-details">View Details</a>
      </div>
      </div></>

  );







};


export default ShippingAddressForm;
