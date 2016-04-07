import React from 'react'
import { Locations, Location, NotFound } from 'react-router-component'
import { MainPageLayout } from './layout/main'
import Dec from './dec'

class PageRoot extends React.Component {

	render() {

		return (
			
			<Locations className='l_root'>

				<Location path="/" handler={ <MainPageLayout/> }/>
				<Location path="/dec" handler={ <Dec/> }/>
				<NotFound handler={ <div id="404"/> }/>

			</Locations>

		)
	}
}


export { PageRoot }