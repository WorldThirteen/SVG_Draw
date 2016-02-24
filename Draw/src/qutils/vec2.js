class Vec2 {

	constructor( x, y ) {

		if( typeof x === 'object' ){

			this.x = x.x
			this.y = x.y

		} else {

			this.x = x
			this.y = y

		}

	}

	get length() {

		return Math.sqrt( this.x * this.x + this.y * this.y )
		
	}

	percent(){

		return {
			x: this.x + '%',
			y: this.y + '%'
		}
		
	}

	add ( vec ) {

		return new Vec2( this.x + vec.x, this.y + vec.y )

	}

	sub ( vec ) {

		return new Vec2( this.x - vec.x, this.y - vec.y )

	}

	multScalar ( vec, scalar ) {

		return new Vec2( this.x * scalar, this.y * scalar )

	}

	invertX(){

		return new Vec2( -this.x, this.y )

	}

	invertY(){

		return new Vec2( this.x, -this.y )

	}

	invert(){

		return new Vec2( -this.x, -this.y )
	}

	mult ( vec ) {

		return new Vec2( this.x * vec.x, this.y * vec.y )

	}

	clone () {

		return new Vec2( this.x, this.y )

	}

	min ( vec ) {

		if ( this.x < vec.x ) {

			this.x = vec.x

		}

		if ( this.y < vec.y ) {

			this.y = vec.y

		}

		return this

	}

	max ( vec ) {

		if ( this.x > vec.x ) {

			this.x = vec.x

		}

		if ( this.y > vec.y ) {

			this.y = vec.y

		}

		return this

	}

	setY( y ) {

	 	this.y = y
	 	
	 	return this

	}

}


export default Vec2