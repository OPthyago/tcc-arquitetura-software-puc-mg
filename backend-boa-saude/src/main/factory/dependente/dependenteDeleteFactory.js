'use strict'

const DeleteDependenteUseCase = require("../../../app/use-case/dependente/delete-dependente-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const DependenteRepoOracle = require("../../../infrastructure/repository/dependente-repo-oracle");
const DeleteDependenteController = require("../../../presentation/controller/dependente/delete-dependente-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const dependenteRepository = new DependenteRepoOracle(dbConnectionOracle);
	const deleteDependenteUseCase = new DeleteDependenteUseCase(dependenteRepository);
	
	return new DeleteDependenteController(deleteDependenteUseCase);
}