React = require('react')

Path = React.createClass

	render: ->

		<path fill-rule="evenodd" className="line" d={ @props.path } strokeWidth={ @props.width + "px" } fill={ @props.fill } stroke={ @props.color }/>

module.exports = Path