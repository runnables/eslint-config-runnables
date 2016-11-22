module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
  },
  'resolve': {
    'moduleDirectory': ['node_modules', 'src'],
  },
  'plugins': [
    'react', 'import', 'lodash',
  ],
  'extends': [
    'eslint-config-airbnb',
    'plugin:lodash/recommended',
  ],
  'rules': {
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'import/first': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,

    'react/no-multi-comp': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/no-find-dom-node': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,

    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,

    'lodash/prefer-lodash-method': [2, {'ignoreObjects': ['^traverse', '^this']}],
    'lodash/prefer-map': 0,
    'lodash/prefer-startswith': 0,

    'comma-dangle': 0,
    'indent': [2, 2, {'SwitchCase': 1}],
    'global-require': 0,
    'spaced-comment': 0,
    'new-cap': 0,
    'id-length': 0,
    'max-len': 0,
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'no-case-declarations': 0,
    'no-useless-escape': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-bitwise': ['error', { 'allow': ['~'] }],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 5 }]
    // 'arrow-body-style': 0,
  },
  'globals': {
    '__DEVELOPMENT__': true,
    '__CLIENT__': true,
    '__SERVER__': true,
    '__DISABLE_SSR__': true,
    '__DEVTOOLS__': true,
    'socket': true,
    'webpackIsomorphicTools': true,
    "describe": true,
    "it": true
  },
};
