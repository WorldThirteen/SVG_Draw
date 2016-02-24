import ee from 'event-emitter'
import Model from './model'

class Collection {

	constructor( extention ) {

		if ( !extention ){

			this.extention = {}

		} else {

			this.extention = extention
			
		}

		this.list = []

		this.ee = {}
		ee( this.ee )
	}

	get length() {

		return this.list.length
	}

	add( item, force ) {

		if ( Array.isArray( item ) ) {

			item.map( ( i ) => {

				this.add( i, true )

			})

			return true

		} 

		let model = new Model( this.extention ) 
		model.set( item )

		this.list.push( model )

		return model

	}

	set( list, force ) {

		this.list = list.map( ( item ) => { 

			return this.add( item, true )

		})

		return this

	}

	get() {

		return this.list.map(( model ) => {

			return model.attributes

		})

	}

	remove( id ) {

		this.list.map( ( item, index ) => { 

			if ( item.get( 'id' ) == id ) {

				this.list.splice( index, 1 )
			}

		})

	}

	where( key, value ) {

		let result = []

		this.list.map( ( item ) => { 

			if ( item.get( key ) === value ) result.push( item ) 

		})

		return result

	}

	map( handler ) {

		return this.list.map( handler )
	}

	update( list ) {

		if ( !list ) list = this.list

		this.ee.emit( 'update', list )
	}

	onUpdate( callback ) {

		this.ee.on( 'update', callback )

	}

	at( index ) {

		return this.list[ index ]

	}

}

export default Collection