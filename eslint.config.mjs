import tailwindcss from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}).prepend(tailwindcss.configs['flat/recommended'])
