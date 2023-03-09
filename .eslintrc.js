module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: 'react-app',
  rules: {
    quotes: ['error', 'single'],
    semi: [2, 'always'],
    curly: 'error',
    'no-eval': 'error',
    'no-alert': 'error',
    'no-console': ['error', { allow: ['error'] }],
  },
};
