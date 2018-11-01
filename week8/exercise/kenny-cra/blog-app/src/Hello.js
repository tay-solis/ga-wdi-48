import React, {Component} from 'react';

class Hello extends Component{
  render() {
    return (
      <div className="App">
        <h1>Hey {this.props.name}. </h1>
        <p>
          Aren't you {this.props.age} years old? And from {this.props.home}?
        </p>
      </div>
    );
  }
}

export default Hello;
