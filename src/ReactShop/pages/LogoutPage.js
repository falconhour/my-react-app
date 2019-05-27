import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedOut: false
         };
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.props.history.push('/');
            // this.setState({
            //     isLoggedOut: true
            // });
        }, 3000);
    }

    render() {
        // if (this.state.isLoggedOut) {
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                <h1>Logging out, please wait...</h1>
            </div>
        );
    }
}

export default LogoutPage;