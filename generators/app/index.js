'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const questions = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }];

    return this.prompt(questions).then(answers => {
      this.props = answers;
      this.log(answers.name);
    });
  }

  _copy(source, dest, vm) {
    this.fs[vm ? 'copyTpl' : 'copy'](
      this.templatePath(source),
      this.destinationPath(dest),
      vm
    );
  }

  copyConfig() {
    this._copy('_package.json', 'package.json', {
      name: this.props.name
    });

    this._copy('_README.md', 'README.md', {
      name: this.props.name
    });

    this._copy('.editorconfig', '.editorconfig');
    this._copy('.gitignore', '.gitignore');
    this._copy('gulpfile.js', 'gulpfile.js');
    this._copy('index.js', 'index.js');
  }

  copyServer() {
    this._copy('server', 'server');
  }

  copyClient() {
    this._copy('client', 'client');
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
