'use strict'

const successSchema = require('../returnSchema/successSchema')

module.exports = successSchema(
	{
		insertId: {
			type: 'integer'
		}
	}
)