import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import AppHeader from './layout/AppHeader.vue'
import Display from './views/Display.vue'
import NewRecord from './views/NewRecord.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
import EditProfile from './views/EditProfile.vue'
import NotFound from './views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: {
      header: AppHeader,
      default: Home
    },
  },
  {
    path: '/',
    name: 'Login',
    components: {
      default: Login
    },
  },

  {
    path: '/content/:id',
    name: 'Display',
    components: { default: Display, header: AppHeader }
  },
  {
    path: '/profile',
    name: 'Profile',
    components: { default: Profile, header: AppHeader }
  }, {
    path: '/editprofile',
    name: 'EditProfile',
    components: { default: EditProfile, header: AppHeader }
  },
  {
    path: '/new',
    name: 'New',
    components: { default: NewRecord, header: AppHeader }
  },
  {
    path: '*',
    components: {
      default: NotFound
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
