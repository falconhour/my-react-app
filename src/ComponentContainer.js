import React, { Component } from 'react';
import './ComponentContainer.css';
import { Container } from 'react-bootstrap';

class ComponentContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className='component-container'>
                <h3>{this.props.headingTitle}</h3>
                {this.props.children}
                <hr />
            </Container>
        );
    }
}

export default ComponentContainer;