jest.dontMock('../model')
jest.dontMock('uuid')
jest.dontMock('event-emitter')

describe('Model', function() {

	var Model
	var m

	beforeEach(() => {

		Model = require( '../model' )
		m = new Model()

	})

	it( 'create', function() {

		expect( m ).toBeDefined()
		expect( m.attributes ).toBeDefined()


	})

	it( 'must have id', function() {

		expect( m.attributes.id ).toBeDefined()

	})

	it( 'set', function() {

		var id = m.get('id')
		m.set({ foo: 'bar' })

		expect( m.attributes ).toEqual({ foo: 'bar', id: id })

	})

	it( 'get', function() {

		var id = m.get('id')

		m.set({ foo: 'bar' })

		expect( m.get() ).toEqual({ foo: 'bar', id: id })

	})

	// it( 'update', function() {

	// 	var id = m.get('id')

	// 	var ex = {

	// 		cb: ( e ) => {

	// 			return true
	// 		}

	// 	}

	// 	spyOn( ex, 'cb' )

	// 	m.onUpdate( ex.cb )
	// 	m.set({ foo: 'bar' })

	// 	expect( ex.cb ).toHaveBeenCalled()

	// })

})