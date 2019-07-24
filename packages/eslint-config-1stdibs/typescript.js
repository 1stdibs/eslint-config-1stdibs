module.exports = {
    extends: [
        'eslint-config-1stdibs-base',
        'plugin:@typescript-eslint/recommended',
        './rules/typescript.js',
        './rules/react.js',
    ],
    rules: {
        'react/prop-types': 'off',
    },
};
