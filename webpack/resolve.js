const { resolve } = require('path');

module.exports = {
	modules : [
		resolve(global.webpack.context, 'src'),
		resolve(global.webpack.context, 'node_modules')
	],
	alias : {
		block: resolve(global.webpack.context, 'src', 'blocks'),
		page : resolve(global.webpack.context, 'src', 'pages'),
		vars : resolve(global.webpack.context, 'src', 'pages', 'application', 'sass', 'vars')

	},
	enforceExtension : false,
	extensions : [
		'.js',
		'.scss',
		'.json',
		'.jsx'
	]
};