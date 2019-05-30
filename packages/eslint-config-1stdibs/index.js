module.exports = {
    extends: ['eslint-config-1stdibs-base', './rules/react'].map(require.resolve),
    rules: {},
};
