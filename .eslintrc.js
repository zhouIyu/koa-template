module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'no-template-curly-in-string': 'off'
    }
};
