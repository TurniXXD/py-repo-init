const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'source-map',

	resolve: {
		alias: {
			"@": path.resolve(__dirname, './src/'),
			"@components": path.resolve(__dirname, './src/components/'),
			"@img": path.resolve(__dirname, './src/img/'),
			"@css": path.resolve(__dirname, './src/css/'),
		}
	},

	entry: {
		main: '/src/js/main.js',
		// pages
		index: '/src/js/index.js',
	},

	output: {
		filename: '[name].[hash:20].js',
		path: buildPath
	},

	module: {
		rules: [
			// load JS
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			},
			// load CSS
			{
				test: /\.css$/,
				use: [
				"style-loader",
				"css-loader"
				]
			},
			// load images (base64 < 8192B)
			{
				test: /\.(png|jpg|gif|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][hash].[ext]'
				}
			},
			// load icons
			{
				test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
				type: 'asset/resource'
			},
			// load testing "interface"
			{
				test: /\test\.(js$|css)/,
				use: 'mocha-loader',
				exclude: /node_modules/
			},
			// inline SVGs
			{
				test: /\.svg$/,
				use: 'html-loader'
			}
		]
	},


	plugins: [
		new CleanWebpackPlugin({}),
		/* INDEX */
		new HtmlWebpackPlugin({
			template: '/src/index.html',
			inject: true,
			chunks: ['main', 'index'],
			filename: 'index.html',
			minify: {
				removeRedundantAttributes: false,
			}
		}),
	],
	output: {
		filename: '[name].[contenthash].js',
		 path: path.resolve(__dirname, 'dist'),
	},
};