import Vue from 'vue'
import App from './App.vue'
import store from './store'
import moment from 'moment'
import VueInteractJs from "vue-interactjs";
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  disableClick: true
})

Vue.use(VueInteractJs);
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
