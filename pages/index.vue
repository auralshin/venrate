<template>
  <v-container fluid class="grey con lighten-5">
    <v-row class="row">
      <v-col md="6" sm="12" cols="12" class="column">
        <div class="col-left">
          <h1 class="col-left--title">
            Venrate
          </h1>
          <v-card class="col-left--card mx-auto " max-width="500">
            <v-card-text class="text">
              <p class="text-info">
                A reputation platform which is not tied to any platform and
                portable across all platforms.
              </p>
              <p class="text-about">
                There are three components of a reputation based economy:
                identity, reputation, and dispute resolution. Venrate aim to
                provide a platform that incorporates all components with
                additional features.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn elevation="6" outlined class="col-left--card-btn" text>
                <v-icon color="white" size="20" left>
                  mdi-github
                </v-icon>
                <a
                  href="https://github.com/auralshin/venrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="links"
                >
                  Github
                </a>
              </v-btn>
              <v-btn elevation="6" outlined class="col-left--card-btn" text>
                <v-icon color="white" size="20" left>
                  mdi-file-document
                </v-icon>
                <a
                  href="https://auralshin.me/venrate"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="links"
                >
                  Documentation
                </a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <v-col class="column" md="6" sm="12" cols="12">
        <div class="column-right">
          <v-avatar class="column-right--avatar" size="150">
            <img
              src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
              alt="John"
            />
          </v-avatar>
          <v-card
            max-width="500"
            height="400"
            outlined
            class="column-right--card"
          >
            <h1 class="name">AAYUSH KUMAR</h1>
            <h1 class="occupation">Student</h1>
            <h1 class="rep"><b>Reputation</b> : 88/100</h1>
            <div class="icons">
              <v-btn class="icons-btn" fab elevation="5">
                <v-icon size="30">
                  mdi-linkedin
                </v-icon>
              </v-btn>
              <v-btn class="icons-btn" fab>
                <v-icon size="30">
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn class="icons-btn" fab>
                <v-icon size="30">
                  mdi-github
                </v-icon>
              </v-btn>
            </div>
            <v-btn class="button" @click="auth">
              <Button />
            </v-btn>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Button from "../components/Button.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
export default {
  components: {
    Logo,
    VuetifyLogo,
    Button
  },
  methods: {
    async auth() {
     this.$store.commit('initialiseStore')
     this.$store
      .dispatch("ceramicAuth")
      .then((Boolean) => {
        if(Boolean) {
          this.$router.push({path: '/dashboard'})
        }
      })
   }
  } 
};
</script>

<style lang="scss" scoped>
.con {
  height: 100vh;
  // background-image: url('~assets/background.jpg');
  // background-size: cover;
}
.row {
  height: 100%;
}

.column {
  justify-content: center;
  display: flex;
  align-items: center;
}

// -------------------------------------------------- left-column------------------------------------------- //

.col-left {
  margin-top: 50px;
  &--title {
    font-size: 75px;
    font-weight: bolder;
    font-family: "Montserrat", sans-serif;
    color: #ffffff;
    letter-spacing: 1px;
  }

  &--card {
    border-radius: 10px !important;
    margin: 5px 0 20px 0;
    background: transparent;
    box-shadow: none !important;

    .text {
      color: rgb(255, 255, 255) !important;
      font-family: "Montserrat", sans-serif;

      &-info {
        font-size: 25px;
        letter-spacing: 0.12rem;
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        line-height: 30px;
        font-weight: 400;
      }

      &-about {
        font-size: 14px;
        margin-top: 15px;
        text-transform: capitalize;
        line-height: 22px;
        text-align: justify;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
      }
    }
    &-btn {
      background: white;
    }
  }
}

// ------------------------------------------------------ right-column --------------------------------------------- //

.column {
  &-right {
    margin-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &--avatar {
      border: 4px solid #00d351d3;
      position: absolute;
      z-index: 2;
      top: -70px;
      // left: 35%;
    }
    &--card {
      margin-top: 30px;
      padding: 30px 60px;
      border-radius: 40px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > * {
        font-family: "Poppins", sans-serif;
      }
    }
  }
}

.name {
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.occupation {
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 10px;
}
.rep {
  font-weight: 400;
  margin-bottom: 10px;
}

//-------------------------------------------------------- utility ----------------------------------------------------- //
.links {
  text-decoration: none;
  color: black;
}

.v-card__actions {
  & > * {
    flex-grow: 1;
    margin: 5px;
  }
}
.button {
  margin-top: 10px;
  margin-bottom: 0;
}
.icons {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 15px;

  &-btn {
    height: 45px;
    width: 45px;
  }
}
// -------------------------------------------------------- media-query ----------------------------------------------//
@media only screen and (max-width: 990px) {
  .con {
    height: 100%;
  }
}
</style>
