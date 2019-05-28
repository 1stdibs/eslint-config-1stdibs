const path = require('path');
/*
'plugin:prettier/recommended':
    recommended: {
      extends: ['prettier'], // eslint-config-prettier
      plugins: ['prettier'], // eslint-plugin-prettier
      rules: {
        'prettier/prettier': 'error'
      }
    
*/
module.exports = {
    // plugins: ['eslint-plugin-prettier'].map(require.resolve),
    extends: [
        '1stdibs-base',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        './rules/typescript.js',
        './rules/react.js',
    ],
    plugins: ['prettier'],
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
