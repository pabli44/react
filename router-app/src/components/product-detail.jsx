import React, { Component } from 'react';

class ProductDetail extends Component {
    render() { 
        console.log(1);
        const id = this.props.match.params.id;
        console.log(id);
        return ( 
            <p>Product Detail with id {id}</p>
        );
    }
}
 
export default ProductDetail;