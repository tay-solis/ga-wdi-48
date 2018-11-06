import React, {Component} from 'react'
import Pokemon from '../Pokemon/Pokemon'
import pokeAPIData from '../../data.js'

class Type extends Component{
    render(){
        console.log(this.props.typeData);
        const starterData = this.props.typeData.gen2Starters.map((pokemon)=>{
            return(
                <Pokemon pokemon={pokeAPIData[pokemon]} />      
                )
        })

        return(
            <section className={`type + ${this.props.typeData.name}`} >
            <h2>{this.props.typeData.name} Type</h2>
            <h3>Gen2 Starters</h3>
            <ul className="starterGen">
                
                {starterData}
            </ul>
            </section>
        );
    }
}

export default Type;