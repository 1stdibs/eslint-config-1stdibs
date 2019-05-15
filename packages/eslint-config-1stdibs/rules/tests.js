module.exports = {
    plugins: ['mocha'],
    env: {
        phantomjs: true,
        mocha: true,
        jest: true,
    },
    globals: {
        loadFixtures: false,
        appendLoadFixtures: false,
        setFixtures: false,
        sandbox: false,
        before: false,
        after: false,
    },
    rules: {
        'mocha/no-exclusive-tests': 2,
    },
};
