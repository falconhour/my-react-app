import React, { Component } from 'react';
import './App.css';
import UserManagement from './UserManagement';
import Header from './Header';
import TemperatureConverter from './TemperatureConverter';
import ComponentContainer from './ComponentContainer';

class Main extends Component {

  render() {

    const components = [
      <UserManagement />,<TemperatureConverter />
    ]

    return (
      <div className="App">
        <Header />
        <ComponentContainer headingTitle='User Management'>
          {components[0]}
        </ComponentContainer>
        <ComponentContainer headingTitle='Temperature Converter'>
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
