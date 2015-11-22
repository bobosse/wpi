module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: ['scss/_settings.scss', 'scss/app.scss', 'scss/_main.scss'],
        tasks: ['sass']
      }
    },

    browserSync: {
      bsFiles: {
        src: '**/*.*'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/app.js', 'js/countup.js', 'js/main.js', 'js/waypoints.js']
        }
      }
    },

    htmlmin: { // Task
      dist: { // Target
        options: { // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          'index.html': 'src-index.html'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'foundation-icons/foundation-icons.min.css': ['foundation-icons/foundation-icons.css'],
          'css/app.min.css': ['css/app.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass', 'uglify', 'htmlmin', 'cssmin']);
  grunt.registerTask('default', ['build', 'watch']);
};
