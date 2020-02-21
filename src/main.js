import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Mynt from './components/Mynt.vue'
import Sedlar from './components/Sedlar.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    mynt: 'Valörer: 1, 2, 5, 10',
    sedlar: 'Valörer: 20, 50, 100, 200, 500, 1000',
  },
})

let router = new VueRouter({
  routes: [{
    path: '/mynt',
    component: Mynt,
  }, {
    path: '/sedlar',
    component: Sedlar,
  }]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
