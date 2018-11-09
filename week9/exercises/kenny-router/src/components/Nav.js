import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/stocks">Home</Link></li>
                    <li><Link to="/about">About</Link></li>    
                </ul>
            </nav>
        );
    }
}
export default Nav