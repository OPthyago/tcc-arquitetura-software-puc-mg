'use strict'

module.exports = {
	description: 'Não Autorizado',
	content: {
		'application/json': {
			schema: {
				$ref: '#/schemas/error'
			}
		}
	}
}