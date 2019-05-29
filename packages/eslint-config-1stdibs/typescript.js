module.exports = {
    extends: [
        'eslint-config-1stdibs-base',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
        './rules/typescript.js',
        './rules/react.js',
    ],
    plugins: ['eslint-plugin-prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
