import React from 'react'

export default class Path extends React.Component {

	render() {

		return(

			<path 
				fill-rule="evenodd" 
				className="line" 
				d={ this.props.path } 
				strokeWidth={ this.props.width + "px" } 
				fill={ this.props.fill } 
				stroke={ this.props.color }/>

		)
	}

}