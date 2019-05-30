import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        console.log("Counters - Render");
        const {onReset, onDecrement, onIncrement, onDelete, counters} = this.props;

        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                    <Counter key={counter.id} 
                        id={counter.id}
                        onDelete={onDelete} 
                        onIncrement={onIncrement} 
                        onDecrement={onDecrement} 
                        counter={counter} 
                    />
                )}
            </div>
         );
    }
}
 
export default Counters;