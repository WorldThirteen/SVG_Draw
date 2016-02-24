import ee from 'event-emitter'

var Create = function CreateAction( array ) {

	var result = {}

	if( Array.isArray( array ) ) {

		array.map( function( name ) {
			result[ name ] = CreateAction()

		})

		return result

	} else { 

		var events = new ee()

	    var action = function() {

			var args = Array.prototype.slice.call(arguments)
			events.emit( "trigger", args )

		}

		action.listen = function( callback, bindContext ) {

			events.on("trigger", function( args ) {

				callback.apply( bindContext, args )

			})

		}

	    return action
	}

}

export default Create

