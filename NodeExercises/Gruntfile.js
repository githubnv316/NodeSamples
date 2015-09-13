'use strict'

module.exports = function (grunt) {
	
	grunt.initConfig({

		concat: {
			js: {
				files: {
					'public/js/bundles/lib-bundle.js' : ['public/js/*.js']
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			mytarget: {
				files: {
					'public/js/bundles/lib-bundle.min.js': ['public/js/bundles/lib-bundle.js']
				}
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify')

	grunt.registerTask('default', ['concat', 'uglify']);
};