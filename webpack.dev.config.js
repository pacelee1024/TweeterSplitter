const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{ 
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader', 
					'sass-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader', 
					'eslint-loader'
				]
			}
		]
	},

	resolve: {
    extensions: ['.js', '.jsx'],
  },

	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			filename: "index.html",
			inject: false
		})
	]
};
