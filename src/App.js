import React, { Component } from 'react';
import './App.css';
import ExercisePage from './ExercisePage';
import Header from './Header';
import TemperatureConverter from './TemperatureConverter';
import ComponentContainer from './ComponentContainer';

class Main extends Component {

  render() {

    const components = [
      <TemperatureConverter />,
      <ExercisePage />
    ]

    return (
      <div className="App">
        <Header />
        <ComponentContainer headingTitle='Temperature Converter'>
          {components[0]}
        </ComponentContainer>
        <ComponentContainer headingTitle='User Management'>
          {components[1]}
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
