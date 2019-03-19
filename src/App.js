import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserManagement from './UserManagement';
import TemperatureConverter from './TemperatureConverter';
import Context from './Components/Context';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      routes: [
        {
          component: Home,
          path: '/',
          headingTitle: null,
          exact: true
        }
        ,{
          component: UserManagement,
          path: '/usermanagement',
          headingTitle: 'User Management',
          exact: false
        }
        ,{
          component: TemperatureConverter,
          path: '/temperatureconverter',
          headingTitle: 'Temp Converter',
          exact: false
        }
        ,{
          component: Context,
          path: '/context',
          headingTitle: Context,
          exact: false
        }
        ,{
          component: About,
          path: '/about',
          headingTitle: null,
          exact: false
        }
        ,{
          component: Contact,
          path: '/contact',
          headingTitle: null,
          exact: false
        }
        ,{
          component: NoMatch,
          path: null,
          headingTitle: null,
          exact: false
        }
      ]
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
