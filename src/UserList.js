import React, { Component } from 'react';
import User from './User';
import { Table } from 'react-bootstrap';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {this.props.contacts.map((contact, index) => {
                    return <User key={index} id={index + 1} contact={contact} />
                })}
            </tbody>
            </Table>
        );
    }
}

export default UserList;