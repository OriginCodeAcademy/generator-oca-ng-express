'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-oca-express:app', () => {
  beforeAll(() =>
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'bumble-bee'
      })
  );

  it('copys config', () => {
    assert
      .file([
        'package.json',
        'README.md',
        '.editorconfig',
        '.gitignore',
        'gulpfile.js',
        'index.js'
      ]);
  });

  it('copys server', () => {
    assert
      .file([
        './server/api/index.js',
        './server/config/_config.json',
        './server/models/index.js',
        './server/app.js'
      ]);
  });

  it('copys client', () => {
    assert
      .file([
        './client/app/app.module.js',
        './client/index.html',
        './client/styles.css'
      ]);
  });
});
