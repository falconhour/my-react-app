import React, { Component } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import './ExercisePage.css';

class ExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            firstName: null,
            lastName: null
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.jsonData.innerText = JSON.stringify(this.state);
    }

    handleOnSubmit(e) {
        this.jsonData.innerText = JSON.stringify(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className='module'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <form onSubmit={this.handleOnSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input className="form-control"
                                        name='email'
                                        onChange={this.handleOnChange} />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <br />
                                    <input className="form-control"
                                        name='firstName'
                                        onChange={this.handleOnChange} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control"
                                        name='lastName'
                                        onChange={this.handleOnChange} />
                                </div>
                                <button>Submit</button>
                            </form>
                            <hr />
                            <pre ref={(el) => {this.jsonData = el}}>JSON data goes here</pre>
                        </Col>
                        <Col sm={6}>
                            <Alert variant='info'>
                                Submitted data goes here!
                            </Alert>
                        </Col>
                    </Row>
                </Container>            
            </div>
        );
    }
}

export default ExercisePage