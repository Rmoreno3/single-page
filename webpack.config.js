const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyPlugin = require('copy-webpack-plugin'); //Nos ayuda a mover archivos.

module.exports = { //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
  entry: ['@babel/polyfill', './src/index.js'], //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
  output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
    path: path.resolve(__dirname, 'dist'), //Creamos el lugar dónde se exportará el proyecto.
    filename: 'main.js' //Este es el nombre del archivo final para producción.
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'], //Extensiones que vamos a utilizar.
  },
  module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    rules: [ //Reglas
      { // Estructura de Babel
        test: /\.m?js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        exclude: /node_modules/, //Excluimos la carpeta de node modules
        use: {
          loader: 'babel-loader',//Utilizar un loader como configuración establecida.
          }
      }
    ]
  },
  plugins: [ //Establecemos los plugins que vamos a utilizar
    new HtmlWebpackPlugin({ //Permite trabajar con los archivos HTML
        inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
        template: './public/index.html', //Dirección donde se encuentra el template principal
        filename: './index.html', //El nombre que tendrá el archivo
      }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/styles/styles.css',
          to: ''
        }
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005
  }
}
