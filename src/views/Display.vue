<template>
  <div class="home">
    <div class="mb-3">
      <app-header> </app-header>
    </div>
    <h1>Viewing Health Record</h1>

    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>HEALTH</span>
                <span>RECORD</span>
              </div>
              <div class="app-contact">
                <span> Document Created On: {{ currentRecord.date }}</span>
                <br /><br />
                <span>CID: {{ $route.params.id }}</span>
              </div>
            </div>
            <div class="screen-body-item">
              <div class="img-circle">
                <img src="../../public/Asset_W.png" alt="profile-image" />
              </div>
              <div class="app-form">
                <div class="app-form-group message">
                  <p>Title: {{ currentRecord.title }}</p>
                </div>
                <div class="app-form-group">
                  <p>Date of Diagnosis:{{ currentRecord.dateDiagnosis }}</p>
                </div>
                <div class="app-form-group">
                  <p>Name of the Doctor:{{ currentRecord.doctor }}</p>
                </div>
                <div class="app-form-group">
                  <p>Diagnosis: {{ currentRecord.diagnosis }}</p>
                </div>
                <div class="app-form-group">
                  <p>Medicines: {{ currentRecord.medicines }}</p>
                </div>

                <div class="app-form-group buttons">
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      w="6"
                    >
                      <vs-button @click="home">
                        <i class="bx bx-home-alt"></i> Home
                      </vs-button>
                    </vs-col>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      w="6"
                    >
                      <vs-button @click="active = !active"> Share </vs-button>
                    </vs-col>
                  </vs-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Sharing Health Record</h4>
      </template>

      <div
        class="con-form"
        style="width: 400px; text-align: center; padding: 0px 0px"
      >
        <p style="color: #000">
          Select the QR Code image of the Doctor.
        </p>
        <div class="center">

        <qrcode-capture @decode="onDecode" />
        </div>
        <div
          class="formgroup"
          style="display: block; align-items: center; padding: 20px 100px" v-if="result != ''"
        >
          <div class="app-form-group">
            <label for="name">Name
            <input
              class="app-form-control"
              placeholder="Name"
              v-model="name"
              readonly
            ></label>
          </div>
          <div class="app-form-group">
            <label for="name">DID
            <input
              class="app-form-control"
              placeholder="did"
              v-model="did"
              readonly
            ></label>
          </div><div class="app-form-group">
            <label for="name">Session ID
            <input
              class="app-form-control"
              placeholder="Session ID"
              v-model="sessionID"
              readonly
            ></label>
          </div>
          <br />
          
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="shareDoc" v-if="result != ''"> Confirm and Submit </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 2.5em;
  margin: 25px auto;
  margin-top: 100px;
  width: 800px;
  text-align: center;
}

.content {
  margin: 0 auto;
  width: 600px;
  padding-top: 40px;
  color: black;
  position: relative;
  text-align: left;
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

img {
  max-width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
}

body,
button,
p{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 1.4px;
  resize: none;
  color: #fff;
}

input {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 1.4px;
  resize: none;
  color: #000;
}

label:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
  text-align: left;
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
  flex: 4;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  text-align: left;
}

.app-form-group label{
  display: block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
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
  color: #000;
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
  margin: 20px 5px 5px 10px;
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
import { mapState } from "vuex";
import socket from "../utils/socket";
import { QrcodeCapture } from "vue-qrcode-reader";

export default {
  name: "Display",
  components: {
    AppHeader,
    QrcodeCapture,
  },
  data() {
    return {
      active: false,
      name: "",
      did: "",
      userID: "",
      sessionID: "",
      result: "",
    };
  },
  methods: {
    home() {
      let route = this.$router.resolve({ path: "/home" });
      window.open(route.href, "_self");
    },
    async shareDoc() {
      let payload = {
        did: this.did,
        name: this.name,
        record: this.currentRecord,
        sessionID: this.sessionID,
      };
      console.log(payload);
      const loading = this.$vs.loading();
      await this.$store.dispatch("shareDoc", payload);
      setTimeout(() => {
        loading.close();
        this.active = false;
      }, 3000);
    },
    onDecode(result) {
      this.result = result;
      let content = JSON.parse(result)
      console.log(content);
      this.sessionID = content.sessionID;
      this.did = content.did;
    },
  },
  computed: {
    ...mapState(["currentRecord", "profile"]),
  },
  created() {
    const sessionID = localStorage.getItem("sessionID");
    this.name = this.profile.name;

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }

    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
    console.dir(socket);

    socket.on("private message", ({ content, from }) => {
      console.log("From: " + from);
      console.log("Content");
      console.log(content);
    });
  },
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 3rem;
}
</style>
