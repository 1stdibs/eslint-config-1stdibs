module.exports = {
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
            1,
            {
                ignoreTranspilerName: false,
            },
        ],
        'react/jsx-boolean-value': 1,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-multi-comp': [
            2,
            {
                ignoreStateless: true,
            },
        ],
        'react/no-unknown-property': 2,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 1,
        'react/prefer-es6-class': [1, 'always'],
        'react/prefer-stateless-function': 1,
        'react/jsx-no-target-blank': 1,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'relay/graphql-syntax': 1,
        'relay/no-future-added-value': 1,
    },
};
