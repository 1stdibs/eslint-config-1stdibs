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
        "require-path-exists/tooManyArguments": 1
    }
};
