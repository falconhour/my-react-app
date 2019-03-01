import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.email}</td>
            </tr>
        );
    }
}

export default User;