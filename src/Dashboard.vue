<template>
<section class="hero  is-medium">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <!-- <img src="https://ibb.co/NZ8cp84" alt="Logo"> -->
            <img src="https://i.ibb.co/Dzg2sVs/logo-removebg-preview.png" width="100px" alt="logo">
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end ">
            
            <div class="navbar-item">
              <router-link :to="{ path: 'home' }" class="button is-info">
                Home
              </router-link>
            </div>
            <div class="navbar-item">
              <router-link :to="{ path: 'create' }" class="button is-info">
                Create
              </router-link>
            </div>
            <div class="navbar-item">
            <router-link :to="{ path: 'profile' }" class="button is-info">
              Profiles
            </router-link>
            </div>
            <div class="navbar-item">
            <router-link :to="{ path: 'home' }" class="button is-info">
              Documentation
            </router-link>
            </div>
            <span class="navbar-item">
              <a class="button is-info is-inverted" href="https://github.com/auralshin/venrate">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Repository</span>
              </a>
            </span>
            <div class=" navbar-item"><a class="button is-danger">Logout</a></div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title is-1 text-gradient">
        Venrate
      </p>
      <p class="subtitle text-gradient is-3">
        Verify your profile and store it at one place<br/><br />
      </p>
      <div class="columns">
        <div class="element element-2 column lo">
          <p>
            <strong>Your DID :<br/> {{did}}</strong> <br/><br/>
          </p>
        </div>
        <div class="element element-2 column lo">
            <p><strong >Your Ethereum Address :<br/> {{ethaddress}}</strong></p>
        </div>
      </div>
    </div>
  </div>



      <!-- <div class="container">
         <ul>
          <li id="menu-bar-item-1"  @click="toggleActiveStatus('menu-bar-item-1')" >
            <a class="text-gradient">Overview</a>
          </li>
          <li id="menu-bar-item-2" @click="toggleActiveStatus('menu-bar-item-2')" >
            <a class="text-gradient">Records</a >
          </li>
          <li id="menu-bar-item-3" @click="toggleActiveStatus('menu-bar-item-3')" >
            <a class="text-gradient">Profile</a>
          </li>
          
        </ul> 
        
      </div> -->
      <div class="padding-x">
        <b-table :data="data" :columns="columns"></b-table>
      </div>
   
</section>
</template>

<script>
import { mapState } from "vuex";
export default {
data() {
            return {
                data: [
                    { 'id': 1, 'title': 'Jesse', 'docId': '2016-10-15 13:43:27', },
                    { 'id': 2, 'title': 'John', 'docId': '2016-12-15 06:00:53', },
                    { 'id': 3, 'title': 'Tina', 'docId': '2016-04-26 06:26:28',  },
                    { 'id': 4, 'title': 'Clarence', 'docId': '2016-04-10 10:28:46', },
                    { 'id': 5, 'title': 'Anne', 'docId': '2016-12-06 14:38:38', }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'title',
                        label: 'Title',
                    },
                   
                    {
                        field: 'docId',
                        label: 'Doc ID',
                        centered: true
                    },
                    
                ]
            }
        },
methods: {
 toggleActiveStatus(id){

  var docs = document.getElementsByClassName("is-active")
  for(var i =0; i< docs.length; i ++) docs[i].classList = null;
   var element = document.getElementById(id)
   element.classList.add("is-active")
   element.classList.add("text-blue")

 }
},
computed: {
  ...mapState(["did", "ethaddress", "profile"])
},

        
}
</script>

<style>
.text-blue {
  color: #167DF0;
}
.text-black {
  color: black;
}
.tab-bg {
  background:  rgb(67, 213, 233);

}
.lo {
  margin-right: 20px;
}
.text-gradient {
  background: -webkit-linear-gradient(#eee, rgb(27, 133, 165));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.element {
  align-items: center;
  background: linear-gradient(-45deg, rgb(255, 255, 255),rgba(219, 218, 218, 0.781));
  box-shadow: 8px 8px 12px 0 rgba(255, 255, 255, 0.25),
   -4px -4px 8px 0 rgba(21, 230, 212, 0.3);
  border-radius: 50px;
  display: flex;
  height: 100px;
  justify-content: center;
  width: auto;
  elevation: above;
}
.element-2 {
  background: linear-gradient(-45deg, rgb(255, 255, 255), rgb(67, 213, 233));
}
.padding-x {
  padding-right: 130px;
  padding-left: 130px;
}
</style>