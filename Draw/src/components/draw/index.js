import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Path from './path'
import DrawController from './draw_controller_v2'

import './styles/styles.sass'

export default class Draw extends DrawController {

	changeColor( e ) {

		this.setState({

			color: e.target.id

		})

	}

	changeSize( e ) {

		this.setState({
			width: e.target.value
		})

	}

	handleClear() {

		this.setState({
			lines: [],
			path: [],
			points: []
		})

	}

	render() {

		return ( 

			<div className="p_draw">

				<div className="size">

					<input 
						type="range" 
						min="0.5" 
						max="15" 
						step="0.1" 
						name="size" 
						onChange={ this.changeSize.bind( this ) }
					/>

				</div>

				<div className="clear" onClick={ this.handleClear.bind( this ) }>Clear</div>

				<div className="field_container" ref="container">
					<svg
						className="field"
						viewBox={ "0 0 " + this.state.size.w + " " + this.state.size.h } 
						onMouseDown={ this.onMove.bind( this ) } 
						// onMouseMove={ this.onMove.bind( this ) }
					>
						{
							this.state.path.map( ( value, key) => {

								return (
									<Path 
										path={ value } 
										color={ "rgba(0,0,0, 0.5)" } 
										fill={ "lightgreen" } 
										width={ "0" } 
										key={ key }
									/>
								)

							})

						}
						{

							this.parts[0].vectors.map( ( value, key ) => {

								return (

									<g key={ key }>
										<circle 
											r="5" 
											cx={ value.impactPoint.x } 
											cy={ value.impactPoint.y } 
											fill="rgba(230,0,0,0.5)"
										></circle>
									</g>
								)

							})

						}
					</svg>
				</div>
			</div>

		)

	}

}




