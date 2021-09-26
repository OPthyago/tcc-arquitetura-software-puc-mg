'use strict'

const GetAssociadoUseCase = require("../../../app/use-case/associado/get-associado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const AssociadoRepoOracle = require("../../../infrastructure/repository/associado-repo-oracle");
const GetAssociadoController = require("../../../presentation/controller/associado/get-associado-controller");

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const associadoRepository = new AssociadoRepoOracle(dbConnectionOracle);
	const getAssociadoUseCase = new GetAssociadoUseCase(associadoRepository);
	
	return new GetAssociadoController(getAssociadoUseCase);
}