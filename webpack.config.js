const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'js/index')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs/static')
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
							}
						},
						{
							loader: 'postcss-loader'
						}
					]
				})
			}
		]
	}
};

