# actions-ember-testing

Sets up Node, Yarn, as well as problem matchers for ember tests to get a nicer output for errors.

It uses [Volta](https://volta.sh/) to install Node & Yarn. 
If you have custom Volta dependencies defined, it will use them as usual.

## Inputs

### `node-version`

The node version to use. Defaults to `'10'`. Set to `''` to avoid installing it.

### `yarn-version`

The yarn version to use. Defaults to `'latest'`. Set to `''`  to avoid installing it.


## Example usage

```
uses: mydea/actions-ember-testing@v1
with:
  node-version: '12'
```
