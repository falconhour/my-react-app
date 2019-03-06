import React, { Component } from 'react';
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                
            </Navbar>
        );
    }
}

export default NavigationBar;