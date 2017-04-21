// @flow
/* eslint no-console: 0 */

import program from 'commander';
import chalk from 'chalk';
import loader from '..';

program
  .version('1.0.0')
  .arguments('<address>')
  .action((address) => {
    loader(address, program.output)
    .then(() => process.exit(0))
    .catch((err) => {
      console.log(err);
      switch (err.code) {
        case 'ENOTFOUND':
          console.error(chalk.red(`404: page '${err.config.url}' not found.`));
          break;
        default:
          console.error(chalk.red(err.message));
      }
      process.exit(1);
    });
  })
  .description('Download page')
  .option('-o, --output [path]', 'ouptut path');

program.parse(process.argv);

