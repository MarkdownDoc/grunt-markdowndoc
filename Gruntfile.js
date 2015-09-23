// Gruntfile.js
'use strict';

module.exports = function (grunt) {
  var path   = require('path');

  // Load all grunt tasks matching the `grunt-*` pattern.
  require('load-grunt-tasks')(grunt);

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, {

    // path to task.js files, defaults to grunt dir
    configPath: [
      path.join(process.cwd(), 'grunt'),
      path.join(process.cwd(), 'tasks')
    ],

    // auto grunt.initConfig
    init: true
  });
};
