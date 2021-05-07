<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        venrate
      </h1>
      <div class="gcontainer links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="gcontainer button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="gcontainer button--green"
        >
          GitHub
        </a> 
       
      </div>
       <div class="gcontainer"><button class="button-two"><span>Connect Wallet</span></button></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #9fa2a5;
  letter-spacing: 1px;
}
.gcontainer {
  padding: 20px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.button-two {
  border-radius: 4px;
  background-color:#d35400;
  color: aliceblue;
  border: none;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
}


.button-two span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-two span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button-two:hover span {
  padding-right: 25px;
}

.button-two:hover span:after {
  opacity: 1;
  right: 0;
}

</style>
