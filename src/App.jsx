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

  clearNumber = () => {
    this.setState({ randomNumber: null });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h1>Random Number Generator</h1>

          <button onClick={this.generateRandomNumber}>
            Generate Random Number
          </button>
          

          {this.state.randomNumber !== null && (
            <button onClick={this.clearNumber} className="remove-button">
              Remove Number
            </button>
          )}

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
  }
}

export default App

