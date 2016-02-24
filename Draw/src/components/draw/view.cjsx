React = require('react')
$ = require('jquery')
ReactDOM = require('react-dom')
Path = require('./path')

Draw = React.createClass

	displayName: 'Draw'

	render: ->

		<svg className="field" viewBox={ "0 0 " + @props.image.size.w + " " + @props.image.size.h }>
			
			{
				@props.path.map ( value, key) =>

					<path className="line" d={ @props.image.path } strokeWidth={ @props.width + "px" } fill="none" stroke={ @props.color }/>

			}

		</svg>

module.exports = Draw