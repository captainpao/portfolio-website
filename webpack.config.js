const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'index.js',
    libraryTarget: 'umd' // Change this line
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  externals: {
    vscode: 'commonjs vscode'
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'out'),
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './out/index.html'
    })
  ]
};