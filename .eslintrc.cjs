module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  env: { browser: true, es2020: true },
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
  },

  rules: {
    'prettier/prettier': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-unresolved': 'error',
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          { pattern: '@/**', group: 'internal', position: 'after' },
          { pattern: '@core/**', group: 'internal', position: 'after' },
          { pattern: '@assets/**', group: 'internal', position: 'after' },
          { pattern: './*.module.css', group: 'index', position: 'after' },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
