'use strict'

const UpdateAssociadoUseCase = require("../../../app/use-case/associado/update-associado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const AssociadoRepoOracle = require("../../../infrastructure/repository/associado-repo-oracle");
const UpdateAssociadoController = require("../../../presentation/controller/associado/update-associado-controller");

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const associadoRepository = new AssociadoRepoOracle(dbConnectionOracle);
	const updateAssociadoUseCase = new UpdateAssociadoUseCase(associadoRepository);
	
	return new UpdateAssociadoController(updateAssociadoUseCase);
}