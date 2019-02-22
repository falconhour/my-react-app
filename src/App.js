import React, { Component } from 'react';
import './App.css';
import ExercisePage from './ExercisePage';
import Header from './Header';
import TemperatureConverter from './TemperatureConverter';
import ComponentContainer from './ComponentContainer';

class Main extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ComponentContainer headingTitle='Temperature Converter'>
          <TemperatureConverter />
        </ComponentContainer>
        <ComponentContainer headingTitle='User Management'>
          <ExercisePage />
        </ComponentContainer>
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
