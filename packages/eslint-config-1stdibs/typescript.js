module.exports = {
    extends: [
        'eslint-config-1stdibs-base',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
        './rules/typescript.js',
        './rules/react.js',
    ],
    plugins: ['eslint-plugin-prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': [
            'warn',
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
