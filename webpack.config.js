const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/LinkedList/Problems/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}