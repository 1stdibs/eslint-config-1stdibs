module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint-config-1stdibs-base',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:import/typescript',
    ],
    rules: {
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
        '@typescript-eslint/indent': 'off',
    },
};
