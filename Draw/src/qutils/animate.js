import Tweenable from 'shifty'
import Rect from './rect'

class Animate {

	constructor( node, opts ) {

		if ( !opts ) var opts = {}

		this.rect = new Rect( node )

		this.delay = opts.delay || 0
		this.duration = opts.duration || 1000
		this.easing = opts.easing || 'easeInOutQuad'

		this.tweenable = new Tweenable()

	}

	to( to ) {

		// console.log( this.rect.get() )

		return new Promise( ( res ) => {

				this.tweenable.tween({

					from: this.rect.get(),
					to: to,
					delay: this.delay,
					duration: this.duration,
					easing: this.easing,
					finish: ( e ) => {
						this.rect.set( e )
						res()
					},
					step: ( val ) => {

						// console.log( val.x )

						this.rect.set( val )

					}

				})

		})

	}

}

export default function AnimateDecorator( node, options ){

	return new Animate( node, options )

}

	// constructor( node, opts ) {

	// 	if ( !opts ) var opts = {}

	// 	this.rect = new Rect( node )

	// 	this.delay = opts.delay || 0
	// 	this.duration = opts.duration || 1000
	// 	this.easing = opts.easing || 'easeInOutQuad'

	// 	this.tweenable = new Tweenable()

	// }

	// translate( to ) {

	// 	this.tweenable.tween({

	// 		from: this.rect.position,
	// 		to: to,
	// 		delay: this.delay || 0,
	// 		duration: this.duration,
	// 		easing: this.easing,

	// 		step: ( val ) => {

	// 			var x = val.x || this.rect.position.x
	// 			var y = val.y || this.rect.position.y

	// 			this.rect.node.css({ transform: 'translate(' + x + 'px,' + y + 'px)' })

	// 		}

	// 	})

	// 	return this

	// }

	// scale( to ) {

	// 	this.tweenable.tween({

	// 		from: this.rect.size,
	// 		to: to,
	// 		delay: this.delay || 0,
	// 		duration: this.duration,
	// 		easing: this.easing,

	// 		step: ( val ) => {

	// 			var x = val.x || this.rect.position.x
	// 			var y = val.y || this.rect.position.y

	// 			this.rect.node.css({ width: x, height: y })

	// 		}

	// 	})

	// 	return this

	// }

	// fade( from, to ) {

	// 	this.tweenable.tween({

	// 		from: { a: from },
	// 		to: { a: to },
	// 		delay: this.delay || 0,
	// 		duration: this.duration,
	// 		easing: this.easing,

	// 		step: ( val ) => {

	// 			var v = val.a || this.rect.alpha

	// 			this.rect.alpha = v

	// 		}

	// 	})

	// }