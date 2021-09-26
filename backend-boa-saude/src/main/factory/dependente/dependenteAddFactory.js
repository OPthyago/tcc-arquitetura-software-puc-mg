'use strict'

const AddDependenteUseCase = require("../../../app/use-case/dependente/add-dependente-use-case");
const DbConnectionOracle = require("../../../infrastructure/db/db-connection-oracle");
const DependenteRepoOracle = require("../../../infrastructure/repository/dependente-repo-oracle");
const AddDependenteController = require("../../../presentation/controller/dependente/add-dependente-controller")

module.exports = () => {
	const dbConnectionOracle = new DbConnectionOracle();
	const dependenteRepository = new DependenteRepoOracle(dbConnectionOracle);
	const addDependenteUseCase = new AddDependenteUseCase(dependenteRepository);
	
	return new AddDependenteController(addDependenteUseCase);
}