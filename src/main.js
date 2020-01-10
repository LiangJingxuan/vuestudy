import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { InfiniteScroll } from 'mint-ui'

Vue.config.productionTip = false
Vue.use(InfiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
