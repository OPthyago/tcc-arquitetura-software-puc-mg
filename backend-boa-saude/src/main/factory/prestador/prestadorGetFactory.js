'use strict'

const GetPrestadorUseCase = require("../../../app/use-case/prestador/get-prestador-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const PrestadorRepoOracle = require("../../../infrastructure/repository/prestador-repo-oracle");
const GetPrestadorController = require("../../../presentation/controller/prestador/get-prestador-controller");


module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const prestadorRepository = new PrestadorRepoOracle(dbConnectionOracle);
	const prestadorUseCase = new GetPrestadorUseCase(prestadorRepository);
	
	return new GetPrestadorController(prestadorUseCase);
}