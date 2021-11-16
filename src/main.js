import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import moment from 'moment'
import VueInteractJs from "vue-interactjs";

Vue.use(VueInteractJs);
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
