module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: 'css-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: "svg-inline-loader"
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
};
