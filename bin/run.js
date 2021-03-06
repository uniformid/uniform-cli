const program = require('commander');

// import function to list coffee menu
const list = require('./uniform.js');

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List coffee menu') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);
