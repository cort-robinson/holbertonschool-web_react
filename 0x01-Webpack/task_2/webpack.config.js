import { resolve } from 'path';

const config = {
  entry: './js/dashboard_main.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      }
    ]
  }
};

export default config;
