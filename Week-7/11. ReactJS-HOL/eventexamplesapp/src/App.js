import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      amount: '',
      currency: ''
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  sayHello = () => {
    console.log("Hello, welcome to React events!");
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayMessage = (msg) => {
    alert("Message: " + msg);
  };

  handlePress = () => {
    alert("I was clicked");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    const rates = {
      euro: 90,
      usd: 83,
      yen: 0.6
    };

    const lowerCurrency = currency.toLowerCase();
    const rate = rates[lowerCurrency];

    if (!rate) {
      alert("Unsupported currency. Please enter 'euro', 'usd', or 'yen'.");
      return;
    }

    const rupees = parseFloat(amount);
    if (!isNaN(rupees)) {
      const converted = (rupees / rate).toFixed(2);
      alert(`Converting to ${currency} Amount is ${converted}`);
    } else {
      alert("Please enter a valid number.");
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div>{this.state.counter}</div>
        <button onClick={this.handleIncrement}>Increment</button><br /><br />
        <button onClick={this.handleDecrement}>Decrement</button><br /><br />
        <button onClick={() => this.sayMessage("welcome")}>Say welcome</button><br /><br />
        <button onClick={this.handlePress}>Click on me</button>

        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label><br />
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          /><br /><br />

          <label>Currency:</label><br />
          <input
            type="text"
            name="currency"
            value={this.state.currency}
            onChange={this.handleChange}
          /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
