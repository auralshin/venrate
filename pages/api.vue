<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul >

     {{ tranx.result[0] }}
    
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          tranx:[],
        totalTranx: 0,
        totalGasPrice: 0,
        sizeTranx:0,
        totalValue:0,
      }
    },
    methods: {
    },
     async fetch() {
      
      this.tranx = await fetch('https://api.etherscan.io/api?module=account&action=txlist&address=0xa9c0da0dA5cDB7947Fa124B14Beb1af63E75b6AF&startblock=0&endblock=99999999&sort=asc&apikey=TRHYJI21I2F9B3MAT4XFKIAF7AC6FIK88Q0').then(res =>
      res.json()
    )
     }
  }
</script>