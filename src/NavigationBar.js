import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar className="navigation-bar" variant="dark">
                <Navbar.Brand href="#home">My React App</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                
            </Navbar>
        );
    }
}

export default NavigationBar;