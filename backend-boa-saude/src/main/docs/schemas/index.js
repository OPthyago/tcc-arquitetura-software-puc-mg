
const prestadorSchema = require('./prestador/prestadorSchema');
const prestadorParamsSchema = require('./prestador/prestadorParamsSchema');
const errorSchema = require('./returnSchema/errorSchema');

module.exports = {
	prestadorSchema,
	prestadorParamsSchema,
	errorSchema
}