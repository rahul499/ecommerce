
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';


export default function PaypalPayment(props) {
  const cart = useSelector(state => state.cart);
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  if(!userInfo) {
    props.history.push('/signin');
  }

  const paypal = useRef();

  const toPrice = (num) => Number(num.toFixed(2)); 
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 500 ? toPrice(0) : toPrice(60);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  
  const client = {
    sandbox:    'YOUR-SANDBOX-APP-ID',
    production: 'YOUR-PRODUCTION-APP-ID',
}   

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    //
  }
  
  {useEffect(() => {
   window.paypal.Buttons({
     createOrder: (data, actions,err) => {
         return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                description: "Your Order",
                amount: {
                    currency_code: "INR",
                    value: cart.totalPrice.toFixed(2)
                  } 
                }
              ]
         })
     },
     onApprove: async (data, actions) => {
         const order = await actions.order.capture();
         console.log(order);
         props.history.push('/success')
     },
     onError: (err) => {
         console.log(err);
     }
   }).render(paypal.current)
  }, []) 
}





  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price} = Rs.{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Product's Price</div>
                  <div>Rs. {cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>Rs. {cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>Rs. {cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs. {cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <div ref={paypal}></div>
              </li>
              
            </ul>
          </div>
        </div>

      </div>
    </div>

    
  );
}