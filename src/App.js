import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import UserManagement from './UserManagement';
import Header from './Header';
import TemperatureConverter from './TemperatureConverter';
import ComponentContainer from './ComponentContainer';
import NavigationBar from './NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class Main extends Component {

  render() {
    // const components = [
    //   <UserManagement />,<TemperatureConverter />
    // ]

    // return (
    //   <div className="App">
    //     <Header />
    //     <ComponentContainer headingTitle='User Management'>
    //       {components[0]}
    //     </ComponentContainer> 
    //   </div>
    // );
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <NavigationBar />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
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
