module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        '@react-native-community',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: false,
            },
        ],
        'react/no-unstable-nested-components': [
            'error',
            {
                allowAsProps: true,
            },
        ],
    },
};
