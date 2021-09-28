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
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'no-param-reassign': 'error',
        'no-undef': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true
            }
        ]
    }
};
