import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <Route path='/products/' render={() => {
                        return (
                            <ul>
                                <li><Link to='/products/tshirt'>T Shirt</Link></li>
                                <li><Link to='/products/short'>Shorts</Link></li>
                            </ul>
                        );
                    }
                } />
                <Route path='/products/:name' component={ProductDetailPage} />
            </div>
        );
    }
}

export default ProductsPage;