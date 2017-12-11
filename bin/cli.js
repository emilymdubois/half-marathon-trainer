#!/usr/bin/env node

var meow = require('meow');

var cli = meow({
  help: `
    USAGE: half-marathon-trainer [OPTIONS]

    Options:
      -d, --date          Date of your half marathon
      -p, --plan          Hal Higdon training plan type
  `,
  description: 'Create a half marathon training plan'
}, {
  alias: { d: 'date', p: 'plan' }
});

var fn;
try { fn = require(`../index`); }
catch(err) {
  console.error(err.message);
  cli.showHelp(1);
}

fn(cli.flags, function(err, res) {
  if (err) {
    console.error(err.stack);
    cli.showHelp(1);
  } else {
    console.log(res);
  }
});
