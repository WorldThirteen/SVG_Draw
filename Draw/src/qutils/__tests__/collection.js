jest.dontMock('../collection')
jest.dontMock('../model')
jest.dontMock('event-emitter')

describe('Collection', function() {

	var Collection
	var c

	beforeEach(() => {

		Collection = require( '../collection' )
		c = new Collection()

	})

	it( 'create', function() {

		expect( c ).toBeDefined()
		expect( c.list ).toBeDefined()

	})

	it( 'add', function() {

		c.add({ foo: 'bar' })
		expect( c.list.length ).toEqual( 1 )

		c.add({ bar: 'foo' })
		expect( c.list.length ).toEqual( 2 )

	})

	it( 'length', function() {

		c.add({ foo: 'bar' })
		expect( c.length ).toEqual( 1 )

		c.add({ bar: 'foo' })
		expect( c.length ).toEqual( 2 )

	})

	it( 'set', function() {

		c.set( [{ bar: 'foo', id: 10 }] )

		expect( c.at( 0 ).get() ).toEqual({ bar: 'foo', id: 10 })

	})

	it( 'add', function() {

		c.add({ bar: 'foo', id: 10 })

		var res = c.where( 'bar', 'foo' )

		expect( res[0].get() ).toEqual({ bar: 'foo', id: 10 })

	})

	it( 'remove', function() {

		c.add({ bar: 'foo', id: 10 })

		c.remove( 10 )

		expect( c.length ).toEqual( 0 )

	})

	it( 'where', function() {

		c.set( [{ bar: 'foo', id: 10 }] )

		var res = c.where( 'bar', 'foo' )

		expect( res[0].get() ).toEqual({ bar: 'foo', id: 10 })

	})

})