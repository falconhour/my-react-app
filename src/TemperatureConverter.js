import React, { Component } from 'react';
import { Form, Container, Col, Alert, Row } from 'react-bootstrap';
import './TemperatureConverter.css';
import OneSlicer from './Components/Slicers/OneSlicer';

class Celcius extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.props.handleConvertToFahrenheit(e);
    }

    render() {
        4
        return (
            <div>
                <Form.Label>Celsius</Form.Label>
                <Form.Control
                    type='number'
                    value={this.props.value}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

class Fahrenheit extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.props.handleConvertToCelcius(e);
    }

    render() {
        4
        return (
            <div>
                <Form.Label>Fahrenheit</Form.Label>
                <Form.Control
                    type='number'
                    value={this.props.value}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

class Boiler extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const isBoiling = this.props.temperatureValue > 99.9999 ? true : false;

        return (
            <Alert variant={isBoiling ? 'danger' : 'info'} >
                {isBoiling ? 'Water is boiling!!!' : 'Just chill and wait to boil.'}
            </Alert>
        );
    }
}

class TemperatureConverter extends Component {
    constructor(props) {
        super(props);
        this.handleConvertToFahrenheit = this.handleConvertToFahrenheit.bind(this)
        this.handleConvertToCelcius = this.handleConvertToCelcius.bind(this);
        this.state = {
            celcius: 0,
            fahrenheit: 0
        };
    }

    handleConvertToFahrenheit(e) {
        this.setState({ celcius: e.target.value })

        const celcius = this.state.celcius
        const calculatedCelcius = (celcius * (9 / 5)) + 32
        this.setState({ fahrenheit: calculatedCelcius })
    }

    handleConvertToCelcius(e) {
        this.setState({ fahrenheit: e.target.value })

        const fahrenheit = this.state.fahrenheit
        const calculatedFahrenheit = (fahrenheit - 32) * (5 / 9)
        this.setState({ celcius: calculatedFahrenheit })
    }

    render() {
        return (
            <OneSlicer>
                <div className='module'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Temperature Converter</h1>
                                <Container>
                                    <Form>
                                        <Form.Row>
                                            <Col>
                                                <Boiler temperatureValue={this.state.celcius} />
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col>
                                                <Celcius handleConvertToFahrenheit={this.handleConvertToFahrenheit}
                                                    value={this.state.celcius}
                                                />
                                            </Col>
                                            <Col>
                                                <Fahrenheit handleConvertToCelcius={this.handleConvertToCelcius}
                                                    value={this.state.fahrenheit}
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OneSlicer>
        );
    }
}

export default TemperatureConverter;