import React, { Component } from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';
import './TemperatureConverter.css';

class TemperatureConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celcius: null,
            fahrenheit: null
        };
    }

    handleConvertToFahrenheit(e) {
        const celcius = this.state.celcius
        const calculatedCelcius = (celcius * 1.8) + 32
        this.setState({fahrenheit: calculatedCelcius})
    }

    render() {
        return (
            <div className='module'>
                <Container>
                    <Form>
                        <h3>{this.props.heading}</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Celsius</Form.Label>
                                <Form.Control />
                            </Col>
                            <Col>
                                <Form.Label>Fahrenheit</Form.Label>
                                <Form.Control />
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>

            </div>
        );
    }
}

export default TemperatureConverter;