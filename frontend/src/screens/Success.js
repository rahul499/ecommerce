
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Success = (props) => {
  
  const cart = useSelector((state) => state.cart);

  const toPrice = (num) => Number(num.toFixed(2)); 
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 500 ? toPrice(0) : toPrice(60);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const successHandler = () => {
    props.history.push('/')
  }
  
    
  return (
    <div className="successform">
       <form onSubmit={successHandler}>
          <ul className="success-form-container">
            <li>
            <center>
            <img src="https://th.bing.com/th?q=Tick+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" 
             alt="" className="successtick" />
            </center>
               <h2 className="successheader">
                    Payment Success 
               </h2>
               <p className="successbody">
                    Your Payment of Rs. {cart.totalPrice} was successfully completed.
                </p>
            </li>
            <li>
                <button
                type="submit" className="button primary successbutton">
                    Continue Shopping
                </button>
            </li>
          </ul>
        </form>
    </div>
    );        
}

export default Success;

