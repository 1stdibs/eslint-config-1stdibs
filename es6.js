'use strict';

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
        "strict": 0,
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
        "flowtype/boolean-style": [2, "boolean"],
        "flowtype/no-dupe-keys": 2,
        "flowtype/no-primitive-constructor-types": 2,
        "flowtype/no-types-missing-file-annotation": 2,
        "flowtype/require-valid-file-annotation": [2, "never"],
        "flowtype/space-after-type-colon": [2, "always"],
        "flowtype/union-intersection-spacing": [2, "always"],
        "constructor-super": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 1,
        "prefer-const": 1
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
