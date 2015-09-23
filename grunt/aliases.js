module.exports = {
  'test': [
    'jsonlint:dev',
    'jscs:dev',
    // 'eslint',
    'jshint:dev',
  ],
  'default': [
    'clean',
    'test',
    'markdowndoc:test'
  ]
};
