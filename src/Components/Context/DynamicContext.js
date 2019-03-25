import React, { Component } from 'react'
import OneSlicer from '../Slicers/OneSlicer';
import { Container, Row, Col } from 'react-bootstrap';
import './DynamicContext.css'

const themes = {
    light: {
        backgroundColor: '#E9ECEF'
    },
    dark: {
        backgroundColor: '#222'
    }
}

const MyContext = React.createContext(themes.dark)

class CustomButton extends Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button {...props} style={theme} />
        );
    }
}

CustomButton.contextType = MyContext;

const CustomButtonContainer = (props) => (
    <div>
        <CustomButton onClick={props.changeTheme} />
    </div>
);

class DynamicContext extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            theme: themes.light
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        }
    }
    render() {
        return (
            <OneSlicer>
                <div className='module dynamic-context'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Dynamic Context</h1>
                                <div>
                                    <MyContext.Provider value={this.state.theme}>
                                        <CustomButtonContainer changeTheme={this.toggleTheme} />
                                    </MyContext.Provider>
                                </div>
                                <br />
                                <br />
                                <div>
                                    <CustomButton />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OneSlicer>
        );
    }
}

export default DynamicContext;