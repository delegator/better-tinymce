module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'skin/frontend/base/default/css/cms-styles.css' : 'skin/frontend/base/default/sass/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'skin/frontend/base/default/sass/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}