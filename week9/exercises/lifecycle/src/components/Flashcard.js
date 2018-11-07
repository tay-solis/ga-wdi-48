import React, { Component } from 'react'
import Definition from './Definition'

class Flashcard extends Component {
  constructor(){
    super()
    this.state = {
      word: "",
      definitions: []
    }
  }

  componentDidMount(){
    this.setState({
      word: this.props.word.word,
      definitions: this.props.word.definitions
    })
  }

  render() {
    console.log('State: ')
    console.log(this.state)
    let definitions = []
    for (let i = 0; i< this.state.definitions.length; i++){
      console.log('definitions')
      console.log(this.state.definitions[i])
      definitions.push(<Definition key={i} definition={this.state.definitions[i]}/>);
    }
    return (
      <div className="card">
        <h2>{this.state.word}</h2>
        <div className="definitions">
          {definitions}
        </div>
        
      </div>
    )
  }
}

export default Flashcard