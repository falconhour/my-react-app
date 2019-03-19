import React, { Component } from 'react';
import OneSlicer from './Slicers/OneSlicer';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyContext = React.createContext();

class MyContextProvider extends Component {
    state = {
        buttonName: 'My button',
        buttonVariant: 'warning'
    };

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const ButtonContainer = (props) => (
    <div>
        This is the <span style={{color: 'blue', fontWeight: 'bold'}}>button container...</span>
        <div style={{border: '1px solid blue'}}>
            <CustomButton />
        </div>
    </div>
)

class CustomButton extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <Button variant={context.state.buttonVariant}>
                            {context.state.buttonName}
                        </Button>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

class Context extends Component {
    //...other codes...
    render() {
        return (
            <OneSlicer>
                <div className='module'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Context</h1>
                                <div>
                                    This is the <span style={{color: 'red', fontWeight: 'bold'}}>parent container</span>
                                    <div style={{border: '1px solid red'}}>
                                        <MyContextProvider>
                                            <ButtonContainer />
                                        </MyContextProvider>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OneSlicer>
        );
    }
    //...other codes...
}

export default Context;