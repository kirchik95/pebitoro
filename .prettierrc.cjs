module.exports = {
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '^react-dom$',
    '^react-dom/client$',
    '^react-redux$',
    '^react-router-dom$',
    '^react-use$',
    '^lodash$',
    '<THIRD_PARTY_MODULES>',
    '^classnames$',

    '^@/(.*)$',
    '',

    '^@core/(.*)$',
    '',

    '^[../]',
    '',

    '^[./]',
    '',

    '^@assets/(.*)$',
    '',

    '.*\\.(css|module\\.css)$',
  ],
  importOrderSeparation: true,
};
