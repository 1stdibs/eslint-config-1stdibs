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
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/indent': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'TSEnumDeclaration',
                message: "Don't declare enums. TypeScript + babel issues",
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
    },
};
