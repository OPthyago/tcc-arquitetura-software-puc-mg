'use strict'

const PutPrestadorController = require("../../../presentation/controller/prestador/put-prestador-controller");
const UpdatePrestadorUseCase = require("../../../app/use-case/prestador/update-prestador-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const PrestadorRepoOracle = require("../../../infrastructure/repository/prestador-repo-oracle");


module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const prestadorRepository = new PrestadorRepoOracle(dbConnectionOracle);
	const prestadorUseCase = new UpdatePrestadorUseCase(prestadorRepository);
	
	return new PutPrestadorController(prestadorUseCase);
}