'use strict'

const AddPrestadorUseCase = require("../../../app/use-case/prestador/add-prestador-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const PrestadorRepoOracle = require("../../../infrastructure/repository/prestador-repo-oracle");
const AddPrestadorController = require("../../../presentation/controller/prestador/add-prestador-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const prestadorRepository = new PrestadorRepoOracle(dbConnectionOracle);
	const prestadorUseCase = new AddPrestadorUseCase(prestadorRepository);
	
	return new AddPrestadorController(prestadorUseCase);
}