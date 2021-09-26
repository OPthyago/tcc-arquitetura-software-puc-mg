'use strict'

module.exports = (controller) => {
	return async (req, res) => {
		const httpRequest = {
			body: req.body,
			query: req.query
		}

		// const httpQuery = {
		// 	id : req.query.id
		// }
		const httpResponse = await controller.handle(httpRequest);
		if (httpResponse.statusCode === 200) {
			res.status(httpResponse.statusCode).send(httpResponse.body)
		} else {
			console.error(httpResponse.body.stack)
			res.status(httpResponse.statusCode).send({ error: httpResponse.body.message })
		}
	}
}