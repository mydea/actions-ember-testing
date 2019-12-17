# actions-ember-testing

Sets up Node, Yarn, as well as problem matchers for Ember tests to get a nicer output for errors.

## What does it do

* Installs Node.js (10.x by default, configurable)
* Installs Yarn (latest by default, configurable)
* Setup problem matchers for nicer error output for:
  * eslint
  * typescript
  * testem
  
Note: `ember-template-lint` adds its own matchers, so no need to do anything more for it.

## Example usage

```yaml
name: Ember CI

on: [push]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - uses: mydea/actions-ember-testing@v1
    - name: Install dependencies
      run: yarn install
    - name: Run tests
      run: yarn test
    - name: Lint JS
      run: yarn lint:js
    - name: Lint HBS
      run: yarn lint:hbs
```

## How does it work

It uses [Volta](https://volta.sh/) to install Node & Yarn. 
If you have custom Volta dependencies defined, it will use them as usual.

## Inputs

### `node-version`

The node version to use. Defaults to `'10'`. Set to `''` to avoid installing it.

### `yarn-version`

The yarn version to use. Defaults to `'latest'`. Set to `''`  to avoid installing it.
