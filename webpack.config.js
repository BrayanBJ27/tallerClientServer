const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              },
            ],
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/ws': {
        target: 'wss://monkfish-app-hcvol.ondigitalocean.app:8080',
        ws: true,
        secure: false, // Si no estás usando SSL en tu servidor WebSocket
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
