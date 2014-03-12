/*global module:false*/
module.exports = function(grunt) {

  // set up grunt
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'style/main.css' : 'style/sass/base.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  // Load Watch task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load Sass task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default',['watch']);

};


