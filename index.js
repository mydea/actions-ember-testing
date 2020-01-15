const core = require('@actions/core');
const path = require('path');

async function run() {
    try {
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