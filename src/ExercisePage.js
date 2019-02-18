import React, { Component } from 'react';
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
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div id='exercisePage'>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <br />
                        <input type="email" className="form-control" 
                            name='email'
                            onChange={this.handleOnChange}/>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <br />
                        <input type="email" className="form-control" 
                            name='firstName'
                            onChange={this.handleOnChange}/>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <br />
                        <input type="email" className="form-control"
                            name='lastName'
                            onChange={this.handleOnChange}/>
                        <br />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default ExercisePage;