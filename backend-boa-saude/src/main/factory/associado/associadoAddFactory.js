'use strict'

const AddAssociadoUseCase = require("../../../app/use-case/associado/add-associado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const AssociadoRepoOracle = require("../../../infrastructure/repository/associado-repo-oracle");
const AddAssociadoController = require("../../../presentation/controller/associado/add-associado-controller");

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const associadoRepository = new AssociadoRepoOracle(dbConnectionOracle);
	const addAssociadoUseCase = new AddAssociadoUseCase(associadoRepository);
	
	return new AddAssociadoController(addAssociadoUseCase);
}