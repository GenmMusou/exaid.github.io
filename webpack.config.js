const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "pinyougou.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [" style-loader", "css-loader"],
            },
        ],
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: "./html/index.html",
        }),
    ],
};
