const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}) => {
	global.webpack = {
		context: resolve(__dirname, '..'),
		env: process.env.NODE_ENV || env.production ? 'production' : 'development',
		production: !!env.production,
		development: !env.production
	};
	
	const config = {
		context: global.webpack.context,
		entry: {
			bundle: resolve(global.webpack.context, 'src', 'index.js'),
			index : resolve(global.webpack.context, 'src', 'index.html')
		},
		output: {
			filename: '[name].js',
			path: resolve(global.webpack.context, 'build')
		},
		devServer: {
			contentBase: resolve(global.webpack.context, 'build'),
			port: 9000
		},
		resolve: require('./resolve'),
		module: {
			rules: require('./module.rules')
		},
		plugins: [
			new ExtractTextPlugin({
				filename: '/css/style.css',
				disable: global.webpack.development
			})
		]
	};

	return config
};
