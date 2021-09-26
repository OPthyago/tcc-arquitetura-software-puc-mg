'use strict'

const DeleteConveniadoUseCase = require("../../../app/use-case/conveniado/delete-conveniado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const ConveniadoRepoOracle = require("../../../infrastructure/repository/conveniado-repo-oracle");
const DeleteConveniadoController = require("../../../presentation/controller/conveniado/delete-conveniado-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const conveniadoRepository = new ConveniadoRepoOracle(dbConnectionOracle);
	const deleteConveniadoUseCase = new DeleteConveniadoUseCase(conveniadoRepository);
	
	return new DeleteConveniadoController(deleteConveniadoUseCase);
}