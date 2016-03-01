import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default class DrawController extends React.Component {

	constructor() {

		super()

		this.state = {

			size: { 
				w: 0,
				h: 0
			},
			lines: ["12", "123","12314"],
			path: [],
			points: [],
			color: "black",
			width: "5"

		}

	}
	
	componentDidMount() {
		
		this.field = $( ReactDOM.findDOMNode( this ) ).find(".field")[0]

		this.line = $( ReactDOM.findDOMNode( this ) ).find("#line")[0]

		this.mouseDown = false

		this.forceUpdate()

		this.calcSize()

		$(window).on( 'resize', () => {

			this.calcSize()

		})

		this.vectors = []

		this.handleDown()

		console.log( this.state.size )

	}


	calcSize() {

		this.state.size.w = this.field.clientWidth

		this.state.size.h = this.field.clientHeight

		this.offsetTop = this.field.offsetTop

		this.offsetLeft = this.field.offsetLeft

		this.forceUpdate()

	}

	handleDown( e ) {

		this.state.lines.push( [] )

		this.state.path.push( {} )
		this.vectors.push( [] )

		this.mouseDown = true

	}

	handleUp() {

		this.mouseDown = false

	}

	addNewPoint( e ) {

		var count = this.state.lines.length - 1

		if ( this.mouseDown &&
			this.state.lines[ count ][ this.state.lines[ count ].length-1 ] != { x: (e.clientX - this.offsetLeft), y: (e.clientY - this.offsetTop)} ) {

			var currentPoit = { 
				x: ( e.clientX - this.offsetLeft ), 
				y: ( e.clientY - this.offsetTop )
			}

			this.state.lines[ this.state.lines.length - 1 ].push( currentPoit )

			if ( this.state.lines[this.state.lines.length - 1].length > 1 ) {

				var vectorCoords = { 
					start: this.state.lines[ count ][ this.state.lines[ count ].length-2 ],
					end: currentPoit
				}

				var vector = this.getFullVector( vectorCoords )

				if ( vector != 0 ) {

					this.vectors[ this.vectors.length-1 ].push( vector )

					this.updateCurve( vector, this.vectors[ this.vectors.length-1 ][ this.vectors[ this.vectors.length-1 ].length-1 ] ) 

				}

			}

			console.log( this.state )

			this.forceUpdate()

		}

	}

	getCoord( point ) {

		return point.x + "," + point.y

	}

	getAngle( vector ) {

		return ( vector.x / this.getModule( vector )  )

	}

	getRadAngle( vector ) {

		if ( vector.y < 0 ) {

			return Math.acos( this.getAngle( vector ))

		} else {

			return Math.acos( this.getAngle( vector )) * -1

		}

	}

	getVector( start, end ) {

		return { x: end.x - start.x, y: end.y - start.y }

	}

	getAddPoint( point, angle, width, type) {

		if( type == "up" ) {

			return { 
				x: ( point.x - width * Math.sin( angle ) ), 
				y: ( point.y - width * Math.cos( angle ) ) 
			}

		} else {

			return { 
				x: ( point.x + width * Math.sin( angle ) ), 
				y: ( point.y + width * Math.cos( angle ) ) 
			}

		}

	}

	getAddPoints( point, angle, width) {

			return [ 
				this.getAddPoint( point, angle, width, "up"), 
				this.getAddPoint( point, angle, width, "down") 
			]

	}

	getModule( vector ) {

		return Math.sqrt( vector.x * vector.x + vector.y * vector.y )

	}

	drawLine( points ) {

		if ( points.length > 1 ) {

			var path = "M" + this.getCoord(points[0])

			for ( i in [1..points.length-1] ) {

				path += " L" + this.getCoord( points[i] )

			}

			this.state.path[ this.state.path.length-1 ] = path

		}

	}

	getFullVector( coords ) {

		var w = this.state.width

		var full = {}

		full.vector = this.getVector( coords.start, coords.end ) 

		var vecModule = this.getModule( full.vector )

		if ( vecModule == 0 ) {

			return 0

		}

		full.baseAngle = this.getRadAngle( full.vector )

		full.koef = w * ( 1 - (vecModule / this.state.size.w * vecModule / this.state.size.w) + 0.5 )

		var vectorsLength = this.vectors[ this.vectors.length-1 ].length

		if( vectorsLength ) {

			var lastKoef = this.vectors[ this.vectors.length-1 ][ vectorsLength - 1 ].koef

		} else {

			var lastKoef = full.koef

		}

		full.start = this.getAddPoints( coords.start, full.baseAngle, lastKoef )

		full.end = this.getAddPoints( coords.end, full.baseAngle, full.koef )

		return full

	}

	getElipticPath( vector, pos, koef ) {

		if( pos == 0 ) {

			return " A " + koef + "," + koef + " 0 0 1" + this.getCoord( vector.start[pos] ) + " L" + this.getCoord( vector.end[pos] )

		} else {

			return " A " + koef + "," + koef + " 0 0 1" + this.getCoord( vector.end[pos] ) + " L" + this.getCoord( vector.start[pos] )

		}
	}

	updateCurve( vector, prevVector ) {

		if ( this.state.path[ this.state.path.length-1 ].full == undefined ) {

			this.initPath( vector )

		} else {

			var path = this.state.path[ this.state.path.length-1 ]

			path.top += this.getElipticPath( vector, 0, prevVector.koef )

			path.bottom = this.getElipticPath( vector, 1, vector.koef ) + " " + path.bottom

			path.full = path.top + path.bottom

			path.full += " A " + this.vectors[this.vectors.length-1][0].koef + "," + this.vectors[this.vectors.length-1][0].koef + " 0 0 1" + this.getCoord( this.vectors[this.vectors.length-1][0].start[0] ) + ' Z'

			this.state.path[ this.state.path.length-1 ] = path

		}

	}

	initPath( vector ) {

		var w = parseInt(this.state.width) 

		var path = {}

		path.top = "M" + this.getCoord( vector.start[0] ) + " L" + this.getCoord( vector.end[0] )

		path.bottom = " L" + this.getCoord( vector.end[1] ) + " L" + this.getCoord( vector.start[1] )

		path.full = path.top + path.bottom

		this.state.path[ this.state.path.length-1 ] = path

	}

}




