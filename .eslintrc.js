module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        'jest/globals': true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaVersion: 11,
        jsx: true,
        project: './tsconfig.json'
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'react-hooks', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint'
    ],
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-no-bind': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
    }
};
