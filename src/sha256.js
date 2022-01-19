module.exports = function (RED) {
	function Hash(config) {
		const crypto = require('crypto');

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			const hash = crypto.createHash('sha256').update(msg.payload).digest();
			msg.payload = hash;
			node.send(msg);
		});
	}

	RED.nodes.registerType("sha256", Hash);
}
