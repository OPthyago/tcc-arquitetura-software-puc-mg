'use strict'

const GetDependenteUseCase = require("../../../app/use-case/dependente/get-dependente-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const DependenteRepoOracle = require("../../../infrastructure/repository/dependente-repo-oracle");
const GetDependenteController = require("../../../presentation/controller/dependente/get-dependente-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const dependenteRepository = new DependenteRepoOracle(dbConnectionOracle);
	const getDependenteUseCase = new GetDependenteUseCase(dependenteRepository);
	
	return new GetDependenteController(getDependenteUseCase);
}