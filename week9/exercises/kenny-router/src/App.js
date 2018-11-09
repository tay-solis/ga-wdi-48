import React, { Component } from 'react';
import './App.css';
import About from './components/About'
import StockDash from './components/StockDash'
import Stock from './components/Stock'
import Nav from './components/Nav'


import {
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <h1>Tech Stock</h1>
        <Nav />
           {/* Create the routes. This will not appear on the page. */}
        
      </header>
      <main>
          <Switch>
            <Route path="/about" component={ About } />        
            <Route path="/stocks/:symbol" component={ Stock }/>
            <Route path="/stocks" component={ StockDash }/>
            <Route path="/" component={ StockDash }/>
          </Switch>
      </main>
      </div>
    );
  }

}

export default App;
