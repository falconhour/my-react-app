import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Prompt message='You have not checked out, are you sure?' />
                <h1>Your Cart</h1>
            </div>
        );
    }
}

export default CartPage;