# eslint-config-1stdibs

## Breaking Changes

v5.0.0

-   deleted `./rules/test.js` since it contained mocha-specific settings, base config contains `jest` rules
-   deleted flowtype lint rules
-   added new peerDependencies: `eslint@>=5.16.0 <6`, `typescript@>=3.4.5 <4`
