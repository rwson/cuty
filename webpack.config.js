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
            loader: ["babel"],
            query: {
                presets: ["es2015", "stage-2"],
                plugins: [
                    "transform-es3-property-literals",
                    "transform-es3-member-expression-literals", ["transform-runtime", {
                        "polyfill": false,
                        "regenerator": true
                    }]
                ]
            }
        }]
    },
    plugins: [],
    stats: {
        colors: true
    }
}
