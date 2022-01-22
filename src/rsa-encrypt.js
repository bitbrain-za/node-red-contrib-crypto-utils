module.exports = function (RED) {
	function Encrypt(config) {
		const crypto = require('crypto');

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			var publicKey = msg.payload.publicKey;

			if (typeof msg.payload.data == "object") {
				msg.payload.data = JSON.stringify(msg.payload.data);
			}

			let buffer = Buffer.from(msg.payload.data, 'utf8')
			let encrypted = crypto.publicEncrypt(publicKey, buffer);

			msg.payload = encrypted;
			node.send(msg);
		});
	}

	RED.nodes.registerType("rsa-encrypt", Encrypt);
}