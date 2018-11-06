import React, { Component } from 'react';
import { counter } from './Counter.module.scss';


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        let count = this.state.count + 1;
        this.setState({
            count,
        });
    }

    decreaseCount() {
        let count = this.state.count
        if(count > 0) count -= 1;
        this.setState({
            count
        });
    }

    render(){
        return(
            <div className={counter}>
            <span class="count">{this.state.count}</span>
            <div class="counterBtns">
              <button onClick={this.increaseCount}>+</button>
              <button onClick={this.decreaseCount}>-</button>
            </div>
          </div>
        );
    }
}

export default Counter;
