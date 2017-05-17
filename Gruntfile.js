
module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},
		concat: {
		    dist: {
		      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
		      dest: 'dist/built.js',
		    }
		  },
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);

};