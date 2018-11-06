import React, {Component} from 'react'

class Pokemon extends Component{
    render(){
        let types = `Type(s): ${this.props.pokemon.types[0].type.name}`;
        if (this.props.pokemon.types[1]) types += `, ${this.props.pokemon.types[1].type.name}`;
        return(
            <li className="pokemon">
                <div className="pokeTitle">
                <img src={this.props.pokemon.sprites.front_default}/>
                <h4>{this.props.pokemon.name}</h4>
                </div>
                <p>No. {this.props.pokemon.id}</p>
                <p>{types}</p>
                <p>Height: {this.props.pokemon.weight} cm Weight: {this.props.pokemon.height} kg</p>
            </li>
        );
    }
}
export default Pokemon;