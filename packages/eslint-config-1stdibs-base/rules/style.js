module.exports = {
    rules: {
        camelcase: 'warn',
        'consistent-this': [1, 'self'],
        'new-cap': [
            1,
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
        'one-var': [1, 'never'],
        quotes: 'off',
    },
};
