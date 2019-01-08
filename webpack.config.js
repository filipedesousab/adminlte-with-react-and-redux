const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src','index.jsx'), // Arquivo inicial de entrada, a partir daqui toda a aplicação é carregada
  output: {
    path: path.join(__dirname, 'public'), // Pasta de saída do arquivo do webpack
    filename: 'bundle.js', // Nome do arquivo criado pelo webpack
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3030,
    contentBase: path.join(__dirname, 'public'), // Pasta para iniciar o modo de desenvolvimento
  },
  resolve: {
    extensions: ['.js', '.jsx'], // As extensões que serão interpretadas pelo webpack
    alias: {
      modules: path.join(__dirname, 'node_modules'),
      common: path.join(__dirname, 'src', 'common'),
      jquery: path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'), // Lugar onde onde o jQuery está intelado no admin-lte
      bootstrap: path.join(__dirname, 'modules', 'admin-lte', 'bootstrap', 'js', 'bootstrap.js'), // Lugar onde onde o bootstrap está intelado no admin-lte
    },
  },
  plugins: [
    new webpack.ProvidePlugin({ // Deixar o jQuery disponível
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new ExtractTextPlugin('app.css'), // Apontando qual o arquivo css será gerado após a compilação
  ],
  module: {
    rules: [{
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo babel
      loader: 'babel-loader', // Babel ajuda a interpretar o código
      exclude: /node_modules|bower_components/, // Ignorar as pastas
      query: {
        presets: ['es2015', 'react'], // es2015 para usar as configuraçõe do ES6, react para as configurações do react(JSX)
        plugins: ['transform-object-rest-spread'], // transform-object-rest-spread permite a utilização de Spread "..."
      },
    }, {
      test: /\.css$/, // Configura os arquios a serem lidos pelo style-loader e css-loader
      loader: ExtractTextPlugin.extract({ // Loaders para tratar os arquivos de estilos
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }, {
      test: /\.less$/, // Configura os arquios a serem lidos pelo style-loader e css-loader
      loader: ExtractTextPlugin.extract({ // Loaders para tratar os arquivos de estilos
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      }),
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/, // Configura os arquios a serem carregados na aplicação pelo file
      loader: 'file-loader', // Loader para carregar estáticos da aplicação
    }],
  },
};
