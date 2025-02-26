module.exports = {
    plugins: ['import'],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
    rules: {
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
        'import/no-absolute-path': [
            'warn',
            {
                commonjs: true,
            },
        ],
        'import/no-unresolved': [
            'warn',
            {
                commonjs: true,
            },
        ],
    },
};
