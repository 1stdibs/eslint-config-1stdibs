module.exports = {
    rules: {
        camelcase: 'warn',
        'consistent-this': ['warn', 'self'],
        'new-cap': [
            'warn',
            {
                capIsNewExceptions: ['Deferred'],
            },
        ],
        'no-bitwise': 'error',
        'no-lonely-if': 'warn',
        'no-nested-ternary': 'warn',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'one-var': ['warn', 'never'],
        quotes: 'off',
    },
};
