import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// using class instead of function to do the same thing.
// classes offers more functionality.
class App extends Component {
  constructor() {
    super();

    this.state = {
      String: "Hello Beni"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> { } </p>
          <button> Change text </button>
        </header>
      </div>
    );
  }
}

export default App;
