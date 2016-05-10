module.exports = function(grunt) {

	grunt.registerTask('hello', function(){	
		console.log('hello from grunt');
		grunt.file.write('build/test.txt', 'this file is written sync');
	});

	grunt.registerTask('hi', ['hello']);

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-concurrent');

	grunt.loadNpmTasks('grunt-nodemon');

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['less','postcss', 'concurrent']);

	grunt.initConfig({

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'public/css/*.css',
				tasks: ['postcss']
			},
			less: {
				files: 'build/css/*.less',
				tasks: ['less']
			},
			html: {
				files: '**/*.html',
				tasks: ['hello']
			}
		},

		less: {
			dev: {
				files: {
					'public/css/styles.css' : 'build/css/styles.less'
				}
			}

		},

		postcss: {
			options: {
				map: true,
				processors: [require('autoprefixer')({browsers: 'last 2 versions'})]
			},
			dev: {
				src: 'public/css/styles.css'
			}
		},

		nodemon: {
			dev: {
				script: 'index.js'
			}
		},

		concurrent: {
			dev: {
				tasks: ['watch', 'nodemon'],
				options: {
					logConcurrentOutput: true
				}
			}
		}

	});
};

