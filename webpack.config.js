const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './index.js'
	},
	output: {
		path: __dirname + './src',
		filename: './bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './src')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015', 'react', 'stage-0'] }
				}]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				use: [
					'svg-loader',
					'svg-inline-loader'
				]
			},
			{
				test: /\.(jpg|png|ico|gif)$/,
				use :'img-loader'
			}
		]
	}
}
