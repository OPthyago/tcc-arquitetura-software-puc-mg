'use strict'

const AddConveniadoUseCase = require("../../../app/use-case/conveniado/add-conveniado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const ConveniadoRepoOracle = require("../../../infrastructure/repository/conveniado-repo-oracle");
const AddConveniadoController = require("../../../presentation/controller/conveniado/add-conveniado-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const conveniadoRepository = new ConveniadoRepoOracle(dbConnectionOracle);
	const addConveniadoUseCase = new AddConveniadoUseCase(conveniadoRepository);
	
	return new AddConveniadoController(addConveniadoUseCase);
}