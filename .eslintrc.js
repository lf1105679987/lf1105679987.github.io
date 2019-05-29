// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.VUE_APP_PRE_COMMIT ? 'error' : 'off',
    // Only allow `console.log` in development
    'no-console': process.env.VUE_APP_PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/script-indent': ['off', null, { baseIndent: 0 }],
    'vue/no-unused-components': ['off'],
    'vue/require-default-prop': ['off'],
    'vue/no-parsing-error': 0,
    'semi': [2, 'always'],
    'no-unused-vars': 1,
    'no-undef': 0,
    'prefer-promise-reject-errors': 0,
    'no-multi-str': 0,
    'no-useless-escape': 0,
    'no-unreachable': 0,
    'eqeqeq': 0,
    'camelcase': 0,
  }
}
