import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
