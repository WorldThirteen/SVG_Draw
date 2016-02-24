jest.dontMock('../vec2');

describe('Vec2', function() {

	it( 'add', function() {
		
		var Vec2 = require('../vec2')

		var v1 = new Vec2( 10, 20 )
		var v2 = new Vec2( 7, 10 )

		expect( v1.add( v2 ) ).toEqual( { x: 17, y: 30 } )

	})

	it( 'sub', function() {
		
		var Vec2 = require('../vec2')

		var v1 = new Vec2( 10, 20 )
		var v2 = new Vec2( 7, 10 )

		expect( v1.sub( v2 ) ).toEqual( { x: 3, y: 10 } )
		
	})

	it( 'mult', function() {
		
		var Vec2 = require('../vec2')

		var v1 = new Vec2( 2, 20 )
		var v2 = new Vec2( 4, 10 )

		expect( v1.mult( v2 ) ).toEqual( { x: 8, y: 200 } )
		
	})

	it( 'clone', function() {
		
		var Vec2 = require('../vec2')

		var v1 = new Vec2( 2, 20 )

		expect( v1.clone() ).toEqual( { x: 2, y: 20 } )
		
	})

});