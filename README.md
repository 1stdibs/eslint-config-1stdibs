# eslint-config-1stdibs

See documentation on ESLint shareable configs: http://eslint.org/docs/developer-guide/shareable-configs.html

## Installation

```sh
npm install --save-dev eslint-config-1stdibs
```

## Usage

Create an `.eslintrc` like the following:

```json
{
    "extends": ["1stdibs"]
}
```

The main `1stdibs` file contains default rules useful for all environments There are also additional files that add specialty rules:

-   browser
-   node
-   react

These can be added as follows:

```json
{
    "extends": ["1stdibs", "1stdibs/react", "1stdibs/node"]
}
```

Projects can override rules simply by adding additional configuration to the file:

```json
{
    "extends": ["1stdibs"],
    "rules": {
        "no-bitwise": 0
    }
}
```
