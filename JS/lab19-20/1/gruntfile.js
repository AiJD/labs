module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
            js: {
                src: ['src/js/*.js','src/js/plagins/*.js'],
                dest: 'js/scriptf.min.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['src/css/reset.css','src/css/fontello.css','src/css/fontubuntu.css','src/css/default.css'],
                dest: 'css/style.css',
                options: {
                    separator: '\n\r'
                }
            },
	  },
	  uglify: {
	    dist: {
	      src: ['js/scriptf.min.js'],
	      dest: 'js/scriptf.min.js',
	    },
	  } ,
	  cssmin: {
  	    target: {
    	      files: [{
      	      	expand: true,
      		cwd: 'css',
      		src: ['style.css'],
      		dest: 'css',
      		ext: '.min.css'
    	     }]
  	   }
	 },
         sass: {
		options: {
			sourceMap: false,
                        linefeed : 'crlf'
		},
		dist: {
			files: {
				'src/css/default.css': 'src/scss/style.scss'
			}
		}
	},
         watch: {
                css: {
                     files: ['src/scss/*.scss','src/js/*.js'],
                     tasks: ['sass','concat','cssmin'/*,'uglify'*/],
                },
         }   
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');                
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');                   
	grunt.loadNpmTasks('grunt-sass');	
	
grunt.registerTask('default',['sass','concat','cssmin','uglify']);
}