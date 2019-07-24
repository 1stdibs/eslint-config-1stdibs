module.exports = {
    extends: ['./react'],
    plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-react'],
    rules: {
        // overwrite plugin rules
        'react/prop-types': 'off',
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
