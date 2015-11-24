module.exports = (grunt) ->

  grunt.initConfig
    coffee:
      client:
        files:
          'public/js/app.js': [
            'coffee/init.coffee'
            'coffee/socket.coffee'
            'coffee/helpers/crypto.coffee'
            'coffee/helpers/fileHasher.coffee'
            'coffee/views/*.coffee'
            'coffee/models/*.coffee'
            'coffee/collections/*.coffee'
            'coffee/router/*.coffee'
            'coffee/start.coffee'
          ]
        options: bare: true

    jade:
      client:
        files:
          'public/index.html': [
            'jade/index.jade'
          ]
        options:
          data:
            fs: require('fs')

    watch:
      all:
        files: ['coffee/**/*', 'jade/**/*']
        tasks: ['coffee', 'jade']
        options: spawn: false

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jade'

  grunt.registerTask 'build', ['coffee', 'jade']
  grunt.registerTask 'default', ['watch']
