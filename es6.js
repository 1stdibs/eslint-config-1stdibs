'use strict';

module.exports = {
    "ecmaFeatures": {
        "modules": true
    },
    "plugins": [
        "flowtype",
        "flow-vars"
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
        "flow-vars/define-flow-type": 1,
        "flow-vars/use-flow-type": 1,
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
