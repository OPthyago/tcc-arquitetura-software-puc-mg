'use strict'

module.exports = class DbConnectionProtocol {
	
	getConn() {
		throw new Error('method getConn not implemented');
	}

	closeConn() {
		throw new Error('method getConn not implemented');
	}

}