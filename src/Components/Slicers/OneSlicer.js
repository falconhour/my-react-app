import React, { Component } from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import './Slicer.css'
import './OneSlicer.css'

class OneSlicer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="slicer">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OneSlicer;