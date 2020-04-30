import React from 'react';
import './App.css';
import Timer from './Timer';
import Duration from './Duration';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 1500,
      breakTime: 300
    }

    this.breakTime = 300;
    this.pomodoroStarted = false;
    this.breakStarted = false;
    this.isPaused = false;
    this.audio = new Audio("https://dl.dropbox.com/s/nacdk0xey4io5d8/wink-sound-effect.mp3")
  }

    stopTimer = Timer => {
      clearInterval(timer);
      timer = null;
    }
}
