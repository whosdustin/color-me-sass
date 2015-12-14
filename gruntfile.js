'use strict';
module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfigs({
    bump: {
      options: {
        files: ["package.json", "bower.json"],
        commitMessage: ":shipit: v%VERSION%",
        commitFiles: ["package.json", "bower.json"],
        push: true,
        pushTo: 'origin'
      }
    }
  });

};
