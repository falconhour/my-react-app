import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavigationBar from './NavigationBar';
import { routes } from './Routes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      routes: routes
    };
  }

  render() {
    const routes = this.state.routes;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Switch>
              {routes.map((route, index) => 
                <Route path={route.path}
                  component={route.component}
                  exact={route.exact}
                  key={index}
                  /> 
              )};
            </Switch>
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
