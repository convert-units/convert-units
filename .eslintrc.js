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
    'prettier',
    'plugin:ordered-imports/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'prettier',
    'ordered-imports',
  ],
  rules: {
    'prettier/prettier': 2,
    'ordered-imports/ordered-imports': [
      'error',
      {
        'symbols-first': true,
        'declaration-ordering': ['type', {
          ordering: ['side-effect', 'default', 'namespace', 'destructured'],
          secondaryOrdering: ['source', 'lowercase-last'],
        }],
        'specifier-ordering': 'lowercase-last',
        'group-ordering': [
          { name: 'project root', match: '^@', order: 20 },
          { name: 'parent directories', match: '^\\.\\.', order: 30 },
          { name: 'current directory', match: '^\\.', order: 40 },
          { name: 'third-party', match: '.*', order: 10 },
        ],
      },
    ],
  },
  parser: '@typescript-eslint/parser',
};
