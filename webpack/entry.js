const { resolve } = require('path');

const common = {
	client: resolve(global.webpack.context, 'src', 'index.js'),
	server: resolve(global.webpack.context, 'server', 'index.js')
};

const config = {
	client: common.client,
	server: common.server
};

module.exports = config[global.webpack.type];

