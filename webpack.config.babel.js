import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import dev from './webpack.config.dev';
import prod from './webpack.config.prod';

const paths = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
  css: path.join(__dirname, '/src/css'),
  images: path.join(__dirname, '/src/assets/img'),
};

const defaults = {
  entry: {
    app: paths.src,
    style: `${paths.css}/style.css`,
  },
  output: {
    path: paths.dist,
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: paths.src,
        loader: 'babel-loader',
        query: {
          presets: ['airbnb'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vidsy flickr viewer',
      template: './src/index.ejs',
    }),
  ],
};

let config;

if (process.env.npm_lifecycle_event === 'build') {
  // prod config
  config = merge(
    defaults,
    prod({ paths }),
  );
} else {
  // dev config
  config = merge(
    defaults,
    dev({
      paths,
      server: {
        host: process.env.HOST,
        port: process.env.PORT,
      },
    }),
  );
}

export default validate(config);
