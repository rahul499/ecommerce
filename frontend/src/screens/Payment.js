
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function Payment(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.shippingAddress.address) {
    props.history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    props.history.push('/placeorderscreen');
  };

  return (
    <div>
      <div className="back-to-result" style={{padding:'10px'}}>
      <Link to="/shipping" >
        <center>Back to Shipping Address</center>
      </Link>
      </div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment Method</h2>
            </li>

            <li>
              <div>
              <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="debitcard"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paymentMethod">Debit Card</label><br /><br />
                
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="creditcard"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paymentMethod">Credit Card</label><br /><br />

                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paymentMethod">Paypal</label><br /><br />


              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default Payment;
