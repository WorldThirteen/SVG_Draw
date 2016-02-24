import React from 'react'

export class MenuComponent extends React.Component {

	constructor( props ) {

		super( props )

		this.state = { selected: props.selected }

	}


	handleAction( action ) {

		this.props.onAction( action )

		// console.log( action )

		this.setState({ selected: action })

	}

	render() {

		var { href } = this.props

		var itemsList = this.props.children.map(( item, key ) => {

			var s = false

			if ( item.props.href == this.state.selected ){

				s = true
			}

			return React.cloneElement( item, { 

				key: key, 
				action: this.handleAction.bind( this ),
				selected: s

			})

		})

		return (

			<div className={ this.props.className }>
				{ itemsList }
			</div>

		)

	}
}
