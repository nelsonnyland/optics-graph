const path = require("path");

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
        proxy: {
            "/api": "http://localhost:5000"
        },
        historyApiFallback: true
    }
};