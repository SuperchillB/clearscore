// const webpack = require("webpack");
const ReactRefreshWebpackPluginA = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development", // Sets process.env.node_env to development
  devtool: "cheap-module-source-map", // Devtool recommended by CRA for dev environments (controls generation of source maps)
  plugins: [
    new ReactRefreshWebpackPluginA(), // Adds Hot Reloading to React components (preserves React state)
    //   new webpack.DefinePlugin({
    //     "process.env.name": JSON.stringify("NameTest"), // If we want to pass in more environment variables
    //   }),
  ],
};
