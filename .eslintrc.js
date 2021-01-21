module.exports = {
    root: true,
    plugins: ['react', 'react-native', 'eslint-plugin-flowtype', 'react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
        '@react-native-community',
        'plugin:react-hooks/recommended',
    ],
};
