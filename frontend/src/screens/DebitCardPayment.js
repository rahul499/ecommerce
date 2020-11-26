
import React from 'react';
import Cards from 'react-credit-cards';
import { Link } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';

export default class DebitCardPayment extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  handleSubmit = () => {
    this.props.history.push('/success')
  }

  render() {
    return (
    <div className="PaymentForm" style={{padding: '1.2rem'}}>
    <div className="back-to-result">
      <Link to="/payment">
        <center>Back to Payment Selection</center>
      </Link>
    </div>
      <div id="PaymentForm"  >
        <div className="cardheaderdiv">
            <p className="cardheader">Pay through Debit Card</p>
        </div>
        
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />

        <form onSubmit={this.handleSubmit}>
        <center><br />
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            required 
            maxlength="16"
            className="cardinput"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br /> <br />
          <input
            type="text"
            name="name"
            placeholder="Name of Card Holder"
            className="cardinput"
            required 
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br /> <br />
          <input
            type="tel"
            name="expiry"
            required 
            maxlength="4"
            placeholder="Expiry Date"
            className="cardinput"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br /> <br />
          <input
            type="tel"
            name="cvc"
            maxlength="3"
            required 
            placeholder="CVV Number"
            className="cardinput"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br /> <br />
          <button className="cardbutton">Pay</button>
          </center><br />
        </form>
        </div>
      </div>
    );
  }
}