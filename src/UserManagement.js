import React, { Component, Suspense } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import './UserManagement.css';
import UserList from './UserList';
import Axios from 'axios';
import OneSlicer from './Components/Slicers/OneSlicer';
class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:58542/api/users',
            contacts: []
        };
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleApiError(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            console.log('Error', error.message);
            console.log(error.config);
        }        
    }

    componentDidMount() {
        Axios.get(this.state.url)
            .then(response => {
                this.setState({ contacts: response.data });
            })
            .catch(error => this.handleApiError(error));
    }

    handleOnSubmit(e) {
        const contacts = this.state.contacts;
        const contact = {
            'id': contacts.length + 1,
            'email': e.target.email.value,
            'name': e.target.name.value,
        }

        Axios.post(this.state.url, { data: contact })
            .then(res => console.log(res))
            .catch(error => this.handleApiError(error));

        this.email.value = '';
        this.name.value = '';

        e.preventDefault();
    }

    render() {     
        return (
            <OneSlicer>
                <div className='module'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>User Management</h1>
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
                                {/* {this.state.contacts.length === 0 ?
                                    <Alert variant='info'>No data found.</Alert> :
                                    <UserList contacts={this.state.contacts} />
                                } */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OneSlicer>
        );
    }
}

export default UserManagement