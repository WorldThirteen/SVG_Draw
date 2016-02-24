import React from 'react'

class SegueHandler extends React.Component {

	componentWillMount () {

		this.pages = {}

		if (this.props.name) {

			this.name = this.props.name

		} else {

			this.name = 'Unnamed SegueHandler'

		}

		var childrens = this.props.children

		if ( childrens ) {

			if ( childrens.length ) { 

				for (let i = 0; i < childrens.length; i++) {

					this.pages[ childrens[i].props.name ] = childrens[i]

				}

			} else {

				this.pages[ childrens.props.name ] = childrens

			}

		} else {

			console.warn( 'No Components found! Please check your Segue Handler with name: ' + this.props.name )

		}

	}

	pageNotFound() {

		if ( this.pages[ '404' ] ) {

			return this.pages[ '404' ]

		} else {

			console.warn( 'No Components found! Please check your Segue Handler with name: ' + this.props.name )

		}

	}

	defaultPage() {

		var extention = this.props.extention || {}

		if ( this.pages[ this.props.default ]) {

			return React.cloneElement( this.pages[ this.props.default ], extention )

		} else {

			return this.pageNotFound()

		}
		
	}

	render() {

		var extention = this.props.extention || {}

		if ( this.props.query ) {

			if ( this.pages[ this.props.query ] ) {

				return React.cloneElement( this.pages[ this.props.query ], extention )

			} else {

				return this.defaultPage()

			}

		} else {

			return this.defaultPage()

		}

	}

}

export default SegueHandler