const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

// const isDev = process.env.NODE_ENV === 'development' // переменная будет хранить режим разработки

const settings = {
  'isDev': process.env.NODE_ENV === 'development',
  get isProd(){   // устанавливаем свойство isProd - противоположным isDev
    return !this.isDev
  },
  'useBabel': false, // используем Бабел(компилятор версий для js)?
  'useJqueru': false, // используем библиотеку jQuery?
  'useNormalize': false, // используем библиотеку normalize.css?
  'useEslint': true, // используем ли Eslint в проекте?
}

console.log('Настройки сборки:')
console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)
Object.entries(settings).forEach(([key, value]) => console.log(`${key} = ${value}`)); // [key, value] - это деструкторизация массива энтри 

const filename = ext => settings.isDev ? `[name].${ext}` : `[name].[hash].${ext}` // в продакшене добавляем хэши для имен файлов

function optimization() { //  управление оптимизацией 
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (settings.isProd) { //  прописываем в зависимости от мода условие - минифицировать или нет
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin()
    ]
  }
  return config;
}

function entries() {
  const entries = ["./index.js"];

  if (settings.useBabel) {
    entries.unshift("@babel/polyfill")
  }

  return entries;
}

// в зависимости от настроек добавляем или нет различные лоадеры  
const jsLoaders = () => {
  loaders = []

  if (settings.useBabel) {
    loaders.push({
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'] // набор плагинов (пресет) для работы бабела
      }
    })
  }

  if (settings.useEslint) {
    loaders.push({
      loader: "eslint-loader"
    })
  }
  return loaders
}

const plagins = () => { // настраиваем плагины в зависимости от isDev
  const base = [
    new HTMLWebpackPlugin({   // сборка хтмл. Добавляются необходимые зависимости, типа скриптов, при этом в исходнике не обязательно их прописывать.
      template: "./index.html",
      minify: {
        collapseWhitespace: settings.isProd
      },
      cache: settings.isProd // если это не делаем, то CleanWebpackPlugin мешает работе лайв-сервера
    }),

    new CleanWebpackPlugin(),   // удаляет кэш и прочее из папки dist

    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }, ],
    }),

    new MiniCssExtractPlugin({  //читает css
      filename: filename('css')
    })
  ]

  if (settings.isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

module.exports = {

  context: path.resolve(__dirname, "src"),

  // mode: "development",

  entry: {
    // main: ["@babel/polyfill", "./index.js"],
    main: entries(),
    analytics: "./analytics.js",
  },

  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: ['.js', '.json', '.png'], // позволяет в импортах не использовать эти разширения
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },

  devtool: settings.isDev ? 'source-map' : 'eval',

  optimization: optimization(),

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*', 'public/**/*'],
    hot: settings.isDev // только в режиме девелопмента
  },

  plugins: plagins(),

  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader"
        ],
      },

      {
        test: /\.s[ac]ss$/, // дибо sass, либо scss
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader"
        ],
      },


      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      }
      //  крашатся картинки загруженные из css если включить
      //   {
      //     test: /\.(png|jpe?g|gif)$/i,
      //     loader: 'file-loader',
      //     options: {
      //         name: '[path][name].[ext]',
      //       },
      //   },
    ],
  },
}