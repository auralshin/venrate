<template>
  <div class="home">
    <div>
      <app-header> </app-header>
    </div>
    <div class="hero">
      <div class="overlay"></div>
      <div class="content">
        <h1></h1>
      </div>
    </div>
    <h1>All your Records will appear here</h1>
    <div class="grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
         
          <h4>Your DID : {{ did }}</h4>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4"
          ><h4>Your Session ID : {{ socketUserID }}</h4></vs-col
        >
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
        </vs-col>
      </vs-row>
    </div>
    <div class="center grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          w="6"
          class="mb-3"
        >
          <div class="center mb-3" v-if="socketUserID != null">
            <vs-button @click="active = !active"> QR Code </vs-button>
          </div>
          <vs-table>
            <template #header>
              <vs-input v-model="search" border placeholder="Search" />
            </template>
            <template #thead>
              <vs-tr>
                <vs-th> ID </vs-th>
                <vs-th
                  sort
                  @click="
                    recordsList = $vs.sortData($event, recordsList, 'title')
                  "
                >
                  Title
                </vs-th>
                <vs-th> Option </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                :key="i"
                v-for="(tr, i) in $vs.getSearch(recordsList, search)"
                :data="tr"
              >
                <vs-td>
                  {{ tr.id }}
                </vs-td>
                <vs-td>
                  {{ tr.title }}
                </vs-td>
                <vs-td>
                  <vs-button gradient success @click="myFunc(tr.id)">
                    Open
                  </vs-button>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-col>
      </vs-row>
    </div>

    <div class="center">
      <vs-dialog v-model="active">
        <template #header>
          <h4 class="not-margin">QR COde <b>Generator</b></h4>
        </template>

        <div class="con-form">
          <canvas id="canvas"></canvas>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block @click="createQRCode">
              Generate QR Code
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>

    <br />
    <br />
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "../layout/AppHeader.vue";
import AppFooter from "../layout/AppFooter.vue";
import { mapState } from "vuex";
import socket from "../utils/socket";
import QRcode from "qrcode";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      active: false,
      records: [],
      search: "",
      socketUserID: "",
    };
  },
  methods: {
    createQRCode() {
      console.log(this.socketUserID);
      console.log(this.did);
      let text = JSON.stringify({
        sessionID: this.socketUserID,
        did: this.did,
      });
      let canvas = document.getElementById("canvas");

      QRcode.toCanvas(canvas, text, function (err) {
        if (err) console.error(err);
        console.log("successfully generated QR Code");
      });
    },
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
    sessionIDstore(takeID) {
      this.socketUserID = takeID;
    },
    async myFunc(id) {
      const loading = this.$vs.loading();
      await this.$store.dispatch("decryptHR", { id });
      let route = this.$router.resolve({ path: "/content/" + id });
      setTimeout(() => {
        loading.close();
        window.open(route.href, "_self");
      }, 9000);
    },
    async retrieveDispatch(Pname, cid) {
      let payload = {
        cid: cid,
        name: Pname,
      };
      console.log(payload);
      const loading = this.$vs.loading();
      await this.$store.dispatch("retireve", payload);
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
  created() {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID != undefined) {
      socket.auth = { sessionID };
      socket.connect();
    } else {
      socket.auth = { did: this.did };
      socket.connect();

      console.log(socket.id);

      socket.on("session", ({ sessionID, userID }) => {
        // attach the session ID to the next reconnection attempts
        socket.auth = { sessionID };
        // store it in the localStorage
        localStorage.setItem("sessionID", sessionID);
        // save the ID of the user
        socket.userID = userID;
      });
    }

    socket.on("connect", () => {
      this.socketUserID = socket.id;
      console.log(socket.id);
    });

    socket.on("session", ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
      }
    });

    socket.on("private message", ({ Pname, cid, from }) => {
      console.log("From: " + from);
      console.log("Content");
      console.log(Pname);
      console.log(cid);
      this.retrieveDispatch(Pname, cid);
    });

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
    console.dir(socket);
  },
  destroyed() {
    socket.off("connect");
    socket.off("disconnect");
    socket.off("private message");
  },
  computed: {
    ...mapState(["recordsList", "did", "ethaddress", "profile"]),
  },
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 3rem;
}

.hero {
  height: 550px;
  width: 100%;
  background-image: url("../../public/Artboard.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 43px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
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
  opacity: 0;
}
.hero .content {
  color: #fff;
  z-index: 2;
  text-align: center;
}
.hero .content h1 {
  font-size: 45px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}
.hero .content p {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}
</style>
