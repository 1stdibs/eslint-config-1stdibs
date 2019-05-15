module.exports = {
    extends: [
        'eslint-config-1stdibs-base',
        './rules/flowtype',
        './rules/react',
        './rules/tests',
    ].map(require.resolve),
    rules: {},
};
