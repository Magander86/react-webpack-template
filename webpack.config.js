const path = require("path");
const webpack = require("webpack");

module.exports = {    
    entry: path.resolve(__dirname, "./frontend/src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },    
    output: {
        path: path.resolve(__dirname, "./frontend/public"),
        filename: "main.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: path.resolve(__dirname, "./frontend/public"),
        hot: true,
    }
}