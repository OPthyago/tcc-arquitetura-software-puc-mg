'use strict'

module.exports = {
	description: 'Bad Request',
	content: {
		'application/json': {
			schema: {
				$ref: '#/schemas/error'
			}
		}
	}
}