
module.exports = {

  options: {
    livereload: true
  },

  default: {
    files: ['less/*.less', 'html/**/*.html', 'js/*.js', 'php/*.php'],
    tasks: ['less', 'babel', 'browserify', 'uglify', 'includes', 'ftp_push'],
    // tasks: ['less', 'babel', 'browserify', 'includes'],
  },

};