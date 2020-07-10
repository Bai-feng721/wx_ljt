import Vue from 'vue'
import App from './App'
import fly from './utils/fly'
import { parseTime, resetForm, addDateRange, selectDictLabel, download, handleTree } from "./utils/assets"

Vue.prototype.$http = fly;
Vue.prototype.$parseTime = parseTime;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
