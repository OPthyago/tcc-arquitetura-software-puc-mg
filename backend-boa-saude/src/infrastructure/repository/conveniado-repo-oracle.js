'use strict'

const ConveniadoRepoProtocol = require("../../domain/repository/conveniado-repo-protocol")

module.exports = class ConveniadoRepoOracle extends ConveniadoRepoProtocol {
	
	constructor(dbConnection) {
		super();
		this.dbConnection = dbConnection;
	}

	post(body){
		return 'conveniado cadastrado no repository';
	}

	put(body){
		return 'conveniado atualizado no repository';
	}

	patch(body){
		return 'conveniado atualizado no repository';
	}

	getAll(){
		return 'conveniado getAll no repository';
	}

	getById(id){
		return 'conveniado getById no repository';
	}
}