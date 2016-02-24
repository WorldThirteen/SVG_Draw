jest.dontMock('../actions')
jest.dontMock('event-emitter')


describe('Actions', function() {

	it( 'factory', function() {

		var ActionsFactory = require( '../actions' )
		var Actions = ActionsFactory([ 'action' ])

		expect( Actions.action ).toBeDefined()

	})

	it( 'listen', function() {

		var ActionsFactory = require( '../actions' )
		var Actions = ActionsFactory([ 'action' ])

		expect( Actions.action.listen ).toBeDefined()

	})

	it( 'must be called', function() {

		var ActionsFactory = require( '../actions' )
		var Actions = ActionsFactory([ 'action' ])

		var ex = {

			cb: ( e ) => {

				return true
			}

		}

		spyOn( ex, 'cb' )

		Actions.action.listen( ex.cb, ex )
		Actions.action({ foo: 'bar' })

		expect( ex.cb ).toHaveBeenCalledWith({ foo: 'bar' })

	})


})