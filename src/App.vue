<template>
  <div id="app">
    <button @click="auth" >Login</button>
  </div>
</template>

<script>
import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect'
const API_URL = "https://ceramic-clay.3boxlabs.com"
const ceramic = new CeramicClient(API_URL)
export default {
  name: 'App',
  components: {
    
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
