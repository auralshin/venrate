<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

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
/*   
  background-color: #0cbaba;
  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%); */


}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
