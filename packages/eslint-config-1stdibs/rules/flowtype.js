module.exports = {
    plugins: ['flowtype'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        es6: true,
    },
    rules: {
        'flowtype/define-flow-type': 'warn',
        'flowtype/use-flow-type': 'warn',
        'flowtype/boolean-style': ['warn', 'boolean'],
        'flowtype/no-dupe-keys': 'warn',
        'flowtype/no-primitive-constructor-types': 'warn',
        'flowtype/no-types-missing-file-annotation': 'warn',
        'flowtype/require-valid-file-annotation': ['warn', 'never'],
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};
