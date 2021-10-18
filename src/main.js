import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
new Vue({
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  components: {VueQr}
}).$mount('#app')
