import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.contact.id}</td>
                <td>{this.props.contact.firstName}</td>
                <td>{this.props.contact.lastName}</td>
                <td>{this.props.contact.email}</td>
            </tr>
        );
    }
}

export default User;