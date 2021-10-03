'use strict'

module.exports = {
	post: {
		tags: ['Conveniado'],
		summary: 'API Para cadastrar um conveniado',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/conveniadoParams'
					}
				}
			}
		},
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/conveniado'
						}
					}
				}
			},
			400: {
				$ref: '#components/badRequest'
			},
			401: {
				$ref: '#components/unauthorized'
			},
			500: {
				$ref: '#components/serverError'
			}
		}
	},
	put: {
		tags: ['Conveniado'],
		summary: 'API Para alterar um conveniado',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/conveniadoParams'
					}
				}
			}
		},
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/conveniado'
						}
					}
				}
			},
			400: {
				$ref: '#components/badRequest'
			},
			401: {
				$ref: '#components/unauthorized'
			},
			500: {
				$ref: '#components/serverError'
			}
		}
	},
	get: {
		tags: ['Conveniado'],
		summary: 'API Para retorar uma lista de conveniados',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							type: 'array',
							items: {
								$ref: '#/schemas/conveniadoParams'
							}
						}
					}
				}
			},
			400: {
				$ref: '#components/badRequest'
			},
			401: {
				$ref: '#components/unauthorized'
			},
			500: {
				$ref: '#components/serverError'
			}
		}
	}
}