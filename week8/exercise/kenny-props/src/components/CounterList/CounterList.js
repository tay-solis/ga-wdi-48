import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import { counterList } from './CounterList.module.scss'

class CounterList extends Component{

    render(){
        let counters = [];
        for(let i = 0; i < this.props.counters; i++){
            counters.push(<Counter id={i} key={i}/>);
        }
        return(
        <section className={counterList}>
            {counters}
        </section>
        );
    }
}

export default CounterList;
