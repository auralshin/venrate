<template>
  <div class="app">
    <section class="section">
      <b-button @click="auth" >Login</b-button>

        <!-- <card
          title="Lightweight"
          icon="arrange-bring-to-front"
        >
          No other internal dependency
        </card> -->
    
    </section>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  name: 'HomePage',

  components: {
   
  },
  computed: {
   
  },
  methods: {
     auth() {
        this.$store.commit('initialiseStore')
        this.$store
        .dispatch("ceramicAuth")
        .then((boolean) => {
          if(boolean) {
            console.log(boolean)
            this.$router.push({path:"/dashboard"})
          }
        })
     } 
  }
}
</script>

<style>
.app {
    background-color: #0cbaba; 
    background-image: linear-gradient(to bottom, #0cbaba, #008fb3, #00629b, #31346f, #380036);
    height: 100vh;
}  

</style>