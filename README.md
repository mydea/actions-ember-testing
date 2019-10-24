# actions-ember-testing

Sets up Node, Yarn, as well as problem matchers for ember tests to get a nicer output for errors.

It uses [Volta](https://volta.sh/) to install Node & Yarn. 
If you have custom Volta dependencies defined, it will use them as usual.

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

## Inputs

### `node-version`

The node version to use. Defaults to `'10'`. Set to `''` to avoid installing it.

### `yarn-version`

The yarn version to use. Defaults to `'latest'`. Set to `''`  to avoid installing it.
