<template>
  <div class="home" id="form">
    <div class="mb-3">
      <app-header> </app-header>
    </div>

    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>NEW</span>
                <span>RECORD</span>
              </div>
              <div class="app-contact">Powered By Venrate</div>
            </div>
            <div class="screen-body-item">
              <div class="img-circle">
                <img src="../../public/Asset1@3x.png" alt="profile-image" />
              </div>
              <div class="app-form">
                <div class="app-form-group message">
                  <input
                    class="app-form-control"
                    placeholder="Title"
                    v-model="record.title"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Name of the Doctor"
                    v-model="record.doctor"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Date of Diagnosis"
                    v-model="record.dateDiagnosis"
                    type="date"
                  />
                </div>
                <div class="app-form-group">
                  <textarea
                    class="app-form-control"
                    placeholder="Describe in detail...."
                    name="diagnosis"
                    cols="30"
                    rows="5"
                    v-model="record.diagnosis"
                  ></textarea>
                </div>
                <div class="app-form-group">
                  <textarea
                    class="app-form-control"
                    placeholder="List all with dosage...."
                    name="medicines"
                    cols="30"
                    rows="5"
                    v-model="record.medicines"
                  ></textarea>
                </div>
                
                <div class="app-form-group buttons">
                  <vs-button size="large" @click="newRecord">
                    Submit
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 4em;
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
  text-align: center;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: linear-gradient(to right, #ebad27 0%, #ffb000 100%);
  font-size: 12px;
}

body,
button,
input,
textarea {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  resize: none;
}

img {
  max-width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
}

.background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 800px;
  margin: auto;
  padding: 10px;
  margin-top: 50px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 2;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ffb000;
  font-size: 26px;
  text-align: left;
}

.app-title:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ffb000;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  align-items: flex-start;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  /* text-transform: uppercase; */
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #ffb000;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  margin: 5px 10px;
}

.app-form-button:hover {
  color: #ffb000;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>

<script>
// @ is an alias to /src
import AppHeader from "../layout/AppHeader.vue";

export default {
  name: "NewRecord",
  components: {
    AppHeader,
  },
  data() {
    return {
      active: 0,
      seed: "",
      text: "",
      name: "",
      homeLocation: "",
      url: "",
      bio: "",
      profile: {},
      search: "",
      record: {
        date: new Date().toISOString(),
        title: "",
        doctor: "",
        dateDiagnosis: "",
        medicines: "",
        diagnosis: "",
      },
    };
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 11000);
    },
    async newRecord() {
      let record2 = this.record;
      console.log(record2);
      let loading = this.$vs.loading();
      await this.$store.dispatch("encryptStore", { record: record2 });
      let route = this.$router.resolve({ path: "/home" });
      setTimeout(() => {
        window.open(route.href, "_self");
      }, 3000);
      loading.close();
    },
  },
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 3rem;
}
</style>
