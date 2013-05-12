/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    buster: {
      test: {
        config: './buster.js'
      },
      server: {
        port: 1111
      }
    },
    lint: {
      files: ['Gruntfile.js', 'tests/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'jshint buster'
    },
    jshint: {
      all: ['travis.js', 'Gruntfile.js', 'tests/*.js'],
      options: {
        jshintrc: '.jshintrc'
      } 
    }
  });
  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task.
  grunt.registerTask('default', ['jshint', 'buster']);
};
