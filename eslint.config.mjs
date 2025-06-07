// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/eqeqeq': 'error',
      'eqeqeq': 'error',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/no-empty-component-block': 'error',
      'vue/padding-line-between-blocks': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      'vue/no-v-html': 'error',
      'vue/no-dupe-v-else-if': 'error',
    },
  },
)
