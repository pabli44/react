import React, { Component } from 'react';

const Like = (props) => {
    let classes =  "fa fa-heart";
    if(!props.liked) classes+="-o";
    return <i className={classes} aria-hidden="true" onClick={props.onClick} style={{cursor: "pointer"}}></i>        
}
 
export default Like;

// class Like extends Component {
//     state = {  }
//     render() {
//         let classes =  "fa fa-heart";
//         if(!this.props.liked) classes+="-o";
//         return <i className={classes} aria-hidden="true" onClick={this.props.onClick} style={{cursor: "pointer"}}></i>        
//     }
// }
 
// export default Like;