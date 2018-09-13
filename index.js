#!/usr/bin/env node

const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('./package.json').engines.node

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'uniform-cli')

const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const slash = require('slash');

const program = require('commander');
const loadCommand = require('./lib/util/loadCommand')

program
  .version(require('./package.json').version)
  .usage('<command> [options]')


  program
    .command('uni <app-name>')
    .description('create a new project powered by vue-cli-service')
    .action((name, cmd) => {
      const options = cleanArgs(cmd)
      // --no-git makes commander to default git to true
      if (process.argv.includes('-g') || process.argv.includes('--git')) {
        options.forceGit = true
      }
      function hello() {
        return 'nello'
      }
    })
