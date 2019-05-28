module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
        // overwrite plugin rules
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    overrides: [
        {
            files: ['**/*+(_|.)spec.+(js|jsx|ts|tsx)'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
