const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "[name][ext]",
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		// contentBase: path.resolve(__dirname, "dist"),
		port: 5001,
		open: true,
		hot: true,
		// watchContentBase: true,
	},
	module: {
		rules: [
			// css
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },

			// images
			{ test: /\.(svg|ico|png|jpg|gif|jpeg)$/, type: "asset/resource" },

			//js for babel
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "demo sfdsgsgd",
			filename: "index.html",
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],
};
