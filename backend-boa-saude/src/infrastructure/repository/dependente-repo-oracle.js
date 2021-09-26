'use strict'

const DependenteRepoProtocol = require("../../domain/repository/dependente-repo-protocol")

module.exports = class DependenteRepoOracle extends DependenteRepoProtocol {
	
	constructor(dbConnection) {
		super();
		this.dbConnection = dbConnection;
	}

	post(body){
		return ' dependente cadastrado no repository';
	}

	put(body){
		return 'dependente atualizado no repository';
	}

	patch(body){
		return 'dependente atualizado no repository';
	}

	getAll(){
		return 'dependente getAll no repository';
	}

	getById(id){
		return 'dependente getById no repository';
	}
}