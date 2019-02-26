import React, { Component } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import './UserManagement.css';
import UserList from './UserList';

class ExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    id: '1',
                    email: 'my_1_email@ddress.com',
                    firstName: 'Diane',
                    lastName: 'Saquing'
                },
                {
                    id: '2',
                    email: 'my_2_email@ddress.com',
                    firstName: 'Joy',
                    lastName: 'Saquing'
                }
            ]
        };
        // this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    // handleOnChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    //     this.jsonData.innerText = JSON.stringify(this.state);
    // }

    handleOnSubmit(e) {
        this.jsonData.innerText = JSON.stringify(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div className='module'>
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={this.handleOnSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input className="form-control"
                                        name='email'
                                        // onChange={this.handleOnChange} 
                                        />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <br />
                                    <input className="form-control"
                                        name='firstName'
                                        // onChange={this.handleOnChange} 
                                        />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control"
                                        name='lastName'
                                        // onChange={this.handleOnChange} 
                                        />
                                </div>
                                <button>Submit</button>
                            </form>
                            <hr />
                            <UserList contacts={this.state.contacts} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ExercisePage