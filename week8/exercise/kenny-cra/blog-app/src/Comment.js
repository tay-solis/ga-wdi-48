import React, {Component} from 'react';

class Comment extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.author}</h3>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default Comment;