import React,{Component} from 'react';
import Comment from './Comment';

class Post extends Component {
    this.comments: this.props.comments.map((comment, i)=>{
        return <Comment key={i} comment={comment}/>
    })

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>By {this.props.author}</h2>
                <p>{this.props.content}</p>
            </div> 
        );
    }
}

export default Post;