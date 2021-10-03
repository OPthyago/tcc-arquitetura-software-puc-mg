
const prestadorSchema = require('./prestador/prestadorSchema');
const prestadorParamsSchema = require('./prestador/prestadorParamsSchema');
const associadoSchema = require('./associado/associadoSchema');
const associadoParamsSchema = require('./associado/associadoParamsSchema');
const dependenteSchema = require('./dependente/dependenteSchema');
const dependenteParamsSchema = require('./dependente/dependenteParamsSchema');
const conveniadoSchema = require('./conveniado/conveniadoSchema');
const conveniadoParamsSchema = require('./conveniado/conveniadoParamsSchema');
const errorSchema = require('./returnSchema/errorSchema');

module.exports = {
	prestadorSchema,
	prestadorParamsSchema,
	associadoSchema,
	associadoParamsSchema,
	dependenteSchema,
	dependenteParamsSchema,
	conveniadoSchema,
	conveniadoParamsSchema,
	errorSchema
}