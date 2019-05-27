import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/logout'>Logout</NavLink></li>
                    <li><NavLink to='/cart'>Cart</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;