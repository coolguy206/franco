
module.exports = {

  options: {
    flatten: true
  },

  default: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press1.html', 'press2.html', 'press3.html'],
        dest: '',
      },
    ],

  },

  build: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press1.html', 'press2.html', 'press3.html'],
        dest: 'build/',
      },
    ],

  },



};
