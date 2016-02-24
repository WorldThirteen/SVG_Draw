import UUID from 'uuid'
import ee from 'event-emitter'

class Model {

	constructor( extention ) {

		if ( !extention ) extention = {}
		
		this.attributes = {}

		Object.assign( this.attributes, extention )

		this.ee = {}

		ee( this.ee )

		if ( !this.get( 'id' ) ) this.set( 'id', UUID() )

	}

	get( key ) {

		if ( !key ) return this.attributes

		return this.attributes[ key ]
	}

	set( key, value, force ) {

		if ( typeof key === 'object' ){

			Object.assign( this.attributes, key )

		} else {

			this.attributes[ key ] = value
			
		}

		return this.attributes
	}

	update() {

		this.ee.emit( 'update', this.get() )
	}

	onUpdate( callback ) {

		this.ee.on( 'update', callback )

	}

}

export default Model