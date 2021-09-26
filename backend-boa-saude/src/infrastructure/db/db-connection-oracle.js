'use strict'

const DbConnectionProtocol = require("../../domain/db/db-connection-protocol")

module.exports = class DbConnectionOracle extends DbConnectionProtocol {
	getConn() {
		return true;
	}

	closeConn() {
		return true;
	}
}