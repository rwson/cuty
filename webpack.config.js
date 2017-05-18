var webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "index.es5.js"
    },
    module: {
	    loaders: [{
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: "babel-loader",
	        query: {
	            presets: ["es2015", "stage-2"],
	            plugins: ["transform-runtime"]
	        }
	    }]
    },
    plugins: []
}
