require('dotenv').config();
// console.log(process.env.FTP_USERNAME);
// console.log(process.env.FTP_PASSWORD);
// console.log(process.env.FTP_HOST);


module.exports = {
    default: {
        options: {
            username: process.env.FTP_USERNAME,
            password: process.env.FTP_PASSWORD,
            host: process.env.FTP_HOST,
            dest: "/public_html/franco/franco",
            port: 21,
            incrementalUpdates: false
        },

        files: [
            {
                expand: true,
                cwd: 'build',
                src: ['contact/*', 'css/*', 'js/**/*', 'media/*', 'php/*', 'press/**/*', 'index.html']
            }
        ]
    }
};