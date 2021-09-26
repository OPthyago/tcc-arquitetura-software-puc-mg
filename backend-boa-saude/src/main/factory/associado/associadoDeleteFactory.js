'use strict'

const DeleteAssociadoUseCase = require("../../../app/use-case/associado/delete-associado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const AssociadoRepoOracle = require("../../../infrastructure/repository/associado-repo-oracle");
const DeleteAssociadoController = require("../../../presentation/controller/associado/delete-associado-controller");

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const associadoRepository = new AssociadoRepoOracle(dbConnectionOracle);
	const deleteAssociadoUseCase = new DeleteAssociadoUseCase(associadoRepository);
	
	return new DeleteAssociadoController(deleteAssociadoUseCase);
}