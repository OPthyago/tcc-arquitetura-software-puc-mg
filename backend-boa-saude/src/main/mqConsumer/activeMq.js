const Stomp = require("stomp-client");
const mqAdapter = require('./mqAdapter/mqAdapter');
const prestadorAddFactory = require('../factory/prestador/prestadorAddFactory');
const stompClient = new Stomp("127.0.0.1", 61613);

module.exports = () => {
	stompClient.connect(function () {
		console.log("Consumidor conectado");

		stompClient.subscribe("/queue/prestador", mqAdapter(prestadorAddFactory()));
	})
}

