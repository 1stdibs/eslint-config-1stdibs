module.exports = {
    "plugins": [
        "flowtype"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        "es6": true
    },
    "rules": {
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
        "flowtype/boolean-style": [1, "boolean"],
        "flowtype/no-dupe-keys": 1,
        "flowtype/no-primitive-constructor-types": 1,
        "flowtype/no-types-missing-file-annotation": 1,
        "flowtype/require-valid-file-annotation": [1, "never"],
        "flowtype/space-after-type-colon": [1, "always"],
        "flowtype/union-intersection-spacing": [1, "always"]
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
