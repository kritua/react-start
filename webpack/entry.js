const { resolve } = require('path');

module.exports = {
	bundle: resolve(global.webpack.context, 'src', 'index.js'),
	index : resolve(global.webpack.context, 'src', 'index.html')
};