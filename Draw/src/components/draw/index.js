import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Path from './path'
import DrawController from './draw_controller'

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
			path: []
		})

	}

	render() {

		return ( 

			<div className="p_draw">

				<div className="color" onChange={ this.changeColor.bind( this ) }>
					<input type="radio" name="color" id="black"/>
					<input type="radio" name="color" id="green"/>
					<input type="radio" name="color" id="red"/>
					<input type="radio" name="color" id="blue"/>
				</div>

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

				<svg
					className="field" 
					viewBox={ "0 0 " + this.state.size.w + " " + this.state.size.h } 
					// onMouseMove={ this.addNewPoint.bind( this ) } 
					// onMouseDown={ this.handleDown.bind( this ) } 
					onMouseDown={ this.addNewPoint.bind( this ) } 
					// onMouseLeave={ this.handleUp.bind( this ) } 
					// onMouseUp={ this.handleUp.bind( this ) }
				>
					
					{
						this.state.path.map( ( value, key) => {

							return (
								<Path 
									path={ value.full } 
									color={ "rgba(0,0,0, 0.5)" } 
									fill={ "lightgreen" } 
									width={ "0" } 
									key={ key }
								/>
							)

						})

					}

					{

						this.state.points.map( ( value, key ) => {

							return (

								<g key={ key }>
									<circle 
										r="15" 
										cx={ value.x } 
										cy={ value.y } 
										fill="rgba(230,0,0,0.5)"
									></circle>
									<text x={ value.x } y={ value.y + 7 }
										fontFamily="sans-serif"
										fontSize="20px"
										textAnchor="middle"
										fill="black">{ key+1 }</text>
								</g>
							)

						})

					}

				</svg>
			</div>

		)

	}

}




