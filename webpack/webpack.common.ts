const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '..', './dist'),
  },
  devServer: {
    port: '6003', // Specifies port in use
    static: {
      // Specifies the directory webpack will use to serve static files
      directory: path.join(__dirname, 'public'),
    },
    open: true, // Automatically opens browser bundling files
    hot: true, // Enables webpack Hot module replacement exchanges, adds, or removes modules while an application is running, without a full reload. to improve performance
    liveReload: true, // Automatically update the app as you make changes
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Leaves off file extension when importing it. Webpack checks for .tsx extension first, if couldn't find it will try resolving import with .ts and if not with .js
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // 'style-loader', // Add/injects css in the dom using style tag
          MiniCssExtractPlugin.loader, // Extracts css into files
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        // If we want to use assets
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        // If we want to use svg or fonts assets
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', './public/index.html'),
    }), // Injects main.js file into the index.html file and place that html file in the dist folder
    isDevelopment && new ReactRefreshWebpackPlugin(), // Used for HRM for React components
  ],
};
