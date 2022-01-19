module.exports = function (RED) {
	function Encrypt(config) {
		const crypto = require('crypto');
		const algorithm = "aes-256-cbc"; 

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			let key = msg.payload.key;
			let data = msg.payload.data;

			const initVector = crypto.randomBytes(16);
			const cipher = crypto.createCipheriv(algorithm, key, initVector);
			let encryptedData = cipher.update(data);
			encryptedData = Buffer.concat([encryptedData, cipher.final()]);

			msg.payload = 
			{
				encryptedData,
				initVector
			};
			node.send(msg);
		});
	}

	RED.nodes.registerType("aes-encrypt", Encrypt);
}
