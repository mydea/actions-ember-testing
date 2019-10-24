const core = require('@actions/core');
const path = require('path');
const fs = require('fs');
const {exec} = require('@actions/exec');
const tc = require('@actions/tool-cache');

async function run() {
    try {
        // This can be configured for the action
        let nodeVersion = core.getInput('node-version');
        let yarnVersion = core.getInput('yarn-version');

        // Install Volta
        let voltaScriptPath = await tc.downloadTool('https://get.volta.sh');
        await exec(`bash ${voltaScriptPath}`);

        // Install Node & Yarn
        if (nodeVersion) {
            await exec(`/home/runner/.volta/volta install node@${nodeVersion}`);
        }

        if (yarnVersion) {
            await exec(`/home/runner/.volta/volta install yarn@${yarnVersion}`);
        }

        // Add Volta bins to path
        console.log(`##[add-path]/home/runner/.volta/bin`);

        // Add problem matchers for nice output of eslint & tsc errors
        const matchersPath = path.join(__dirname, '.github');
        console.log(`##[add-matcher]${path.join(matchersPath, 'tsc.json')}`);
        console.log(`##[add-matcher]${path.join(matchersPath, 'testem.json')}`);
        console.log(
            `##[add-matcher]${path.join(matchersPath, 'eslint-stylish.json')}`
        );
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
