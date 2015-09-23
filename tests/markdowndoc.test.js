
'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tape');

test('markdowndoc', function (assert) {
  assert.plan(3);

  assert.ok(
    fs.existsSync(path.resolve(__dirname, 'markdowndoc')),
    'Should create a `markdowndoc` dir'
  );

  assert.ok(
    fs.existsSync(path.resolve(__dirname, 'markdowndoc/index.html')),
    'Should create markdowndocs index'
  );

  assert.ok(
    fs.existsSync(path.resolve(__dirname, 'markdowndoc/assets')),
    'Should dump MarkdownDoc assets'
  );

});