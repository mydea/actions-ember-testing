# actions-ember-testing

Sets up problem matchers for Ember tests to get a nicer output for errors.

## What does it do

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
    - uses: rwjblue/setup-volta@v1
    - uses: mydea/actions-ember-testing@v2
    - name: Install dependencies
      run: yarn install
    - name: Run tests
      run: yarn test
    - name: Lint JS
      run: yarn lint:js
    - name: Lint HBS
      run: yarn lint:hbs
```

## Browser timeout

If your tests sometimes fail with the message ` Error: Browser failed to connect within 30s. testem.js not loaded?`,
you can extend this timeout in your testem.js by adding `browser_start_timeout: 60`.

## Note on updating from v1

In v1, this also installed Volta, Node and Yarn for you. 
In v2, this was dropped in favor of using [rwjblue/setup-volta](https://github.com/rwjblue/setup-volta).
