import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    name: 'all',
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      complexity: ['warn', 12],
      eqeqeq: 'error',
      'max-params': 'off',
      'object-shorthand': 'error',
      'no-console': 'error',
      'no-constant-binary-expression': 'off',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],

      '@typescript-eslint/max-params': ['error', { max: 3 }],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
])
