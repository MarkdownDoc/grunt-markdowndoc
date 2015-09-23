/*
 * grunt-markdowndoc
 * https://github.com/MarkdownDoc/grunt-markdowndoc
 *
 * Copyright (c) 2015 Daniel Bannert
 * Licensed under the MIT license.
 */

var markdowndoc = require('markdowndoc');

module.exports = function(grunt) {
  function getModus(options) {
    if (options.verbose) {
      return 'verbose';
    } else if (options.debug) {
      return 'debug';
    } else if (options.strict) {
      return 'error';
    }
  }

  function environment() {
    // Defaults.
    var options = this.options({
      noUpdateNotifier: true
    });

    // Instantiate a new MarkdownDoc Environment.
    var env = new markdowndoc.Environment(options.config, getModus(options));

    env.on('error', grunt.log.error);

    return env;
  }

  function ensure(env, options) {
    for (var k of Object.keys(options)) {
      if (typeof options[k] === 'object') {
        env.set(k, options[k][0]);
      } else {
        env.set(k, options[k]);
      }
    }
  }

  grunt.registerMultiTask(
    'markdowndoc',
    'A documentation tool for Markdown.',
    function() {
      // var done   = this.async();
      var target = this.target;
      var env    = environment.call(this);

      function compile(filePair) {
        var src = filePair.orig.src;

        if (!src.length) {
          return grunt.fail.warn('No valid source provided');
        }

        // Emit start event if anyone is listening.
        if (grunt.event.listeners('markdowndoc.start').length > 0) {
          grunt.event.emit('markdowndoc.start', target, src);
        }

        ensure(env, filePair.orig);

        console.log(markdowndoc, markdowndoc(env));

        // markdowndoc(env);
      }

      // Iterate over all specified file groups.
      this.files.forEach(compile);
    }
  );

};
