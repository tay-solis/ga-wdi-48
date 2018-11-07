import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";
import axios from 'axios'

class FlashcardContainer extends Component {
    constructor(){
        super();
        this.state = {
            words: [],
            currentIndex: 0
        }
    }
  render() {
      console.log("Rendering:");
      console.log(this.state.words[this.state.currentIndex])
    return (
    <main>
        {this.state.words[this.state.currentIndex] && <Flashcard word={this.state.words[this.state.currentIndex]} />}    
    </main>
    );
  }

  handleKeyUp(e){
      if( e.keyCode === 39) this.next()
      if(e.keyCode === 37) this.prev()
  }

  next(){
      let nextIndex = (this.state.currentIndex + 1 === this.state.words.length)
  }

  componentDidMount(){
    window.addEventListener('keyup', this.handleKeyUp)
    axios.get(CLIENT_URL)
    .then((res)=>{
        
        let words = res.data;
        this.setState({
            words
        })
        console.log(this.state)
    })
    .catch((err) =>{
        console.log(err);
    })
  }

}

export default FlashcardContainer;