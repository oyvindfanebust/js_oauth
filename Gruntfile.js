module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			options: {
				standalone: 'authentication'
			},
			dist: {
				files: {
					'dist/authentication.js': ['src/app.js']
				}
			},
			debug: {
				files: {
					'demo/dist/authentication.js': ['src/app.js']
				},
				options: {
					debug: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['browserify:debug']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['browserify:dist']);
	grunt.registerTask('debug', ['browserify:debug']);
};