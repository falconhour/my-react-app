import React, { Component } from 'react'
import OneSlicer from '../Slicers/OneSlicer';
import { Container, Row, Col } from 'react-bootstrap';

const themes = {
    navy: {
        backgroundColor: '#3A435E'
    },
    light: {
        backgroundColor: '#E9ECEF'
    },
    dark: {
        backgroundColor: '#222'
    }
}

const MyContext = React.createContext(themes.light)

class DynamicContext extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <OneSlicer>
                <div className='module'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Dynamic Context</h1>
                                <div>
                                    
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