var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"development"',
  VUE_IMAGES:'"https://wwnlkjapi.wangzhengou.cn/img"',
  api:'"https://wwnlkjapi.wangzhengou.cn/api"'
})
