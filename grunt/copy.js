
module.exports = {

    css: {
        files: [
            {
                expand: true,
                cwd: 'css/',
                src: ['styles.css'],
                dest: 'build/css/'
            },
        ],
    },

    fonts: {
        files: [
            {
                expand: true,
                cwd: 'fonts/',
                src: ['**'],
                dest: 'build/fonts/'
            },
        ],
    },

    imgs: {
        files: [
            {
                expand: true,
                cwd: 'imgs/',
                src: ['**'],
                dest: 'build/imgs/'
            },
        ],
    },

    html: {
        files: [
            {
                expand: true,
                cwd: '',
                src: ['*.html'],
                dest: 'build/'
            },
        ],
    },

};