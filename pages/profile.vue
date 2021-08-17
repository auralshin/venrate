<template>
  <div>
    <div class="card-container">
      <div class="neumorphic-card">
        <div class="profile-container">
          <!-- <div> -->
          <div class="profile-image--wrapper">
            <v-avatar class="profile-image" size="130">
              <img
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                alt="John"
              />
            </v-avatar>
          </div>
          <div class="profile-meta">
            <span class="profile-name">Anshul Rai</span>
            <span class="profile-title">Full Stack Developer</span>
            <br />

            <span class="profile-gender">Male</span>
            <br />

            <span class="profile-dob">13-Nov-2000</span>
            <br />
            <span class="profile-bio">
              Hey, I am a blockchain developer. Here's my Venrate profile. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nobis? 
              Illum similique corporis voluptatum rem quos expedita asperiores iusto, 
            </span>
            <!-- </div> -->
          </div>
          <div class="profile-buttons">
            <router-link :to="{ path: 'edit' }"
              ><button class="neumorphic-button">Edit</button></router-link
            >
            <button class="neumorphic-button">Share</button>
          </div>
          <div class="score">
            <button @click="get_score" class="neumorphic-button">
              Get Score
            </button>
            <div class="score-text">Here's Your Score : {{ r }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      r: 0
    };
  },
  methods: {
    get_score() {
      this.r = this.generateNumber();
    },
    generateNumber: function() {
      return Math.floor(Math.random() * (10 - 4 + 1) + 4);
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@100;300&display=swap");
.card-container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Alegreya Sans SC", sans-serif; //   padding-top: 100px;
}
.score {
  padding: 30px 0 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: whitesmoke;

  &-text {
    font-weight: bold;
    margin-left: 15px;
  }
}
.neumorphic-card {
  margin-top: 70px;
  border-radius: 15px;
  text-align: center;
  transition: transform linear 0.2s;
  background: rgba(65, 60, 60, 0.452);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  //   background: #3e3e3e;
  //   box-shadow: 10px 12px 16px 0 rgba(53, 48, 48, 0.3);
}
// .neumorphic-card:hover {
//   transform: scale(1.01, 1.01);
// }

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.neumorphic-card-photo {
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 105px;
  width: 105px;
}

.profile-meta {
  display: flex;
  flex-direction: column;
}

.profile-name {
  margin-top: 1rem;
  color: whitesmoke;
  font-weight: bold;
  font-size: 45px;
}

.profile-title {
  color: whitesmoke;
  font-size: 20px;
  font-weight: bold;
}
.profile-dob {
  color: whitesmoke;
  font-size: large;
  font-weight: bold;
}
.profile-gender {
  color: whitesmoke;
  font-size: large;
  font-weight: bold;
}
.profile-bio {
  color: whitesmoke;
  font-size: large;
  font-weight: bold;
  max-width: 35rem;
  text-align: justify;
}

.profile-buttons {
  margin-top: 1.5em;
}

.profile-image {
  &--wrapper {
    padding: 4px;
    position: relative;
    background: #ffffff;
    border-radius: 50%;

    &:hover {
      background: linear-gradient(to left, rgb(0, 255, 55), rgb(11, 65, 134));
    }
  }
}

.neumorphic-button {
  border-radius: 40px;
  border: none;
  height: 40px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  color: #000000;
  font-weight: 500;
  background-color: #fff;
  transition: box-shadow ease-in-out 0.2s;
  outline: none;
  font-family: "poppins", sans-serif;
}
.neumorphic-button:active {
  transition: box-shadow ease-in-out 0.2s;
  box-shadow: 3px 3px 4px 0 rgba(255, 255, 255, 0.3) inset,
    -2px -2px 3px 0 rgba(0, 0, 0, 0.25) inset;
  color: #595858;
}
.neumorphic-button:hover {
  scale: (1.01);
}

</style>
