#! /usr/bin/env node

import * as chalk from 'chalk';
import { Command } from 'commander';

/**
 * @author Tobi Ajibade
 * @description Outputs a shot biography about me.
 * @returns string
 */

function whoAmI() {
    console.info(
      chalk.bold.green(
        "Am a self taught software engineer. I specialize in building seamless backend services with best practices in mind."
      )
    );
};

const program = new Command('bio');

program
.version('1.0.0', '-V, --version', 'outputs the current version');

program
  .alias("b")
  .description("output a shot biography of Tobi Ajibade")
  .action(() => {
    whoAmI();
  });

program.parse(process.argv);