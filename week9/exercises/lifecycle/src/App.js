import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import FlashcardContainer from './components/FlashcardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FlashcardContainer/>
      </div>
    );
  }
}

export default App;
