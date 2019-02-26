import React, { Component } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import './UserManagement.css';
import UserList from './UserList';

class ExercisePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        const contacts = this.state.contacts;
        const contact = {
            'id' : contacts.length + 1,
            'email' : e.target.email.value,
            'firstName' : e.target.firstName.value,
            'lastName' : e.target.lastName.value
        }
        contacts.push(contact);
        this.setState({contacts: contacts});
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
                                        />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <br />
                                    <input className="form-control"
                                        name='firstName'
                                        />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input className="form-control"
                                        name='lastName'
                                        />
                                </div>
                                <button>Submit</button>
                            </form>
                            <hr />
                            {this.state.contacts.length === 0 ? 
                                <Alert variant='info'>No data found.</Alert> :
                                <UserList contacts={this.state.contacts} />
                            }
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ExercisePage