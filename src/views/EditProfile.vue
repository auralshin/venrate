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
                <span>EDIT</span> 
                <span>PROFILE</span>
              </div>
              <div class="app-contact">Powered By Identity Index</div>
            </div>
            <div class="screen-body-item">
              <div class="img-circle">
                <img :src="src" alt="profile-image" />
              </div>
              <div class="app-form">
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="Name" v-model="profile.name">
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Gender" v-model="profile.gender">
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Residence" v-model="profile.homeLocation">
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="Birthdate" v-model="profile.birthDate" type="date">
                </div>
                <div class="app-form-group">
                  <textarea class="app-form-control" placeholder="Bio" name="description" cols="30" rows="5" v-model="profile.description"></textarea>
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Profile Image"
                    type="file"
                    accept="image/*"
                    id="profileImage"
                    name="profileImage"
                    @change="updateImage"
                  >
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button" @click="cancel">
                    CANCEL
                  </button>
                  <button class="app-form-button"></button>
                  <button class="app-form-button" @click="updateProfile">SUBMIT</button>
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
  font-size: 2.5em;
  margin: 25px auto;
  margin-top: 100px;
  width: 800px;
  text-align: center;
}

.mb-3 {
  margin-bottom: 3rem;
}

img {
  border-radius: 50%;
  max-width: 12.5rem;
  height: 12.5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
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

body,
button,
input, textarea {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  resize: none;
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
//import { mapState } from "vuex";
import socket from "../utils/socket";

export default {
  name: "EditProfile",
  components: {
    AppHeader,
  },
  data() {
    return {
      active: false,
      name: "",
      did: "",
      userID: "",
      sessionID: "",
      src: "https://www.w3schools.com/howto/img_avatar2.png",
      selectedImage: null,
      imageHeight: 0,
      imageWidth: 0,
      profile:{
        name: "",
        description: "",
        gender: "",
        homeLocation: "",
        birthDate: null,
        image: null
      }
    };
  },
  methods: {
    cancel() {
      let route = this.$router.resolve({ path: "/profile" });
      window.open(route.href, "_self");
    },
    updateImage(e) {
      const file = e.target.files[0];
      this.selectedImage = file;

      let takeImage = new Image()
      this.src = URL.createObjectURL(file);
      takeImage.src = this.src
      setTimeout(() =>{
        console.log(takeImage.width)
        this.imageWidth = takeImage.width
        console.log(takeImage.height)
        this.imageHeight = takeImage.height

      }, 1500)
    },
    async updateProfile(){
      let loading = this.$vs.loading();
      let profile = this.profile;
      let selectedImage = this.selectedImage
      let imageHeight = this.imageHeight
      let imageWidth = this.imageWidth
      console.log(imageHeight);
      console.log(imageWidth);
      await this.$store.dispatch("updateProfile", {profile, selectedImage, imageHeight, imageWidth});

      let route = this.$router.resolve({path: '/profile'});
      setTimeout(() => {
        window.open(route.href, "_self");
      }, 3000);
      loading.close();
    }
  },
  computed: {},
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
  },
};
</script>