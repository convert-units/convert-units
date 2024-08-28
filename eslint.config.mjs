// @ts-check

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

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
      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: ['expect', 'expectTypeOf'],
        },
      ],
    },
  }
);
