<template>
  <div class="home">
    <div class="mb-3">
      <app-header> </app-header>
    </div>

    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>YOUR</span>
                <span>PROFILE</span>
              </div>
              <div class="app-contact">Powered By Identity Index</div>
            </div>
            <div class="screen-body-item" v-if="profile != undefined && profile.name != null">
              <div class="img-circle">
                <img :src="profilePic" alt="profile-image" />
              </div>
              <div class="app-form">
                <div class="app-form-group message">
                  <p>{{ profile.name }}</p>
                </div>
                <div class="app-form-group">
                  <p>{{ profile.gender }}</p>
                </div>
                <div class="app-form-group">
                  <p>{{ profile.birthDate }}</p>
                </div>
                <div class="app-form-group">
                  <p>{{ profile.homeLocation }}</p>
                </div>
                <div class="app-form-group">
                  <p>{{ profile.description }}</p>
                </div>
              </div>
              <div class="app-form-group buttons">
                <button class="app-form-button" @click="home">HOME</button>
                <button class="app-form-button"></button>
                <button class="app-form-button" @click="editProfile">
                  EDIT
                </button>
              </div>
            </div>
            <div class="screen-body-item" v-else>
              <p>
                Your Profile doesn't exist or hasn't been initialized properly,
                please click on edit and update your profile.
              </p>
              <div class="app-form-group buttons">
                <button class="app-form-button" @click="home">HOME</button>
                <button class="app-form-button"></button>
                <button class="app-form-button" @click="editProfile">
                  EDIT
                </button>
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
  border-radius: 50%;
  max-width: 12.5rem;
  height: 12.5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
}

body,
button,
p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 1.4px;
  resize: none;
  color: #fff;
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

export default {
  name: "Profile",
  components: {
    AppHeader,
  },
  data() {
    return {
      active: false,
      name: "",
      userID: "",
      sessionID: "",
      src: "https://www.w3schools.com/howto/img_avatar2.png",
    };
  },
  methods: {
    home() {
      let route = this.$router.resolve({ path: "/home" });
      window.open(route.href, "_self");
    },
    editProfile() {
      let route = this.$router.resolve({ path: "/editprofile" });
      window.open(route.href, "_self");
    },
  },
  computed: {
    ...mapState(["profile", "did", "profilePic"]),
  },
  created() {
    const sessionID = localStorage.getItem("sessionID");

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
    console.log(this.profile)
  },
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 3rem;
}
</style>
