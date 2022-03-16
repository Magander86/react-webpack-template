const path = require("path");
const webpack = require("webpack");

module.exports = {    
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx",".css"]
    },    
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "main.js",        
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: path.resolve(__dirname, "./public"),
        historyApiFallback: true, 
        hot: true,
    }
}
