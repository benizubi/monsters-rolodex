import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// using class instead of function to do the same thing.
// classes offers more functionality.
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: ' Zombie'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map()
        }
      </div>
    );
  }
}

export default App;
