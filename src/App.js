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
          name: 'Vampire',
          id: 'a'
        },
        {
          name: 'Dracula',
          id: 'c'
        },
        {
          name: 'Zombie ',
          id: 'c'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monsters => (
          <h1 key={monsters.id}> {monsters.name}</h1>)
        )}
      </div>
    );
  }
}

export default App;
