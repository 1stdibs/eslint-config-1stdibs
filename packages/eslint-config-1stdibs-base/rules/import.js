module.exports = {
    plugins: ['import'],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
    rules: {
        'import/extensions': [
            1,
            'always',
            {
                js: 'never',
                jsx: 'never',
            },
        ],
        'import/no-absolute-path': [
            1,
            {
                commonjs: true,
            },
        ],
        'import/no-unresolved': [
            1,
            {
                commonjs: true,
            },
        ],
    },
};
