module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
    },
    rules: {
        'constructor-super': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-this-before-super': 'error',
        'no-var': 'warn',
        'prefer-const': 'warn',
        strict: 'off',
    },
};
