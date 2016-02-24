import React from 'react'
import { Locations, Location, NotFound } from 'react-router-component'
import { MainPageLayout } from './layout/main'

class PageRoot extends React.Component {

	render() {

		return (
			
			<Locations className='l_root'>

				<Location path="/" handler={ <MainPageLayout/> }/>
				<NotFound handler={ <div id="404"/> }/>

			</Locations>

		)
	}
}


export { PageRoot }