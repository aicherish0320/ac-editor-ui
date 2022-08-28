import basicConfig, { file } from './rollup.config'

export default {
  ...basicConfig,
  output: {
    name: 'AcComponent',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'vue',
      'lodash-es': '-'
    },
    exports: 'named'
  }
}
