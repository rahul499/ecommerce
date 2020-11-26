import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function Shipping(props) {
  

  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  const cart = useSelector(state => state.cart);
  const {shippingAddress} = cart;
  if(!userInfo) {
    props.history.push('/signin');
  }


  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ fullName, address, city, postalCode, country }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form className="shippingform" onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Shipping</h2>
          </li>
          
          <li>
            <label htmlFor="fullname">
              Full Name
          </label>
            <input type="fullName" name="fullName" id="fullName" 
            onChange={(e) => setFullName(e.target.value)} 
            value={fullName} required>
            </input>
          </li>

          <li>
            <label htmlFor="address">
              Address
          </label>
            <input type="text" name="address" id="address" 
            onChange={(e) => setAddress(e.target.value)} 
            value={address} required>
            </input>
          </li>
          <li>
            <label htmlFor="city">
              City
          </label>
            <input type="text" name="city" id="city" 
            onChange={(e) => setCity(e.target.value)} 
            value={city} required>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Postal Code
          </label>
            <input type="text" name="postalCode" id="postalCode"
            maxLength="6" 
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}  required>
            </input>
          </li>
          <li>
            <label htmlFor="country">
              Country
          </label>
            <input type="text" name="country" id="country" 
            onChange={(e) => setCountry(e.target.value)}
            value={country}  required>
            </input>
          </li>


          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default Shipping;