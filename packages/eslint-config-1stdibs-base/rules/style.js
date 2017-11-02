module.exports = {
    "rules": {
        "array-bracket-spacing": [
            1,
            "never"
        ],
        "camelcase": 1,
        "comma-dangle": [
            2,
            {
                "arrays": "ignore",
                "objects": "ignore",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "comma-spacing": [
            1,
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            2,
            "last"
        ],
        "consistent-this": [
            1,
            "self"
        ],
        "eol-last": 1,
        "func-call-spacing": [
            1,
            "never"
        ],
        "indent": [
            1,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            1,
            {
                "mode": "strict",
                "afterColon": true,
                "beforeColon": false
            }
        ],
        "keyword-spacing": [
            2,
            {"after": true}
        ],
        "new-cap": [
            1,
            {
                "capIsNewExceptions": [
                    "Deferred"
                ]
            }
        ],
        "no-bitwise": 2,
        "no-lonely-if": 1,
        "no-mixed-spaces-and-tabs": 2,
        "no-nested-ternary": 1,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-spaced-func": 1,
        "no-trailing-spaces": 1,
        "no-underscore-dangle": 0,
        "one-var": [
            1,
            "never"
        ],
        "quotes": 0,
        "semi": [
            2,
            "always"
        ],
        "space-before-blocks": [
            2,
            "always"
        ],
        "space-before-function-paren": [
            1,
            {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "space-in-parens": [
            1,
            "never"
        ],
        "space-infix-ops": [
            1,
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops": [
            1,
            {
                "words": true,
                "nonwords": false
            }
        ],

    }
};
