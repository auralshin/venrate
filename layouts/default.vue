<template>
  <div>
<nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <!-- <img src="https://ibb.co/NZ8cp84" alt="Logo"> -->
            <img src="https://i.ibb.co/Dzg2sVs/logo-removebg-preview.png" width="100px" alt="logo">
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end ">
            
            <div class="navbar-item">
              <router-link :to="{ path: 'home' }" class="button is-info">
                Home
              </router-link>
            </div>
            <div class="navbar-item">
              <router-link :to="{ path: 'create' }" class="button is-info">
                Create
              </router-link>
            </div>
            <div class="navbar-item">
            <router-link :to="{ path: 'profile' }" class="button is-info">
              Profiles
            </router-link>
            </div>
            <div class="navbar-item">
            <router-link :to="{ path: 'home' }" class="button is-info">
              Documentation
            </router-link>
            </div>
            <span class="navbar-item">
              <a class="button is-info is-inverted" href="https://github.com/auralshin/venrate">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Repository</span>
              </a>
            </span>
            <div class=" navbar-item"><a class="button is-danger">Logout</a></div>
          </div>
        </div>
      </div>
    </nav>
      
    <nuxt >
        </nuxt>
      
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #0cbaba;
}
</style>