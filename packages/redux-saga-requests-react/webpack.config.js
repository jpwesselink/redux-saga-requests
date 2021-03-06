module.exports = {
  output: {
    library: 'ReduxSagaRequestsReact',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    redux: {
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
      root: 'Redux',
    },
    'react-redux': {
      commonjs: 'react-redux',
      commonjs2: 'react-redux',
      amd: 'react-redux',
      root: 'ReactRedux',
    },
  },
  devtool: 'source-map',
};
