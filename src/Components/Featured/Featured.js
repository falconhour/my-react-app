import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className="featured">
                <Row>
                    <Col>
                        <Button variant="dark" block>
                            <Link className="nav-link" to="/usermanagement" >User Management</Link>
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="dark" block>
                            <Link className="nav-link" to="/temperatureconverter" >Temperature Converter</Link>
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="dark" block>
                            <Link className="nav-link" to="/context" >Context</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Featured;