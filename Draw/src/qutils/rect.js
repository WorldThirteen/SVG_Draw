import Vec2 from './vec2'
import $ from 'npm-zepto'

export default class Rect {

	constructor( node, min, max ) {

		this.max = max
		this.min = min

		this.node = $( node )
		this.lock = true

	}

	static toRect( position, size ) {

		return { x: parseFloat( position.x ), y: parseFloat( position.y ), w: parseFloat( size.x ), h: parseFloat( size.y ) }

	}

	get() {

		var rect = Rect.toRect( this.position, this.size )

		return Object.assign( rect, { alpha: this.alpha } )
	}

	set( state ) {

		this.node.css({ 
			transform: 'translate(' + state.x + 'px,' +  state.y + 'px)', 
			width: state.w, 
			height: state.h,
			opacity: state.alpha
		})

	}

	set alpha( value ) {

		this.node.css({ opacity: value })

	}

	get alpha() {

		return parseFloat( this.node.css( 'opacity' ) )
	}

	set position ( vec ) {

		this.node.css({ left: vec.x, top: vec.y })

	}

	get position () {

		var pos = this.node.position()
		
		return new Vec2( pos.left, pos.top )

	}

	set size ( vec ) {

		this.node.css({ width: vec.x, height: vec.y })

	}

	get size () {

		return new Vec2 ( this.node.width(), this.node.height() )

	}

}
