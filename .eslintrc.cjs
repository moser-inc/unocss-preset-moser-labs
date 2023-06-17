module.exports = {
  extends: ['@moser-inc'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { fixStyle: 'inline-type-imports' },
    ],
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
