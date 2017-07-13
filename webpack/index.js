const { resolve } = require('path');
const webpack = require('webpack');

module.exports = () => {
	global.webpack = {
		context: resolve(__dirname, '..')
	};
	
	const config = {
		context: global.webpack.context,
		entry: {
			bundle: resolve(global.webpack.context, 'src', 'index.js')
		},
		output: {
			filename: '[name].js',
			path: resolve(global.webpack.context, 'build')
		},
		devServer: {
			contentBase: resolve(global.webpack.context, 'src'),
			port: 9000
		},
		resolve: require('./resolve'),
		module: {
			rules: [
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
					test: /\.(scss|sass|css)$/,
					use: [{
						loader: 'style-loader',
					}, {
						loader: 'css-loader',
						options: {
							localIdentName: '[local]-[hash:hex:5]'
						}
					}, {
						loader: 'sass-loader'
					}, {
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./src/pages/application/sass/mixins.scss',
								'./src/pages/application/sass/vars.scss'
							]
						}
					}]
				},
				{
					test: /\.(jpe?g|png|ico|gif|ttf|svg)$/,
					use: [{
						loader: 'url-loader'
					}, {
						loader: 'img-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 70
							},
							optipng: {
								optimizationLevel: 5
							}
						}
					}]
				}
			]
		}
	};

	return config
};
