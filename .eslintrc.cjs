module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['off', 'never'],
    'consistent-return': ['off', 'never'],
    'import/extensions': ['off', 'never'],
    'import/no-extraneous-dependencies': ['off', 'never'],
    'object-curly-newline': ['off', 'never'],
    'no-plusplus': ['off', 'never'],
    semi: ['error', 'never']
  }
}
