<template>
  <div class="center examplex">
    <vs-navbar  :color="active" center-collapsed v-model="active">
      <template #left>
        <vs-navbar-item > Venrate </vs-navbar-item>
        <vs-navbar-item href="/home" target="_self"> Home </vs-navbar-item>
        <vs-navbar-item href="/profile" target="_self"> Profile </vs-navbar-item>
      </template>
      <template #right>
        <vs-button primary @click="newRecord">New Record</vs-button>
        <vs-button primary danger @click="logout">Logout</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      active: "#ffb000",
    };
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 2500);
    },
    auth() {
      this.$store.dispatch("ceramicAuth");
    },
    newRecord() {
      let route = this.$router.resolve({path: '/new'});
      window.open(route.href, '_self');
    },
    async logout() {
      const loading = this.$vs.loading();
      await this.$store.dispatch("logoutTriggered");
      let route = this.$router.resolve({path: '/'});
      setTimeout(() => {
        loading.close();
        window.open(route.href, "_self");
        }, 2500)
    },
  },
};
</script>

<style>
div.examplex{
  position: absolute;
  top: 0%;
  left: 0%;
}
</style>