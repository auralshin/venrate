<template>
  <button  class="button-two">
    <span>Connect Wallet</span>
  </button>
</template>

<style scoped>
.button-two {
  border-radius: 4px;
  background-color: #00d351d3;
  color: aliceblue;
  border: none;
  padding: 15px;
  width: 200px;
  transition: all 0.5s;
}
.button-two span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  font-family: "Montserrat", sans-serif;

}
.button-two span:after {
  content: "»";
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
