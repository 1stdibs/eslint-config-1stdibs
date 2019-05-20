module.exports = {
    env: {
        commonjs: true,
        browser: true,
    },
    extends: [
        './rules/bestPractices',
        './rules/errors',
        './rules/es6',
        './rules/import',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/tests',
        './rules/variables',
    ].map(require.resolve),
    rules: {
        // breaking change for `"object-curly-newline"` from eslint 4 -> 5
        // this rule updates it to support v4 rules
        // https://eslint.org/docs/rules/object-curly-newline#enforce-consistent-line-breaks-inside-braces-object-curly-newline
        'object-curly-newline': ['error', { multiline: true }],
    },
};
