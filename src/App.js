import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import NavigationBar from './NavigationBar';
import { routes } from './Routes';
import HomePage from './ReactShop/pages/HomePage';
import ProductsPage from './ReactShop/pages/ProductsPage';
import Navigation from './ReactShop/components/Navigation';
import LogoutPage from './ReactShop/pages/LogoutPage';
import NotFoundPage from './ReactShop/pages/NotFoundPage';
import CartPage from './ReactShop/pages/CartPage';
import Helmet from 'react-helmet';


class App extends Component {
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

// class App extends Component {

//   render() {
//     return (
//       <React.Fragment>
//         <BrowserRouter >
//           <div>
//             <Helmet title='Fancy Clothing Store' />
//             <Navigation />
//             <hr />
//             <Switch>
//               <Route exact path='/' component={HomePage} />
//               <Route path='/products' component={ProductsPage} />
//               <Route path='/logout' component={LogoutPage} />
//               <Route path='/cart' component={CartPage} />
//               <Route path='**' component={NotFoundPage} />
//             </Switch>
//           </div>
//         </BrowserRouter>
//       </React.Fragment>
//     );
//   }
// }

export default App;
