module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'prettier',
    'import',
  ],
  rules: {
    'prettier/prettier': 2,
  },
  parser: '@typescript-eslint/parser',
};
