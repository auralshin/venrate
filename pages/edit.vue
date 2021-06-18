<template>
  <div>
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>Edit</span>
                <span>Profile</span>
              </div>

              <div class="app-contact">Powered By Venrate</div>
            </div>
            <div class="screen-body-item">
              <div class="img-circle">
                <LogoNav />
              </div>
              <div class="app-form">
                <div class="columns gcontainer">
                  <div class="profile-image column">
                    <template v-if="preview">
                      <img :src="preview" class="neumorphic-card-photo" />
                    </template>
                  </div>

                  <div class="input-group column">
                    <input
                      class="custom-file-input"
                      type="file"
                      accept="image/*"
                      @change="previewImage"
                      required
                    />
                    <template v-if="preview">
                      <p class="mb-0 ml-4 mt-4">file name: {{ image.name }}</p>
                      <p class="mb-0 ml-4 ">size: {{ image.size / 1024 }}KB</p>
                    </template>
                  </div>
                </div>
                <div class="app-form-group message">
                  <input
                    class="app-form-control"
                    placeholder="Name"
                    v-model="profile.name"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Email Address"
                    v-model="profile.email"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Date of Birth"
                    v-model="profile.dob"
                    type="date"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    placeholder="Gender"
                    name="repscore"
                    cols="30"
                    rows="5"
                    v-model="profile.gender"
                  />
                </div>
                <div class="app-form-group">
                  <textarea
                    class="app-form-control"
                    placeholder="Bio...."
                    name="detail"
                    cols="30"
                    rows="5"
                    v-model="profile.bio"
                  ></textarea>
                </div>

                <div class="app-form-group">
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

<script>
export default {
  data: () => {
    return {
      preview: null,
      image: null,

      active: 0,
      seed: "",
      text: "",
      name: "",
      homeLocation: "",
      url: "",
      bio: "",
      profile: {},
      search: "",
      profile: {
        date: new Date().toISOString(),
        name: "",
        email: "",
        dob: "",
        bio: "",
        gender: ""
      }
    };
  },
  methods: {
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = e => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.img-circle {
  margin-bottom: 5px;
}

.button-two {
  border-radius: 4px;
  background-color: #2cdb6f;
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
  margin-top: 25px;
  position: relative;
  background: rgba(65, 60, 60, 0.452);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(4px);
  border: 2px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;

  //   background: #3e3e3e;
  //   border-radius: 15px;
  //   box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
  //     -5px -5px 30px 7px rgba(24, 23, 23, 0.22);
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
  //   box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
  //     -5px -5px 30px 7px rgba(31, 31, 31, 0.22);
  z-index: -1;
}
.screen-body {
  display: flex;
}
.screen-body-item {
  flex: 2;
  padding: 40px;
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
  color: #2cdb6f;
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
  background: #2cdb6f;
}
.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: white;
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
  color: white;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.app-form-control::placeholder {
  //   color: #666;
  color: white;
}
.app-form-control:focus {
  border-bottom-color: #ddd;
  &::placeholder {
    color: white;
  }
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
.button:hover {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  background: linear-gradient(315deg, #6ce7e7 0%, #e657e1 74%);
  color: white;
}

.custom-file-input {
  color: white;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Select some files";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 10pt;
  color: white;
}
.custom-file-input:hover::before {
  border-color: white;
}
.custom-file-input:active::before {
  color: black;
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
</style>
