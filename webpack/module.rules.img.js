const {resolve} = require('path');

module.exports = {
	test: /\.(jpe?g|png|gif)$/,
	use: [{
		loader: 'url-loader',
		options: {
			limit: 10240,
			name: '/img/[name].[ext]',
			outputPath: () => {console.log(process.env.NODE_ENV || global.webpack.env)}
		}
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
};