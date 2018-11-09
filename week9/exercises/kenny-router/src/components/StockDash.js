import React, { Component } from 'react'
import Stock from './Stock'
import axios from 'axios'
import { GA_URL } from "../constants.js"
import { Link } from 'react-router-dom'

class StockDash extends Component{
    constructor(props){
        super(props)
        this.state={
            stocks: [],
            currentIndex: 0,
            links: []
        }

        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }


    prev(){
        let prevIndex = this.state.currentIndex - 1;
        if(prevIndex < 0){
            this.setState({
                currentIndex: this.state.stocks.length - 1
            })
        } else {
            this.setState({
                currentIndex: prevIndex
            })
        }
    }
  
    next(){
        
        let nextIndex = this.state.currentIndex + 1;
        if(nextIndex < this.state.stocks.length){
            this.setState({
                currentIndex: nextIndex
            })
        } else{
            this.setState({
                currentIndex:0
            })
        }
    }

    handleKeyUp(e){
        if(e.keyCode === 39) { this.next() }
        if(e.keyCode === 37) { this.prev() }
    }
    
    componentDidMount(){
        window.addEventListener('keyup', this.handleKeyUp)
        axios.get(GA_URL)
        .then((res)=>{
            console.log(res.data)
            let stocks = [];
            let links = [];
        for (let i = 0; i < res.data.length; i++){
            stocks.push(<Stock key={i} symbol={res.data[i].symbol}/>)
            links.push(<li><Link key={i} to={`stocks/${res.data[i].symbol}`}>{res.data[i].symbol}</Link></li>)
        }
            this.setState({
                stocks,
                links
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render(){
        
        return(
            
            <div className="stockDash">
                <ul>
                    {this.state.links}
               </ul>
                <h2>Today's Stocks</h2>
               {this.state.stocks[this.state.currentIndex]}
               
                


            </div>
        );
    }

}

export default StockDash;