module.exports = {
    extends: ['eslint-config-1stdibs-base', './rules/react', './rules/flowtype'].map(
        require.resolve
    ),
};
