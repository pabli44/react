import React, { Component } from 'react';

class ProductDetail extends Component {


    handleSave = () =>{
        this.props.history.push("/products");
    }


    render() { 
        console.log(1);
        const id = this.props.match.params.id;
        console.log(id);
        return ( 
            <React.Fragment>
                <p>Product Detail with id {id}</p>
                <button onClick={this.handleSave}>Save</button>
            </React.Fragment>
        );
    }
}
 
export default ProductDetail;