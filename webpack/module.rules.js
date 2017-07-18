const {resolve} = require('path');

module.exports = [
	require('./module.rules.sass'),
	require('./module.rules.img'),
	{
		test: /\.html$/,
		use: [{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}]
	},
	{
		test: /\.jsx?$/,
		include: [
			resolve(global.webpack.context, 'src')
		],
		exclude: [/node_modules/],
		use: [{
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react', 'stage-0']
			}
		}]
	},
	{
		test: /\.(png|ico)$/,
		use: [{
			loader: 'url-loader',
			options: {
				limit: 10240,
				outputPath: (url) => {
					console.log(global.webpack.development, 123123123123)
					return `./../build/${url}`
				},
				name: 'img/[name].[ext]'
			}
		}, {
			loader: 'img-loader'
		}]
	},
	{
		test: /\.svg$/,
		use: [{
			loader: 'file-loader',
			options: {
				publicPath: (url) => {
					console.log(url);
					return url.replace('./../build', '')
				},
				outputPath: (url) => {
					console.log(url);
					return `./../build/${url}`
				},
				name: '/img/[name].[ext]'
			}
		}, {
			loader: 'svg-loader'
		}]
	},
	{
		test: /\.ttf$/,
		use: [{
			loader: 'file-loader',
			options: {
				name: '/fonts/[name].[ext]'
			}
		}]
	}
];
