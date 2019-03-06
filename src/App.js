import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserManagement from './UserManagement';
import TemperatureConverter from './TemperatureConverter';

class Main extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/usermanagement" component={UserManagement} />
              <Route path="/temperatureconverter" component={TemperatureConverter} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for URL <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <Main />
    );
  }
}

export default App;
