import React from 'react'
import { render } from 'react-dom'
import { PageRoot } from './components/root'
import Point from './utils/point'

window.Point = Point

render( <PageRoot/>, document.querySelector('#root') )



