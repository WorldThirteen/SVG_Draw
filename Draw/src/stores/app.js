import { StoreClass, ActionsFactory } from '../qutils'

import RouterEnvironment from 'react-router-component/lib/environment'
import isMobile from 'ismobilejs'

var AppActions = ActionsFactory([ 'setURLPath' ])

class Store extends StoreClass {

	constructor(){

		super()

		this.model( 'state' )
		this.set( 'state.path', window.location.pathname )

		this.defineDevice()
		this.bindActions( AppActions )	

	}

	setURLPath( path ){

		RouterEnvironment.defaultEnvironment.navigate( path )
		this.set( 'state.path', path )

	}

	defineDevice(){

		if ( isMobile.phone ) {

			this.set( 'state.device', 'phone' )

		} else if ( isMobile.tablet ) {

			this.set( 'state.device', 'tablet' )

		} else {

			this.set( 'state.device', 'desktop' )

		}

	}

}

var AppStore = new Store

export { AppStore, AppActions }


