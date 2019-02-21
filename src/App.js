import React, { Component } from 'react';
import Header from './Header'
import ExercisePage from './ExercisePage';
import './App.css';
import TemperatureConverter from './TemperatureConverter';

class Main extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ExercisePage heading='Exercise'/>
        <hr />
        <TemperatureConverter heading='Temperature Converter'/>
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
