import React, { Component } from 'react';

import Header from './components/Header/Header';
import CounterList from './components/CounterList/CounterList';
import Counter from './components/Counter/Counter'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state ={
      counters: 0
    }
    this.increaseCounters = this.increaseCounters.bind(this);
    this.decreaseCounters = this.decreaseCounters.bind(this);
  }

  increaseCounters(){
    let counters = this.state.counters + 1;
    this.setState({
      counters
    });
  }

  decreaseCounters(){
    let counters = this.state.counters;
    if(counters) counters -= 1;
    this.setState({
      counters
    });
  }

  render() {
    return (
      <main className="App">
        <Header counters={this.state.counters} increase={this.increaseCounters} decrease={this.decreaseCounters}/>
        <CounterList counters={this.state.counters}/>
      </main>
    );
  }
}

export default App;
