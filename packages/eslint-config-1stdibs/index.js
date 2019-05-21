module.exports = {
    extends: ['eslint-config-1stdibs-base', './rules/flowtype', './rules/react'].map(
        require.resolve
    ),
    rules: {},
};
