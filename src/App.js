import React, { Component } from 'react';
import Header from './Header'
import ExercisePage from './ExercisePage';
import './App.css';

class Main extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <br />
          <br />
          <ExercisePage />
        </div>
    );
  }
}

class App extends Component {
  
  render() {
    return (
      <Main />
    );
  }
}

export default App;
