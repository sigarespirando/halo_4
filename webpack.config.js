const path = require('path');

module.exports = {
  entry: './js/index.js', // Archivo de entrada principal de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida para los archivos generados
    filename: 'bundle.js', // Nombre del archivo de salida
  },
};