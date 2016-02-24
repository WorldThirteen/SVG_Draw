React = require('react')

Polyline = React.createClass

	render: ->

		<polyline className="line" points={ @props.points } fill="none" stroke="rgb(0,0,0)"/>

module.exports = Polyline