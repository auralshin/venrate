<template>
  <div id="app" class="center">
    <div class="heading">
      <p>Ethereum India Fellowship 2.0</p>
    </div>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://jaxenter.com/wp-content/uploads/2018/07/shutterstock_781956604.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vitalik_Buterin_TechCrunch_London_2015.jpg/640px-Vitalik_Buterin_TechCrunch_London_2015.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Vitalik Buterin</p>
        <p class="subtitle is-6">@VitalikButerin</p>
      </div>
    </div>
    <div class="center">
      <b-button type="is-primary" rounded size="is-medium" icon-left="ethereum" @click="auth">Login</b-button>
    </div>
  </div>
</div>
  </div>
</template>

<script>


export default {
  name: 'Card',
  props: {
    
  },
  methods: {
    async auth() {
        // const addresses = await window.ethereum.enable()
        // const threeIdConnect = new ThreeIdConnect()
        // const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
        // await threeIdConnect.connect(authProvider)
        // const provider = await threeIdConnect.getDidProvider()
        // await ceramic.setDIDProvider(provider)
        // console.log(provider)
        // console.log(ceramic.did.id)
        this.$store 
          .dispatch("ceramicAuth")
          .then((Boolean) => {
            if(Boolean) {
              this.$router.push({ path: '/home' })
            }
          })
    }
  }
}
</script>

<style>
html {
  background: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  color: #fdfdfd;
  
  padding: 0;
  height: 100vh;
  
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
  /* background-color: #0cbaba;
background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
 */


}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
