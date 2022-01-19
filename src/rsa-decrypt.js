module.exports = function (RED) {
	function Decrypt(config) {
		const { privateDecrypt } = require('crypto');

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			var privateKey = msg.payload.privateKey;

			let buffer = Buffer.from(msg.payload.data, 'base64')

			msg.payload = privateDecrypt(privateKey, buffer);

			node.send(msg);
		});
	}

	RED.nodes.registerType("rsa-decrypt", Decrypt);
}