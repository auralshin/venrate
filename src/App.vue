<template>
  <div id="app" class="center">
    <div class="heading">
      <p>Ethereum India Fellowship 2.0</p>
    </div>
    <Card />
  </div>
</template>

<script>
import Card from './components/cardLogin'
import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect'
const API_URL = "https://ceramic-clay.3boxlabs.com"
const ceramic = new CeramicClient(API_URL)
export default {
  name: 'App',
  components: {
    Card,
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
