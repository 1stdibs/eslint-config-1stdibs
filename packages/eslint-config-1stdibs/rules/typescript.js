module.exports = {
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
        // overwrite plugin rules
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
    overrides: [
        {
            // ignore spec files
            files: ['**/*+(_|.)spec.+(js|jsx|ts|tsx)'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
