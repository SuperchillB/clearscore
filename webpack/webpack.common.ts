const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "..", "./dist"),
  },
  devServer: {
    port: "6003", // Specifies port in use
    static: {
      // Specifies the directory webpack will use to serve static files
      directory: path.join(__dirname, "public"),
    },
    open: true, // Automatically opens browser bundling files
    hot: true, // Enables webpack Hot module replacement
    liveReload: true, // Automatically updates the app as you make changes
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Leaves off file extension when importing it. Webpack checks for .tsx extension first, if couldn't find it, will try resolving import with .ts and if not with .js
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader", // Transpiles js files using babel and webpack
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "./public/index.html"),
    }), // Injects main.js file into the index.html file and places that html file in the dist folder
    isDevelopment && new ReactRefreshWebpackPlugin(), // Used for HRM for React components
  ],
};
