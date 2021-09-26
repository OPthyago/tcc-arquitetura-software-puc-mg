'use strict'

const ServerError = require('../error/server-error');

const badRequest = (error) => ({
	statusCode: 400,
	body: error
});

const serverError = (error) => ({
	statusCode: 500,
	body: new ServerError(error.stack)
});

const ok = (data) => ({
	statusCode: 200,
	body: data
});

module.exports = { 
	badRequest,
	serverError,
	ok
}