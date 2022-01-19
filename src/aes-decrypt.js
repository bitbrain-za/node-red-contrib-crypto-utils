module.exports = function (RED) {
	function Decrypt(config) {
		const crypto = require('crypto');
		const algorithm = "aes-256-cbc";

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			const key = msg.payload.key;
			const initVector = msg.payload.initVector;
			let encryptedData = Buffer.from(msg.payload.data, 'hex');

			const decipher = crypto.createDecipheriv(algorithm, key, initVector);

			let decryptedData = decipher.update(encryptedData);
			decryptedData = Buffer.concat([decrypted, decipher.final()]);
			msg.payload = decryptedData;
			node.send(msg);
		});
	}

	RED.nodes.registerType("aes-decrypt", Decrypt);
}
