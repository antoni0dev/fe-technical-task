import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...configPrettier.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  }
];
