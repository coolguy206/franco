
module.exports = {

  options: {
    flatten: true
  },

  default: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press1.html'],
        dest: '',
      },
    ],

  },

  build: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press1.html'],
        dest: 'build/',
      },
    ],

  },



};
