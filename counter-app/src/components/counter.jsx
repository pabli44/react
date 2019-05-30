import React, { Component } from 'react';

class Counter extends Component {

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero": value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value!==this.props.counter.value){
            //ajax call for update the value with the new data from the server
        }
    }

    componentWillUnmount(){
        console.log("Counter Unmount");
    }

    render() {
        console.log("Counter - Render");

        return (
            <div className="row">
                <h5>Counter # {this.props.id}</h5>
                <div className="col-1">
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value===0?'disabled':''}>-</button>
                    <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
                </div>
                
            </div>
        );
    }
    
}
 
export default Counter;