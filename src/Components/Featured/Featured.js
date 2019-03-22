import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { routes } from '../../Routes';
import './Featured.css';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className="featured">
                    {routes.map((route) => {
                        if (route.isFeatured) {
                            return <Button variant="dark">
                                <Link className="nav-link" to={route.path}>{route.headingTitle}</Link>
                            </Button>
                        }
                    })}
            </Container>
        );
    }
}

export default Featured;