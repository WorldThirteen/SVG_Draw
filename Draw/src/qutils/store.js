import ee from 'event-emitter'
import Model from './model'
import Collection from './collection'
import AJAX from './ajax'


class StoreClass {

	constructor() {

		this.ee = {}
		ee( this.ee )

		this.collections = {}
		this.models = {}

	}

	collection( name, extention ) {

		this.collections[ name ] = new Collection( extention )

		this.collections[ name ].onUpdate( ( data ) => {

			this.ee.emit( name, data )

		})

		return this.collections[ name ]
		
	}

	bindActions( actions ){

		var keys = Object.keys( actions )

		for ( let key of keys ) {

			actions[ key ].listen( this[ key ], this )

		}

	}

	ajaxPromise( type, url, data ) {

		return AJAX[ type ]( url, data )

	}

	model( name, extention ) {

		this.models[ name ] = new Model( extention )

		this.models[ name ].onUpdate( ( data ) => {

			this.ee.emit( name, data )

		})

		return this.models[ name ]

	}

	find( name ) {

		if ( this.collections[ name ] ) return this.collections[ name ]
		if ( this.models[ name ] ) return this.models[ name ]
	}

	addTo( name, item ) {

		return this.find( name ).add( item )
	}

	update( name ) {

		this.find( name ).update()

		return this

	}

	get( name ) {

		if ( !name ){

			var result = {}

			for ( let collectionName of Object.keys( this.collections ) ) {
				result[ collectionName ] = this.collections[ collectionName ].get()
			}

			for ( let modelName of Object.keys( this.models ) ) {
				result[ modelName ] = this.models[ modelName ].get()
			}

			return result
		
		}

		let names = name.split('.')

		if ( names.length > 1 ) {

			return this.find( names[ 0 ] ).get( names[ 1 ] )

		} else {

			return this.find( names[ 0 ] ).get()

		}

	}

	set( name, data ) {

		let names = name.split('.')

		if ( names.length > 1 ) {

			return this.find( names[ 0 ] ).set( names[ 1 ], data )

		} else {

			return this.find( names[ 0 ] ).set( data )
		}
	}

	emit( name, data ) {

		this.ee.emit( name, data )
	}

	subscribe( name, callback ) {

		this.ee.on( name, callback )

	}

	unsubscribe( name, callback ) {

		this.ee.off( name, callback )

	}

}

export default StoreClass