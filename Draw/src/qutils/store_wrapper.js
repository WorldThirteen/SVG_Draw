import React from 'react'
import Collection from './collection'

class StoreWrapper extends React.Component {

	constructor( props ) {

		super()

		this.state = this.getStates( props.subscribeOn, props.store )
		this.subscriptions = new Collection()

		if ( props.subscribeOn ){

			props.subscribeOn.map( ( name ) => {

				this.subscribeWrapper( name, props.store )

			})

		} else {

			Object.keys( props.store.get() ).map( ( name ) => {

				this.subscribeWrapper( name, props.store )

			})

		}

	}

	componentWillUnmount() {

		if ( this.props.subscribeOn ){

			this.props.subscribeOn.map( ( name ) => {

				this.subscriptions.map( ( model ) => {

					this.props.store.unsubscribe( name, model.get( 'fn' ) )
				})	

			})

		} else {

			Object.keys( this.props.store.get() ).map( ( name ) => {

				this.subscriptions.map( ( model ) => {

					this.props.store.unsubscribe( name, model.get( 'fn' ) )
				})			

			})

		}

	}

	subscribeWrapper( name, store ) {

		var fn = ( data ) => {

			let obj = {}
			obj[ name ] = data

			this.setState( obj )

		}

		store.subscribe( name, fn )
		this.subscriptions.add( { fn: fn } )

	}

	getStates( subscribeOn, store ) {

		var state = {}

		if ( subscribeOn ){

			subscribeOn.map(( name ) => {

				state[ name ] = store.get( name )
			})

		} else {

			state = store.get()

		}

		return state
	}

	subscribeView( element, subscribeOn ) {

		if( this.props.extention ){

			var props = Object.assign( this.props.store.get(), this.props.extention )

		} else {

			var props = this.props.store.get()
		}

		if ( !subscribeOn ) return React.cloneElement( element, props )

		var props = {}
		
		subscribeOn.map(( name ) => {

			props[ name ] = this.props.store.get( name )

		})

		return React.cloneElement( element, props )

	}

	initChildren() {

		if ( this.props.subscribeOn ){

			var on = this.props.subscribeOn

		} else {

			var on = false

		}

		if ( Array.isArray( this.props.children ) ){

			return this.props.children.map( ( element ) => {

				return this.subscribeView( element, on )
			})

		} else {

			return this.subscribeView( this.props.children, this.props.subscribeOn )
		}
	}

	render() {

		var children = this.initChildren()

		if ( children.length ){

			return React.createElement( 'div', { children: children, className: this.props.className } )

		} else {

			return children
			
		}

	}

}


export default StoreWrapper
