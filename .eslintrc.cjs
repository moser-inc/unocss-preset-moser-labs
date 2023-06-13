module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@moser-inc'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
