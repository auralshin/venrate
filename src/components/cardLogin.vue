<template>
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
</template>

<script>
import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect'
const API_URL = "https://ceramic-clay.3boxlabs.com"
const ceramic = new CeramicClient(API_URL)

export default {
  name: 'Card',
  props: {
    
  },
   methods: {
    async auth() {
        const addresses = await window.ethereum.enable()
        const threeIdConnect = new ThreeIdConnect()
        const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
        await threeIdConnect.connect(authProvider)
        const provider = await threeIdConnect.getDidProvider()
        await ceramic.setDIDProvider(provider)
        console.log(provider)
        console.log(ceramic.did.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
