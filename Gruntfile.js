module.exports = function (grunt) {

	// Default task(s).
	grunt.registerTask('hello', function () {
		console.log('hello world from Grunt!');
	});

	require('load-grunt-config')(grunt);

	require('load-grunt-tasks')(grunt);

};