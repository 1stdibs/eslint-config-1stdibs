'use strict';

module.exports = {
    "plugins": [
        "flowtype",
        "flow-vars",
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "script",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "flow-vars/define-flow-type": 1,
        "flow-vars/use-flow-type": 1,
        "react/display-name": [
            1,
            {
                "ignoreTranspilerName": false
            }
        ],
        "react/jsx-boolean-value": 1,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-quotes": 0,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-danger": 0,
        "react/no-did-mount-set-state": [
            2,
            "allow-in-func"
        ],
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": [
            2,
            {
                "ignoreStateless": true
            }
        ],
        "react/no-unknown-property": 2,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 1,
        "react/self-closing-comp": 2,
        "react/sort-comp": 1,
        "react/wrap-multilines": 2
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": true
        }
    }
};
