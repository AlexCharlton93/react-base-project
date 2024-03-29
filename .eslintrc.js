module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    complexity: ['warn', 10],
    'no-unused-vars': 'error',
    'no-trailing-spaces': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: '^import\\s.+\\sfrom\\s.+$',
      },
    ],
    'no-var': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
