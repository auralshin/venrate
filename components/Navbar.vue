<template>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <a href="/" class="nav-header">
      <LogoNav />
    </a>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <a
        class="nav-links--link"
        href="https://github.com/auralshin/venrate"
        target="_blank"
        rel="noopener norefferer"
        >Github</a
      >
      <a
        class="nav-links--link"
        href="https://auralshin.me/venrate/"
        target="_blank"
        rel="noopener norefferer"
        >Documentation</a
      >
      <a class="nav-links--link" href="/record">Verify</a>
      <a class="nav-links--link" href="/profile">Profile</a>
      <v-btn class="button" href="/" rounded elevation="9" color="white">
        Logout
      </v-btn>
      <!-- <button class="button"><a href="" target="_blank">LogOut</a></button> -->
    </div>
  </div>
</template>

<script>
import LogoNav from "~/components/LogoNav.vue";
export default {
  components: {
    LogoNav
  }
};
</script>

<style scoped>
.nav {
  height: 71px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  position: absolute;
  /* padding: 0.3rem 1rem; */
}
.nav > .nav-header {
  display: inline;
}
.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}
.nav > .nav-btn {
  display: none;
}
.nav > .nav-links {
  display: flex;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  /* float: right; */
  font-size: 18px;
}
.nav-links--link {
  transition: all 0.1s ease-in;
  position: relative;
  z-index: 1;
  font-family: "Poppins", sans-serif;

  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: black;
  margin-right: 25px;
  font-size: 18px;
}
/* .nav-links--link:hover {
  background-color: rgba(0, 0, 0, 0.3);
} */
.nav-links--link:hover {
  color: white;
}
.nav-links--link:after {
  transition: all 0.5s;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  content: ".";
  color: transparent;
  background: black;
  visibility: none;
  opacity: 0;
  z-index: -1;
}
.nav-links--link:hover:after {
  opacity: 1;
  visibility: visible;
  height: 100%;
}
.nav > #nav-check {
  display: none;
}

.button {
  margin-right: 15px;
  font-family: "Poppins", sans-serif;
  /* background: black; */
  color: black;
  padding: 0px 5px;
  font-size: 15px;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
}
@media (max-width: 800px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
