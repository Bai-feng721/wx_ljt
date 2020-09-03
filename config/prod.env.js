var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports =  merge(prodEnv,{
  NODE_ENV: '"production"',
  VUE_IMAGES: '"https://wwnlkjapi.wangzhengou.cn/img"',
  api:'"https://wwnlkjapi.wangzhengou.cn/api"'
})
