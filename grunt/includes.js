
module.exports = {

  options: {
    flatten: true
  },

  default: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press/franco-finn-doesnt-have-a-jump-shot-but-hes-an-nba-all-star-this-weekend/index.html', 'press/warriors-biggest-hype-man-has-a-day-job-hype-up-everyone-else/index.html', 'press/warriors-hype-man-earns-nba-all-star-honor-heres-why-his-booming-voice-matters/index.html'],
        dest: '',
      },
    ],

  },

  build: {

    files: [

      {
        cwd: 'html/',
        src: ['index.html', 'press/franco-finn-doesnt-have-a-jump-shot-but-hes-an-nba-all-star-this-weekend/index.html', 'press/warriors-biggest-hype-man-has-a-day-job-hype-up-everyone-else/index.html', 'press/warriors-hype-man-earns-nba-all-star-honor-heres-why-his-booming-voice-matters/index.html'],
        dest: 'build/',
      },
    ],

  },



};
