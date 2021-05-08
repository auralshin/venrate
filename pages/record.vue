<template>
  <div class="home" id="form">
    <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
      <LogoNav/>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  
    <div class="nav-links">
      <a href="https://github.com/auralshin/venrate" >Github</a>
      <a href="https://auralshin.me/venrate/">Documentation</a>
            <a href="/record" >Verify</a>
      <a href="/profile">Profile</a>
      <button><a href="" target="_blank">LogOut</a></button>
    </div>
  </div>

    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>Dispute</span>
                <span>Resolution</span>
              </div>

              <div class="app-contact">Powered By Venrate</div>
            </div>
            <div class="screen-body-item">
                
              <div class="img-circle">
               <LogoNav/>
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
                    placeholder="Name of the Platform"
                    v-model="record.platform"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Date"
                    v-model="record.date"
                    type="date"
                  />
                </div>
                <div class="app-form-group">
                  <textarea
                    class="app-form-control"
                    placeholder="Describe in detail...."
                    name="detail"
                    cols="30"
                    rows="5"
                    v-model="record.detail"
                  ></textarea>
                </div>
                <div class="app-form-group">
                  <textarea
                    class="app-form-control"
                    placeholder="List all Repuatation Score"
                    name="repscore"
                    cols="30"
                    rows="5"
                    v-model="record.repscore"
                  ></textarea>
                </div>
                
                <div class="app-form-group buttons">
                  <button class="button-two" @click="newRecord">
                    <span>Submit</span>
                  </button>
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
.button-two {
  border-radius: 4px;
  background-color:#d35400;
  color: aliceblue;
  border: none;
  padding: 15px;
  width: 180px;
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
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(24, 23, 23, 0.22);

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
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(31, 31, 31, 0.22);
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
.nav {
  height: 50px;
  width: 100%;
  background-color: #2C5364;
  position: relative;
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
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
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
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
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

<script>
// @ is an alias to /src

export default {
  components: {
    
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
        platform: "",
        date: "",
        repscore: "",
        detail: "",
      },
    };
  },
  methods: {
//     openLoading() {
//       const loading = this.$vs.loading();
//       setTimeout(() => {
//         loading.close();
//       }, 11000);
//     },
//     async newRecord() {
//       let record2 = this.record;
//       console.log(record2);
//       let loading = this.$vs.loading();
//       await this.$store.dispatch("encryptStore", { record: record2 });
//       let route = this.$router.resolve({ path: "/home" });
//       setTimeout(() => {
//         window.open(route.href, "_self");
//       }, 3000);
//       loading.close();
//     },
  },
};
</script>
<style scoped>
.mb-3 {
  margin-bottom: 3rem;
}
</style>