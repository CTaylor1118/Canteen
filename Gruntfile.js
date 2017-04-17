module.exports = function(grunt) {

  // Project configuration.
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        banner: grunt.file.read('license.js')
      },
      prod: {
        src: ['src/**'],
        dest: 'build/canteen.js'
      }
    },
    uglify: {
      prod: {
        files: {
          'build/canteen.min.js': 'build/canteen.js'
        }
      }
    },
    clean: {
      build: ['build/*'],
      examples: ['examples/build/*']
    },
    jshint: {
      options: {
        laxbreak: true
      },
      all: ['src/**/*.js']
    },
    watch: {
      src: {
        files: ['src/**/*.js'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      }
    }
  };

  grunt.initConfig(config);

  // Load plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('build', ['clean:build', 'browserify', 'uglify:prod']);

};