module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
        // note you must disable the base rule as it can report incorrect errors
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
    },
};
