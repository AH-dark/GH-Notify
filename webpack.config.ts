import webpack from "webpack";
import path from "path";
import nodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "exports.main_handler",
        libraryTarget: "assign",
    },
    node: {
        global: true,
    },
    target: "node",
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
            },
        ],
    },
    externals: [nodeExternals()],
};

export default config;
