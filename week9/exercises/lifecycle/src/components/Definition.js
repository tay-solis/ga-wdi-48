import React from 'react';

let Definition = (props) => {
	render(){
		console.log("Definition: ")
		console.log(this.props.definition)
		return (
		<div>
			<p>{this.props.lexicalCategory}</p>
		</div>
	);}
	
}

export default Definition;