import React, {Component} from 'react';

class Products extends Component {
    
    render() { 
        const {sortBy} = this.props;
        console.log(sortBy);
        
        return (  
            <p>Products</p>

        );
    }
}
 
export default Products;