var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: ["./utils", "./app"],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/public/assets/',
		filename: "bundle.js"
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	],
	devServer: {
		contentBase: 'public'
	},
	watch: true,

	module: {
		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$|\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}