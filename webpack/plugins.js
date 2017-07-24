const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	new ExtractTextPlugin({
		filename: '/css/style.css',
		disable: global.webpack.development
	}),

	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(global.webpack.env)
	})
];