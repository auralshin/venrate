<template>
  <div class="bg">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Montserrat";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.bg {
  /* background-image: url("~/assets/background.jpg"); */
  background-image: url("~/assets/blockchain.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  /* background: #0f0c29;
  background: -webkit-linear-gradient(to top, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to top, #24243e, #302b63, #0f0c29); */

  min-height: 100vh;
}
</style>
