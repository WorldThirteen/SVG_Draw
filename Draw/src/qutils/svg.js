import React from 'react'
import Svg_lib from '../helpers/svg_lib'


class SVG extends React.Component {

	findIcon() {

		return { __html: Svg_lib[ this.props.name ].path }

	}

	render() {

		return (

			<svg className={this.props.className} viewBox={ Svg_lib[ this.props.name ].viewBox }  dangerouslySetInnerHTML={ this.findIcon() }/>
			
		)
	}
}


export default SVG
