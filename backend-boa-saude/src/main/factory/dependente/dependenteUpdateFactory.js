'use strict'

const UpdateDependenteUseCase = require("../../../app/use-case/dependente/update-dependente-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const DependenteRepoOracle = require("../../../infrastructure/repository/dependente-repo-oracle");
const UpdateDependenteController = require("../../../presentation/controller/dependente/update-dependente-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const dependenteRepository = new DependenteRepoOracle(dbConnectionOracle);
	const updateDependenteUseCase = new UpdateDependenteUseCase(dependenteRepository);
	
	return new UpdateDependenteController(updateDependenteUseCase);
}