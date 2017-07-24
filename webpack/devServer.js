const { resolve } = require('path');

module.exports = {
	contentBase: resolve(global.webpack.context, 'build'),
	port: 9000,
	historyApiFallback: true
};