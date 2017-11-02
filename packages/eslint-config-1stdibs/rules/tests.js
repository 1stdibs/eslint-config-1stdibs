module.exports = {
    "plugins": [
        "jasmine",
        "mocha"
    ],
    "env": {
        "jasmine": true,
        "phantomjs": true,
        "mocha": true,
        "jest": true
    },
    "globals": {
        "loadFixtures": false,
        "appendLoadFixtures": false,
        "setFixtures": false,
        "sandbox": false,
        "before": false,
        "after": false
    },
    "rules": {
        "jasmine/no-suite-dupes": [1, "branch"],
        "jasmine/no-spec-dupes": [1, "branch"],
        "jasmine/no-focused-tests": 2,
        "mocha/no-exclusive-tests": 2
    }
};
