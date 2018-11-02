import React, {Component} from 'react'

class Article extends Component {
    render(){
        return(
            <article className="col-third">
				<img src={this.props.image} alt="" />
				<h3>{this.props.title}</h3>
				<p>{this.props.body}</p>
				<button>Read More</button>
			</article>
        );
    }
}

export default Article;