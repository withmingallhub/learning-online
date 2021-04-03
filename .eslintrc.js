module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'space-in-parens': 0,
    'object-curly-spacing': 2,
    'no-multiple-empty-lines': 'warn',
    indent: ['error', 2, {SwitchCase: 1}],
    'no-use-before-define': [2, {functions: false}],
    semi: [0, 'never'],
  },
};
