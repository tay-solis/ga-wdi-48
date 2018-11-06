import React, { Component } from 'react';
import { headers } from './Header.module.scss';

class Header extends Component{
    render(){
        return(
        <header className={headers}>
          <h1>React Counter</h1>
          <h2>You have {this.props.counters} Counters</h2>
          <div className="counterBtns">
            <button onClick={this.props.increase}>+</button>
            <button onClick={this.props.decrease}>-</button>
          </div>
        </header>
        );
    }
}

export default Header;
