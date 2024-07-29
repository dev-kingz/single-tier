#!/usr/bin/env node

const { execSync } = require('child_process');
const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error('Please provide a project name.');
    process.exit(1);
}

const projectName = args[0];
const repoUrl = 'https://github.com/dev-kingz/single-tier.git';

try {
    execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });
    console.log(`DevKingz: Your ${projectName} app has been created successfully! :)\nRun 'npm i' and 'npm run dev' to start developing!`);
} catch (error) {
    console.error('DevKingz: :( Failed to clone your new single-tier app:', error.message);
    process.exit(1);
}
