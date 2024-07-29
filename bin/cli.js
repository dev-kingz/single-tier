#!/usr/bin/env node

const { execSync } = require('child_process');
const figlet = require('figlet');
const ora = require('ora');
const args = process.argv.slice(2);

// Function to load chalk dynamically
async function loadChalk() {
    const chalk = await import('chalk');
    return chalk.default;
}

if (args.length !== 1) {
    console.error('Please provide a project name.');
    process.exit(1);
}

const projectName = args[0];
const repoUrl = 'https://github.com/dev-kingz/single-tier.git';

(async () => {
    const chalk = await loadChalk();

    console.log(
        chalk.blue(
            figlet.textSync('DevKingz', { horizontalLayout: 'full' })
        )
    );

    console.log(chalk.green('Creating your new single-tier app...\n'));

    const spinner = ora('Cloning repository...').start();

    try {
        execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });
        spinner.succeed('Repository cloned successfully.');

        console.log(
            chalk.blueBright(`\nDevKingz: Your ${chalk.yellow(projectName)} app has been created successfully!`),
            chalk.green("\n\nRun the following commands to start developing:\n"),
            chalk.cyan(`cd ${projectName}`),
            chalk.cyan(`npm install`),
            chalk.cyan(`npm run dev`),
            chalk.green("\nHappy coding!\n")
        );
    } catch (error) {
        spinner.fail('Failed to clone repository.');
        console.error(
            chalk.red(`\nDevKingz: :( Failed to clone your new single-tier app: ${error.message}`)
        );
        process.exit(1);
    }
})();
