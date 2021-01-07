import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import VueI18n from 'vue-i18n'

import api from './request'
import { get, post } from './request/axios'

import './plugins/element.js'

import tips from '@/src/utils/tips.js'
import '@/src/utils/index.js'

import md5 from 'js-md5';

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.$api.get = get
Vue.prototype.$api.post = post
Vue.prototype.$null = '00000000-0000-0000-0000-000000000000'
Vue.prototype.$even = new Vue()

Vue.prototype.$md5 = md5

Vue.use(tips)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('./lang/zh'),
    'ja-JP': require('./lang/ja'),
  },
})

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
