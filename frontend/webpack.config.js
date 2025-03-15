const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public/scripts")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        port: 8080,
        proxy: () => ({
            "/api": {
                target: process.env.BACKEND_URL,
                changeOrigin: true
            }
        }),
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL)
        })
    ]
};