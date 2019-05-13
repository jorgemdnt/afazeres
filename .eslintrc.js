module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest',
    'babel'
  ],
  'settings': {
    'react': {
      'version': 'detect',
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
