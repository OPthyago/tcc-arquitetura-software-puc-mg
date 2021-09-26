'use strict'

const DeletePrestadorUseCase = require("../../../app/use-case/prestador/delete-prestador-use-case");
const DeletePrestadorController = require("../../../presentation/controller/prestador/delete-prestador-controller");

const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const PrestadorRepoOracle = require("../../../infrastructure/repository/prestador-repo-oracle");


module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const prestadorRepository = new PrestadorRepoOracle(dbConnectionOracle);
	const prestadorUseCase = new DeletePrestadorUseCase(prestadorRepository);
	
	return new DeletePrestadorController(prestadorUseCase);
}