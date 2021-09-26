'use strict'

module.exports = (controller) => {
	return (body, headers) => {
		console.log(headers)
		const httpRequest = {
			body : JSON.parse(body)
		}
	
		const httpResponse = controller.handle(httpRequest);
		
		// TODO: Log httpResponse
	}
}