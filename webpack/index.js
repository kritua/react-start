const { resolve } = require('path');
const webpack = require('webpack');

module.exports = (env = {}) => {
	global.webpack = {
		context    : resolve(__dirname, '..'),
		env        : process.env.NODE_ENV || env.production ? 'production' : 'development',
		production : !!env.production,
		development: !env.production,
		server     : !!env.server,
		client     : !env.server,
		type       : env.server ? 'server' : 'client'
	};
	
	const config = {
		context: global.webpack.context,
		entry: require('./entry'),
		output: require('./output'),
		resolve: require('./resolve'),
		module: {
			rules: require('./module.rules')
		},
		plugins: require('./plugins')
	};

	if(global.webpack.development) {
		config.devServer = require('./devServer')
	}

	return config
};
