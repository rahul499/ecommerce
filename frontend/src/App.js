import React from 'react';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';
import CartScreen from './screens/CartScreen';
import Shipping from './screens/Shipping';
import UserProfile from './screens/UserProfile';
import Payment from './screens/Payment';
import PlaceOrder from './screens/PlaceOrder';
import CardPayment from './screens/CardPayment';
import Success from './screens/Success';
import DebitCardPayment from './screens/DebitCardPayment';
import PaypalPayment from './screens/PaypalPayment';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Header from './screens/Header';



function App() {

  return (
  <BrowserRouter>
  <div className="grid-container">

    <Header/>

    <main className="main">
      <div className="content">
      <Route path="/products/:id" component={Products} />
      <Route path="/creditcard" component={CardPayment} />
      <Route path="/debitcard" component={DebitCardPayment} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/paypalpayment" component={PaypalPayment} />
      <Route path="/placeorderscreen" component={PlaceOrder} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/shipping" component={Shipping} />
      <Route path="/success" component={Success} />
      <Route path="/payment" component={Payment} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={SignIn} />
      <Route path="/" exact={true} component={Home} />
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>

   );
}

export default App;
