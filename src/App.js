import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        );
  }
}

        export default App;
