module.exports = {
    plugins: ['eslint-plugin-jest'],
    env: {
        'jest/globals': true,
    },
    rules: {
        'jest/valid-expect': 'warn',
        'jest/no-identical-title': 'warn',
        'jest/no-focused-tests': 'error',
    },
};
