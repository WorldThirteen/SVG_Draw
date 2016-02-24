import React from 'react'

export class MenuItem extends React.Component {

	handleClick( e ){

		e.preventDefault()
		this.props.action( this.props.href )

	}

	getClassName() {

		var { selected } = this.props

		if ( selected ) {
			return this.props.className + ' selected'
		} else {
			return this.props.className
		}
	}

	render() {

		var { href, children } = this.props

		return (

			<a href={ href } onClick={ this.handleClick.bind( this ) } className={ this.getClassName.call( this ) }>
				{
					children
				}
			</a>

		)

	}
}
