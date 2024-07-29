#!/usr/bin/env node

import { execSync } from 'child_process';
import chalk from 'chalk';
import figlet from 'figlet';

const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error(chalk.red('Please provide a project name.'));
    process.exit(1);
}

const projectName = args[0];
const repoUrl = 'https://github.com/dev-kingz/single-tier.git';

console.log(
    chalk.blue(
        figlet.textSync('DevKingz', { horizontalLayout: 'full' })
    )
);

console.log(chalk.green('Creating your new single-tier app...'));

try {
    execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });
    console.log(
        chalk.blueBright(`\nDevKingz: Your ${chalk.yellow(projectName)} app has been created successfully!`),
        chalk.green("\n\nRun 'npm i' and 'npm run dev' to start developing!")
    );
} catch (error) {
    console.error(
        chalk.red(`\nDevKingz: :( Failed to clone your new single-tier app: ${error.message}`)
    );
    process.exit(1);
}
