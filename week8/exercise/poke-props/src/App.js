import React, { Component } from 'react';
import './App.css';
import Type from './components/Type/Type'

const pokeData = {
  grass:{
    name: 'grass',
    gen2Starters: [
      'Chikorita',
      'Bayleef',
      'Meganium', 
  
    ],
  },
  fire: {
    name: 'fire',
    gen2Starters: [
     'Cyndaquil',
      'Quilava',
      'Typhlosion',
    ]
  },
  water: {
    name: 'water',
    gen2Starters: [
      'Totodile', 
      'Croconaw', 
      'Feraligatr',     
    ]
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <h1>Pokedex</h1>
        <Type typeData={pokeData.grass} />
        <Type typeData={pokeData.fire} />
        <Type typeData={pokeData.water} />
      </main>
    );
  }
}

export default App;
