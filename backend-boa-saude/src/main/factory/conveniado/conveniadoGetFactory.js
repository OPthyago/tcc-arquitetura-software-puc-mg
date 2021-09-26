'use strict'

const GetConveniadoUseCase = require("../../../app/use-case/conveniado/get-conveniado-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const ConveniadoRepoOracle = require("../../../infrastructure/repository/conveniado-repo-oracle");
const GetConveniadoController = require("../../../presentation/controller/conveniado/get-conveniado-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const conveniadoRepository = new ConveniadoRepoOracle(dbConnectionOracle);
	const getConveniadoUseCase = new GetConveniadoUseCase(conveniadoRepository);
	
	return new GetConveniadoController(getConveniadoUseCase);
}