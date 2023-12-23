module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
  },

  rules: {
    'prettier/prettier': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-unresolved': 2,
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: '@ui/**', group: 'internal', position: 'after' },
          { pattern: '@shared/**', group: 'internal', position: 'after' },
          { pattern: '@core/**', group: 'internal', position: 'after' },
          { pattern: '@features/**', group: 'internal', position: 'after' },
          { pattern: '@assets/**', group: 'internal', position: 'after' },
          { pattern: './*.module.css', group: 'index', position: 'after' },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
