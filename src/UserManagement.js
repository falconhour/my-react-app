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

    componentDidMount() {
        const url = 'https://localhost:44340/api/values';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({ contacts : json });
            });
    }

    handleOnSubmit(e) {
        const contacts = this.state.contacts;
        const contact = {
            'id' : contacts.length + 1,
            'email' : e.target.email.value,
            'name' : e.target.name.value,
        }
        contacts.push(contact);
        this.setState({ contacts });
        
        this.email.value = '';
        this.name.value = '';

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
                                        type='email'
                                        ref={(el) => this.email = el}
                                        />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <br />
                                    <input className="form-control"
                                        name='name'
                                        ref={(el) => this.name = el}
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