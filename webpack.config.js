var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: ["./utils", "./app", "webpack/hot/only-dev-server"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},

	devServer: {
		contentBase: 'public'
	},
	watch: true,

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}