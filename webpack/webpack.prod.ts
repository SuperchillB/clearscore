// const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production', // Sets process.env.node_env to production
  devtool: 'source-map', // Devtool recommended by CRA for prod environments (controls generation of source maps)
  devServer: {
    open: true, // Automatically opens browser bundling files
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    //   new webpack.DefinePlugin({
    //     "process.env.name": JSON.stringify("NameTest"), // If we want to pass in more environment variables
    //   }),
  ],
};
