import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null
    };
  }

  generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    this.setState({ randomNumber: number });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h1>Random Number Generator</h1>

          <button onClick={this.generateRandomNumber}>
            Generate Random Number
          </button>

          <div className="result">
            {this.state.randomNumber === null ? (
              <p className="message">No number generated yet</p>
            ) : (
              <h2 className="number">{this.state.randomNumber}</h2>
            )}
          </div>
        </div>
      </div>
    );
