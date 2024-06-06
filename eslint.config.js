// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJest from 'eslint-plugin-jest';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  eslintPluginJest.configs['flat/recommended'],
  {
    rules: {
      'prettier/prettier': 2,
      // Typescript will warn if an import is unable to be resolved
      'import/no-unresolved': 0,
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false,
          },
        },
      ],
      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: ['expect', 'expectTypeOf'],
        },
      ],
    },
  }
);
