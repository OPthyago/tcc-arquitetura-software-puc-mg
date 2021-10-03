'use strict'

module.exports = {
	description: 'Falha no Servidor',
	content: {
		'application/json': {
			schema: {
				$ref: '#/schemas/error'
			}
		}
	}
}