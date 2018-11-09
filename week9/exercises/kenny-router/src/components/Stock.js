import React, { Component } from 'react'
import axios from 'axios'
import { IEX_URL } from "../constants.js"

class Stock extends Component{
    constructor(){
        super()
        this.state ={
            name: "Unknown",
            symbol: "Unknown",
            getSuccessful: false,
            latestPrice: 0,
            changePercent:0
        }
    }
    
    componentDidMount(){
       
        let symbol = this.props.symbol ? this.props.symbol : this.props.match.params.symbol;
        console.log(symbol);
        axios.get(`${IEX_URL}/stock/${symbol}/quote`)
        .then((res)=>{
            console.log(res.data)
            this.setState({
                symbol,
                name: res.data.companyName,
                getSuccessful: true,
                latestPrice: res.data.latestPrice,
                changePercent: res.data.changePercent
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
       
        return(
            <div className="stock">
            {!this.state.getSuccessful && <p>Loading...</p>}
            {this.state.getSuccessful && <div> <h3>{this.state.symbol} ({this.state.name}):</h3>
               <p>{this.state.changePercent}</p>
               <p>Latest Price: {this.state.latestPrice}</p></div>}
               
            </div>
        );
    }
}

export default Stock;