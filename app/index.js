
const yargs = require("yargs")
const calc = require("./lib/calculator")

yargs
  .command('add', 'calculate sum of two numbers', () => {
    yargs.option('first', {
        describe: 'first value',
        demandOption: true,
        type: 'number'
      })
      yargs.option('second', {
          describe: 'second value',
          demandOption: true,
          type: 'number'
        })
  }, (argv) => {
    console.log(`Result=${calc.add(argv.first, argv.second)}!`)
  })
  .command('mult', 'calculate multiplication of two numbers', (yargs) => {
    yargs.option('first', {
      describe: 'first value',
      demandOption: true,
      type: 'number'
    })
    yargs.option('second', {
        describe: 'second value',
        demandOption: true,
        type: 'number'
      })
  }, (argv) => {
    console.log(`Result=${calc.mult(argv.first, argv.second)}!`)
  })
  .argv