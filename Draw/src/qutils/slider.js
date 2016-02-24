import React from 'react'
import $ from 'npm-zepto'
import Hammer from 'hammerjs'
import Anchor from './anchor'
import Vec2 from './vec2'

class Slider extends React.Component {

	getWidth() {

		this.setState( { width: $( this.node ).find('.line_full').width() } )

	}

	handleStart( e ) {

		this.start = this.circle.getPos()

	}

	handlePan( e ) {

		this.move( new Vec2( e.deltaX, 0 ).add( this.start ) )
		this.props.progress( this.getCurrentPosition() )

	}

	handlePanEnd() {

		if (this.props.action) {
			this.props.action ( this.getCurrentPosition() )	
		}

		this.circle.setPos( this.position.setY( 0 ) )
		this.progress.setSize( this.position.setY( 2 ) )

	}

	getCurrentPosition() {

		if ( this.circle.getPos().x / this.state.width > 0.01 ) {

			return this.circle.getPos().x / this.state.width

		} else {

			return 0.01

		}

	}

	move ( position ) {

		position = position.clone().min( new Vec2( 0, 0 ) ).max( new Vec2( this.state.width, 0 ) )

		this.position = position

		this.circle.setPos( position )
		this.progress.setSize( position.setY( 2 ) )

	}

	componentDidMount() {
				
		this.node = this.refs.rootNode

		this.getWidth()

		this.circle = new Anchor( $( this.node ).find('.circle_range') )
		this.progress = new Anchor( $( this.node ).find('.line_range') )

		this.hammer = new Hammer( this.node )
		this.hammer.on( 'pan', this.handlePan.bind( this ) )
		this.hammer.on( 'panend', this.handlePanEnd.bind( this ) )


		$( window ).on( 'resize', this.getWidth.bind( this ) )	

	}


	componentWillUpdate( nextProps, nextState ) {

		this.circle.setPos( new Vec2( nextState.width * this.props.default, 0 ) )
		this.progress.setSize( new Vec2( nextState.width * this.props.default, 2 )  )

	}

	componentWillUnmount() {

		$( window ).unbind( 'resize' )	

	}

	render() {

		return (

			<div ref="rootNode" className="range">
				<div className="line_full"></div>
				<div className="circle_range" onMouseDown={ this.handleStart.bind( this ) } onTouchStart={ this.handleStart.bind( this ) }/>
				<div className="line_range" ></div>
			</div>

		)

	}

}


export default Slider

