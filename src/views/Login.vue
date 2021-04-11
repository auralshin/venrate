<template>
  <div class="home">
    <div class="hero">
      <div class="overlay">
                      <h1 class="content ">Venrate</h1>
        <p class="content">Ethereum India Fellowship 2.0</p>
      </div>

      <div class="content">
        <vs-button size="xl" @click="auth"> LOGIN </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      active: true,
    };
  },
  methods: {
    // openLoading() {
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 11000);
    // },
    async auth() {
      this.$store
        .dispatch("ceramicAuth")
        .then((boolean) => {
          if (boolean) {
            let route = this.$router.resolve({ path: "/home" });
            setTimeout(() => {
              window.open(route.href, "_self");
            }, 5000);
          }
        })
        .catch((err) => console.error(err));
      setTimeout(() => {
        // eslint-disable-next-line no-unused-vars
        // let loading = this.$vs.loading();
      }, 4500);
    },
  },
  computed: {
    getAuth() {
      return this.$store.getters.authstatus;
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.hero {
  height: 1080px;
  width: 100%;
  background-image: url("../../public/Artboard2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero .overlay {
  background-color: #000;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.3;
}
.hero .content {
  color: #fff;
  z-index: 2;
  text-align: center;
}
.hero .content h1 {
  font-size: 75px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.hero .content p {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}
</style>
