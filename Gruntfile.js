"use strict"

module.exports = function(grunt){

	// Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var appConfig = {
  	app : "app",
  	dist : "build"
  };

  grunt.initConfig({
  	
  	//Project Settings
  	myApp : appConfig,

  	watch : {
      options : {
        livereload : true
      },
      all : {
        files : [
          '<%= myApp.app %>/{,*/}*.js',
          '<%= myApp.app %>/assets/{,*/}*.scss',
          '<%= myApp.app %>/{,*/}*.html',
          'Gruntfile.js'
        ],
        tasks: 'build'
      }

  	},

 	// The actual grunt server settings
  	connect : {
  		options : {
  			port : 9000,
  			hostname : 'localhost',
  			livereload : 35729
  		},
  		livereload : {
  			options : {
  				open : true,
          base : '<%= myApp.dist %>'
  				// learn about middleware oprtion
  			}
  		}
  	},

    // Automatically inject Bower components into the app
    bower : {
      install: {
        options: {
          targetDir : 'lib'
        }     
      }
    },
    bowerInstall :{
      app : {
        src : '<%= myApp.app %>/index.html'
      }
    },

  	// Empties folders to start fresh
  	clean :['<%= myApp.dist %>/'],


  	// Renames files for browser caching purposes, check whether needed or not
    rev: {
      dist: {
        files: {
          src: [
            '<%= myApp.dist %>/*.js'
          ]
        }
      }
    },

    sass: {                               
        dist: {                           
          files: {                        
            '<%= myApp.app %>/assets/css/style.css': '<%= myApp.app %>/assets/css/style.scss'   
          }
        }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them

    useminPrepare : {
    	html : '<%= myApp.app %>/index.html',
    	options : {
    		dest : '<%= myApp.dist %>',
    		flow : {
    			html : {
    				steps : {
    					concat : ['concat'], 
    					uglify : ['uglifyjs'],
              js : ['concat', 'uglifyjs'],
    					css : ['cssmin']
    				},
    				post : {}
    			}
    		}
    	}
    },

    // Performs rewrites based on filerev and the useminPrepare configuration

    usemin : {
    	html : ['<%= myApp.dist %>/index.html'],
    	css : ['<%= myApp.dist %>/assets/{,*/}*.css'],
      options: {
        blockReplacements: {
            'uglify': function (block) {
                return '<script src="' + block.dest + '"></script>';
            },
            'concat': function (block) {
                return '<script src="' + block.dest + '"></script>';
            }
          }
      }
      
    },

    // Copies remaining files to places other tasks can use
    copy : {
    	dist : {
    		files : [
					{ 	expand: true, cwd: '<%= myApp.app %>', src: ['index.html', 'partials/**', 'models/**', 'assets/images/**'], dest: '<%= myApp.dist %>', filter: 'isFile' }
				]
    	}
    }

  });

	grunt.registerTask('serve', [
	      'clean',
        'revision',
	      'connect:livereload',
	      'watch:all'
	    ]);

  grunt.registerTask('revision', [
    'bowerInstall',
    'copy:dist',
    'useminPrepare',
    'concat',
    'sass',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
    ]);

	grunt.registerTask('build', [
		'clean',
    'bower',
    'revision'
	]);

	grunt.registerTask('default', [
		'build'
	]);


}