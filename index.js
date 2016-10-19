'use strict';

module.exports = {
    "env": {
        "commonjs": true,
        "browser": true,
        "es6": false
    },
    "plugins" : [
        "require-path-exists"
    ],
    "rules": {
        "require-path-exists/exists": [1, {
            "extensions": [ '', '.js', '.json', '.node', ".es.js", ".jsx", ".html"]
        }],
        "require-path-exists/notEmpty": 1,
        "require-path-exists/tooManyArguments": 1,
        "no-bitwise": 2,
        "curly": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-extend-native": 1,
        "wrap-iife": 2,
        "no-use-before-define": 2,
        "new-cap": [
            1,
            {
                "capIsNewExceptions": [
                    "Deferred"
                ]
            }
        ],
        "no-caller": 2,
        "no-empty": 2,
        "no-new": 0,
        "no-plusplus": 0,
        "no-undef": 2,
        "no-unused-vars": 1,
        "strict": [
            1,
            "global"
        ],
        "no-trailing-spaces": 1,
        "indent": [
            1,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "semi": [
            2,
            "always"
        ],
        "no-cond-assign": [
            1,
            "always"
        ],
        "no-debugger": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-unused-expressions": 2,
        "block-scoped-var": 2,
        "no-iterator": 1,
        "no-unreachable": 2,
        "no-unexpected-multiline": 2,
        "comma-style": [
            2,
            "last"
        ],
        "no-loop-func": 1,
        "no-multi-str": 1,
        "no-proto": 1,
        "no-script-url": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-shadow": 1,
        "dot-notation": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "consistent-this": [
            1,
            "self"
        ],
        "one-var": [
            1,
            "never"
        ],
        "space-before-function-paren": [
            1,
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "array-bracket-spacing": [
            1,
            "never"
        ],
        "space-in-parens": [
            1,
            "never"
        ],
        "space-unary-ops": [
            1,
            {
                "words": true,
                "nonwords": false
            }
        ],
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "space-infix-ops": [
            1,
            {
                "int32Hint": false
            }
        ],
        "comma-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "comma-dangle": 2,
        "no-with": 2,
        "space-before-blocks": [
            2,
            "always"
        ],
        "no-lonely-if": 1,
        "keyword-spacing": [
            2,
            {"after": true}
        ],
        "no-redeclare": 2,
        "no-inner-declarations": 2,
        "no-underscore-dangle": 0,
        "no-extra-boolean-cast": 1,
        "no-multi-spaces": 1,
        "no-spaced-func": 1,
        "key-spacing": [
            1,
            {
                "mode": "strict",
                "afterColon": true,
                "beforeColon": false
            }
        ],
        "eol-last": 1,
        "vars-on-top": 1,
        "quotes": 0,
        "no-extra-bind": 2,
        "camelcase": 1,
        "no-alert": 1,
        "consistent-return": 1,
        "yoda": 0,
        "no-return-assign": 1
    }
};
