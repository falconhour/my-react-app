import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col, Image, Nav } from 'react-bootstrap';
import './Home.css';
import logo from '../logo.svg';
import Featured from './Featured/Featured';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="home">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col sm={2}>
                                <Image src={logo} className="App-logo" alt="logo" />
                            </Col>
                            <Col sm={10}>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple practice React app.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Featured />
            </div>
        );
    }
}

export default Home;