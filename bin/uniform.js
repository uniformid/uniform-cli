'use strict'

const fs = require('fs')
const chalk = require('chalk')
const inquirer = require('inquirer')

const command = {
  type: 'input',
  name: 'name',
  message: "What's modules do you want to create ?"
}

inquirer
  .prompt(command)
  .then(({ name }) => {
    fs.mkdir('./modules/' + name, function(err) {
      if (err) {
        console.log(chalk.red('failed to create directory ', err))
      } else {
        console.log(chalk.cyan('success create modules folder ' + name))

        let arrPromise = []
        let arrModules = ['actions', 'mutations', 'index']

        for (var i = 0; i < arrModules.length; i++) {
          let valueModules = arrModules[i]
          arrPromise.push(new Promise(function(resolve, reject) {
            fs.readFile('./lib/modules-vuex/' + arrModules[i] + '.txt', 'utf8', function(err, data) {
              if (err) {
                reject(err)
              } else {
                fs.writeFile(`./modules/${name}/${valueModules}.js`, data, function(err) {
                    if (err) throw err
                    resolve('done generate ' + valueModules + ' in modules ' + name + '\n')
                })
              }
            })
          }))
        }
        Promise
          .all(arrPromise)
          .then(function(res) {
            console.log(chalk.cyan(res))
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  })
