import React, { Component } from 'react';
import './App.css';
import App from './components/Timer';

class App extends Component {
  render () {
    return (
      <div className="main">
        <h1>POMODORO CLOCK</h1>
        <Timer />
        <TimerControllers />
        <Sound />
      </div>
    );
  }
}

export default App;
