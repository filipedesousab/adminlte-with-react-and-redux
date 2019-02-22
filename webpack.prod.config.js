const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const crp = new ExtractTextPlugin('crp.css'); // Instancia para o Critical Rendering Path
const styles = new ExtractTextPlugin('[name]-[contenthash:8].css'); // Nome gerado automáticamente com uma hash do conteúdo, após a compilação

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'), // Arquivo inicial de entrada, a partir daqui toda a aplicação é carregada

  output: {
    path: path.join(__dirname, 'public'), // Local de saída dos arquivos compilados
    filename: '[name]-[chunkhash:8].js', // Nome gerado automáticamente com uma hash do conteúdo, após a compilação
  },

  resolve: {
    extensions: ['.js', '.jsx'], // As extensões que serão interpretadas pelo webpack

    alias: { // Pseudônimo para pastas e arquivos
      modules: path.join(__dirname, 'node_modules'), // Usado geralmente para importar arquivo de uma dependencia
      common: path.join(__dirname, 'src', 'common'), // Local com componentes e outros arquivos comuns do projeto
      jquery: path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'), // Local onde onde o jQuery está instalado no admin-lte
      bootstrap: path.join(__dirname, 'modules', 'admin-lte', 'bootstrap', 'js', 'bootstrap.js'), // Local onde onde o bootstrap está instalado no admin-lte
    },
  },

  plugins: [
    crp, // Instância do ExtractTextPlugin para o Critical Rendering Path
    styles, // Instância do ExtractTextPlugin para os demais CSS

    new webpack.ProvidePlugin({ // Deixar o jQuery disponível
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlPlugin({ // Gera o html de forma dinâmica
      title: 'VolgClin', // Título a ser exibido na página
      inject: false,
      filename: 'index.html', // Arquivo de saída do HTML gerado
      template: path.join(__dirname, 'src', 'html', 'template.prod.html'), // Template no padrão ejs para gerar o html de forma dinâmica
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
  ],

  module: {
    rules: [{
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo babel
      loader: 'babel-loader', // Babel ajuda a interpretar o código
      exclude: /node_modules|bower_components/, // Ignorar as pastas
      query: {
        presets: [
          'es2015', // Usado para compular ES6 para ES5
          'react', // Usado para compular react(JSX) para JavaScript
        ],
        plugins: ['transform-object-rest-spread'], // Permite a utilização de Spread "..."
      },
    }, {
      test: /\.css$/, // Tratar arquivos CSS
      loader: crp.extract({ // Extrai o código para um arquivo css configurado acima
        fallback: 'style-loader', // Caso alguma coisa dê errado, inclui o css em uma tag <style> dentro do html
        use: 'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
      }),
    }, {
      test: /\.less$/, // Tratar arquivos de código LESS
      loader: styles.extract({ // Extrai o código para um arquivo css configurado acima
        fallback: 'style-loader', // Caso alguma coisa dê errado, inclui o css em uma tag <style> dentro do html
        use: [
          'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
          'less-loader', // Compila LESS para CSS
        ],
      }),
    }, {
      test: /\.(woff2?|ttf|eot|svg)$/, // Configura os arquios a serem carregados na aplicação pelo file
      include: /node_modules/,
      loader: 'file-loader', // Loader para carregar estáticos da aplicação
      query: {
        name: 'fonts/[name]-[hash:8].[ext]', // Nome de saída dos arquivos com hash
      },
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)$/, // Configura os arquios a serem carregados na aplicação pelo file
      include: /src/,
      loader: 'file-loader', // Loader para carregar estáticos da aplicação
      query: {
        name: 'images/[name]-[hash:8].[ext]', // Nome de saída dos arquivos com hash
      },
    }],
  },
};
