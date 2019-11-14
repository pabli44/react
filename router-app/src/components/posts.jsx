import React, {Component} from 'react';

class Posts extends Component {
    render() { 
        const matchParams = this.props.match;
        return ( 
            <React.Fragment>
                <p>Posts
                </p>
                year: {matchParams.params.year},month: {matchParams.params.month}
            </React.Fragment>
         );
    }
}
 
export default Posts;