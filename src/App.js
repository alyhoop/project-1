import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';

class App extends Component {
  render () {
    return (
      <div className="landing">
        <h1>I'M WORKINGGGG.</h1>
        <Greet />
      </div>
    );
  }
}

export default App;
