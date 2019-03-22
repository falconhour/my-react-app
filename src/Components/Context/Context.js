import React, { Component } from 'react';
import OneSlicer from '../Slicers/OneSlicer';
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

class SuperContext extends Component {
    state = {
        buttonName: 'My button from SuperContext',
        buttonVariant: 'success'
    };
    render() {
        return (
            <MyContext.Provider value={{ state: this.state }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const ButtonContainer = () => (
    <div style={{ marginLeft: '20px' }}>
        This is the <span style={{ fontWeight: 'bold' }}>button container...</span>
        <div>
            <CustomButton />
        </div>
    </div>
)

class CustomButton extends Component {
    render() {
        return (
            <div>
                <span style={{ fontSize: '10px' }}>Context Consumer</span>
                <br />
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

class SuperContextContainer extends Component {
    render() {
        return (
            <OneSlicer>
                <div className='module'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Context</h1>
                                <div>
                                    This is the <span style={{ fontWeight: 'bold', color: 'green' }}>context container (SuperContextContainer class)</span>
                                    <br />
                                    <code style={{ fontSize: '10px' }}>
                                        buttonName: 'My button from SuperContext',
                                        buttonVariant: 'success'
                                    </code>
                                    <SuperContext>
                                        <ContextContainer />
                                    </SuperContext>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OneSlicer>
        );
    }
}

class ContextContainer extends Component {
    //...other codes...
    render() {
        return (
            <div style={{ marginLeft: '20px' }}>
                This is the <span style={{ color: '#ffc107', fontWeight: 'bold' }}>context container (ContextContainer class)</span>
                <br />
                <code style={{ fontSize: '10px' }}>
                    buttonName: 'My button',
                    buttonVariant: 'warning'
                </code>
                <div>

                    <MyContextProvider>
                        <ButtonContainer />
                    </MyContextProvider>

                    <ButtonContainer />
                </div>
            </div>
        );
    }
    //...other codes...
}

export default SuperContextContainer;