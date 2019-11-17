import React, {Component} from 'react';
import queryString from 'query-string';

class Posts extends Component {
    render() { 
        const {match, location} = this.props;        
        
        const result = queryString.parse(location.search);
        console.log(result);



        return ( 
            <React.Fragment>
                <h2><p><b>Posts</b></p></h2>
                year: {match.params.year},month: {match.params.month}
            </React.Fragment>
         );
    }
}
 
export default Posts;