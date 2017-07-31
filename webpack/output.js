const { resolve } = require('path');

const result = {
	client : {
		path    : resolve(global.webpack.context, 'build'),
		filename: 'bundle.js'
	},
	server : {
		path    : resolve(global.webpack.context, 'server', 'build'),
		filename: 'index.js'
	}
};

module.exports = result[global.webpack.type];
