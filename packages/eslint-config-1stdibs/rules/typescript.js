module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
        'react/prop-types': 'off',
        // overwrite plugin rules
        camelcase: 'off',
        '@typescript-eslint/camelcase': [
            'error',
            {
                ignoreDestructuring: true,
            },
        ],
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
