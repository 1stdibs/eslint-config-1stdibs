module.exports = {
    "env": {
        "commonjs": true,
        "browser": true
    },
    "extends": [
        "./rules/bestPractices",
        "./rules/errors",
        "./rules/es6",
        "./rules/import",
        "./rules/node",
        "./rules/requirePathExists",
        "./rules/strict",
        "./rules/style",
        "./rules/variables"
    ].map(require.resolve)
};
