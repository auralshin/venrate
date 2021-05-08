<template>
<div>
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
      <a href="/record" >Record</a>
      <a href="/profile">Profile</a>
      <button class="" ><a href="" target="_blank">LogOut</a></button>
    </div>
  </div>
  <div class="card-container">
    <div class="neumorphic-card">
      <div class="profile-container">
        <div>
          <div class="profile-image">
            <img src="http://placedog.net/75/75" class="neumorphic-card-photo"/>
          </div>
          <div class="profile-meta">
            <span class="profile-name">Anshul Rai</span>
            <span class="profile-title">Frontend Engineer</span>
            <br/>

            <span class="profile-gender">Male</span>
            <br/>

            <span class="profile-dob">13-Nov-2000</span>
            <br/>
            <span class="profile-bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Doloremque dignissimos ratione asperiores<br/> earum ullam enim officia ut molestiae mollitia. Iure! </span>

          </div>
        </div>
        <div class="profile-buttons">
          <router-link :to="{ path: 'edit' }"><button class="neumorphic-button">Edit</button></router-link>
          <button class="neumorphic-button">Share</button>
        </div>
        <div class="score">
          <button @click="get_score" class="neumorphic-button">Get Score</button>
          <div>Here's Your Score : {{ r }}</div>
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
      r : 0
    }
  },
  methods: { 
    get_score() {
      this.r = this.generateNumber()
    },
    generateNumber: function () {
      return Math.floor(Math.random()*(10 - 4 + 1)+ 4);
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top:100px ;
}
.score {
  padding: 30px 0 0 0;
  display: flex;
  align-items:center ;
  color: whitesmoke;
}
.neumorphic-card {
  height: 60vh;
  width: 60vh;
  border-radius: 15px;
  text-align: center;
  transition: transform linear 0.2s;
  background: #3e3e3e;
  box-shadow: 
    12px 12px 16px 0 rgba(78, 67, 67, 0.3),
    -8px -8px 12px 0 rgba(0, 0, 0, .25);
}
  .neumorphic-card:hover {
    transform: scale(1.01, 1.01)
  }
  
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
      display: block;
      box-shadow: 6px 6px 8px 0 rgba(255, 255, 255, 0.3),
        -4px -4px 6px 0 rgba(0, 0, 0, .25); 
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
        margin-top: 1.5em;
          color: whitesmoke;

        font-weight: bold;
        font-size: larger;
      }
      
      .profile-title {
          color: whitesmoke;

        font-size: large;
        font-weight: bold;
      }
    .profile-dob {
          color: whitesmoke;

        font-size: large;
        font-weight: bold;
      }.profile-gender {
          color: whitesmoke;

        font-size: large;
        font-weight: bold;
      }.profile-bio {
          color: whitesmoke;

        font-size: large;
        font-weight: bold;
      }
    
    .profile-buttons {
      margin-top: 1.5em;
    }
      .neumorphic-button {
        border-radius: 40px;
        border: none;
        height: 40px;
        width: 100px;
        margin: 5px;
        cursor: pointer;
        color: #000000;
        font-weight: bolder;
        background-color: #fff;
        transition: box-shadow ease-in-out 0.2s;
        box-shadow: 6px 6px 8px 0 rgba(255, 255, 255, 0.3),
                  -4px -4px 6px 0 rgba(0, 0, 0, .25); 
        outline: none;
      }
        .neumorphic-button:active {
                  transition: box-shadow ease-in-out 0.2s;
          box-shadow: 3px 3px 4px 0 rgba(255, 255, 255, 0.3) inset,
                  -2px -2px 3px 0 rgba(0, 0, 0, .25) inset; 
          color: #595858;
        }
       .neumorphic-button:hover {
           scale: 1.01;
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