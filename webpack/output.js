const { resolve } = require('path');

module.exports = {
	filename: '[name].js',
	path: resolve(global.webpack.context, 'build')
};