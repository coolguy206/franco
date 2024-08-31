
module.exports = {

  options: {
    livereload: true
  },

  default: {
    files: ['less/**/*.less', 'html/**/*.html', 'js/*.js'],
    tasks: ['less', 'babel', 'browserify', 'uglify', 'includes'],
  },

};