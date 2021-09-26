'use strict'

const UpdateConveniadoUseCase = require("../../../app/use-case/conveniado/update-conveniado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const ConveniadoRepoOracle = require("../../../infrastructure/repository/conveniado-repo-oracle");
const UpdateConveniadoController = require("../../../presentation/controller/conveniado/update-conveniado-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const conveniadoRepository = new ConveniadoRepoOracle(dbConnectionOracle);
	const updateConveniadoUseCase = new UpdateConveniadoUseCase(conveniadoRepository);
	
	return new UpdateConveniadoController(updateConveniadoUseCase);
}