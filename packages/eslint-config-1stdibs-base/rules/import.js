module.exports = {
    "plugins": [
        "import"
    ],
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        }
    },
    "rules": {
        "import/extensions": [
            1,
            "always",
            {
                "js": "never",
                "jsx": "never"
            }
        ]
    }
};
