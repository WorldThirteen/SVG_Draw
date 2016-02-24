import reqwest from 'reqwest'

export default {

	create: function( url, data ) {

		return new Promise( function( res, rej ){

			reqwest({
				url: url,
				method: 'post',
				data: data,
				success: res,
				error: rej
			})

		})

	},

	read: function( url, data ) {

		return new Promise( function( res, rej ){
			
			reqwest({
				url: url,
				method: 'get',
				data: data,
				success: res,
				error: rej
			})

		})

	},

	update: function( url, data ) {

		return new Promise( function( res, rej ){
			
			reqwest({
				url: url,
				method: 'put',
				data: data,
				success: res,
				error: rej
			})

		})

	},

	delete: function( url, data ) {

		return new Promise( function( res, rej ){
			
			reqwest({
				url: url,
				method: 'delete',
				data: data,
				success: res,
				error: rej
			})

		})

	}

}