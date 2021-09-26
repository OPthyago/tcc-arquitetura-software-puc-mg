'use strict'

const PatchPrestadorController = require("../../../presentation/controller/prestador/patch-prestador-controller");
const PatchPrestadorUseCase = require("../../../app/use-case/prestador/patch-prestador-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const PrestadorRepoOracle = require("../../../infrastructure/repository/prestador-repo-oracle");


module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const prestadorRepository = new PrestadorRepoOracle(dbConnectionOracle);
	const prestadorUseCase = new PatchPrestadorUseCase(prestadorRepository);
	
	return new PatchPrestadorController(prestadorUseCase);
}