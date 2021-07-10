module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'naver',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'arrow-parens': ['error', 'always'],
    // production 환경에서는 on 으로 되어있어야 함.
    'no-console': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
