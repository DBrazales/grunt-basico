module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    //uglify
        uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      js: {
        files: [{
          cwd: 'js/src/',  // ruta de nuestro javascript fuente
          expand: true,    // ingresar a las subcarpetas
          src: '*.js',     // patrón relativo a cwd
          dest: 'js/min/'  // destino de los archivos compresos
        }]
      }
    }
  });
	  // cargamos grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Registramos la tarea default
	// que ejecutará la tarea grunt uglify
	grunt.registerTask('default', ['uglify']);
};
