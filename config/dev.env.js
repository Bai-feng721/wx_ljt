var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_IMAGES:'"http://172.10.162.112:20000"',
  api:'"http://172.10.162.112:9999"'
})
