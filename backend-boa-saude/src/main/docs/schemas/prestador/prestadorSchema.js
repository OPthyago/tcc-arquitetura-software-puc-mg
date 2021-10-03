'use strict'

const successSchema = require('../successSchema')

module.exports = successSchema(
	{
		insertId: {
			type: 'integer'
		}
	}
)