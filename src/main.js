import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


import Home from './Dashboard.vue'
import Login from './Login.vue'
Vue.use(Vuex)
Vue.use(Buefy)
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      
      component:Login
  },
  {
      path: '/home',
      component: Home,
      
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


new Vue({
  router,
  store,
  beforeCreate() { this.$store.commit('initialiseStore') },
  render: h => h(App),
}).$mount('#app')
