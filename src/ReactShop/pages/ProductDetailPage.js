import React, { Component } from 'react';

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>You wanna buy a {this.props.match.params.name}?</h2>

            </div>
        );
    }
}

export default ProductDetailPage;