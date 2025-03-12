const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
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
        static: "./public",
        proxy: {
            "/api": "http://localhost:5000"
        }
    }
};