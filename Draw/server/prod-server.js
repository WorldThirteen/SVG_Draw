/* es6 */

"use strict"

import path from 'path'
import express from 'express'
import compression from 'compression'

const port = 3001
const app = express()

app.use( compression() )

app.use( express.static( path.join( __dirname, '../dist' ) ) )

const showIndexContent = function( req, res ) {

	res.sendFile( path.join( __dirname, '../dist/index.html' ) )

}

	


app.get( '*', showIndexContent )

app.listen( port )

console.log( "App was started on " + port )