
module.exports = {

  options: {
    sourceMap: true,
    presets: []
  },

  default: {
    files: [{
      expand: true,
      cwd: 'js/',
      src: '*.js',
      dest: 'js/babel/'
    }]
  },

};