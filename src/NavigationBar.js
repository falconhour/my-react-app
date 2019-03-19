import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
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
                <Link className="navbar-brand" to="/">My React App</Link>
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                <Navbar.Text className="justify-content-end">
                    {React.version}
                </Navbar.Text>
            </Navbar>
        );
    }
}

export default NavigationBar;