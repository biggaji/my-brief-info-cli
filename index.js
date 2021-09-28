#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var commander_1 = require("commander");
/**
 * @author Tobi Ajibade
 * @description Outputs a shot biography about me.
 * @returns string
 */
function whoAmI() {
    console.info(chalk.bold.green("Am a self taught software engineer. I specialize in building seamless backend services with best practices in mind."));
}
;
var program = new commander_1.Command('bio');
program
    .version('1.0.0', '-V, --version', 'outputs the current version');
program
    .alias("b")
    .description("output a shot biography of Tobi Ajibade")
    .action(function () {
    whoAmI();
});
program.parse(process.argv);
