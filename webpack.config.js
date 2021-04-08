const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    library: 'styled-components-helpers',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx|\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
