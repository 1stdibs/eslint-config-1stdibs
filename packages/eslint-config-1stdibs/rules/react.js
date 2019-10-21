module.exports = {
    extends: ['prettier/react'],
    plugins: ['react', 'react-hooks', 'relay'],
    settings: {
        react: {
            version: '16.5',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/display-name': [
            'warn',
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/jsx-boolean-value': 'warn',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-multi-comp': [
            'error',
            {
                ignoreStateless: true,
            },
        ],
        'react/no-unknown-property': 'error',
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'warn',
        'react/prefer-es6-class': ['warn', 'always'],
        'react/prefer-stateless-function': 'warn',
        'react/jsx-no-target-blank': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // relay
        'relay/graphql-syntax': 'warn',
        'relay/no-future-added-value': 'warn',
    },
};
