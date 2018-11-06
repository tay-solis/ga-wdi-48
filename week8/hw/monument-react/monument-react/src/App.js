import React, { Component } from 'react';
import './App.css';
import Index from './Index/Index'
import Blog from './Blog/Blog'
import AboutTeam from './AboutTeam/AboutTeam'

class App extends Component {
    render() {
        return (
          <div className="App">
            {/* <Index /> */}
            {/* <Blog /> */}
            <AboutTeam />
          </div>
        );
    }
}

export default App;