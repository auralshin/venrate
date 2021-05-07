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
      <a href="" target="_blank">Github</a>
      <a href="" target="_blank">Documentation</a>
      <a href="" target="_blank">Record</a>
      <a href="" target="_blank">Profile</a>
      <a href="" target="_blank">LogOut</a>
    </div>
  </div>
  <div class="title text-gradient">Venrate</div>
  <div class="sub-title text-gradient"> Reputation platform which is not tied to any platform<br/> and portable across all platforms</div>
  
  <div class="cards-list">
  
<div class="card 1">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src="https://www.adobe.com/content/dam/cc/us/en/tools/cq5dam.mobile_640.640.357.jpg.img.jpg" />
    </div>
  <div class="card_title text-black">
    <p>Card Title</p>
  </div>
</div>
</div>
<div class="three gcontainer">
  <h1>Reputation History</h1>
</div>
 <div class="table__wrap">
   <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th>Index</th>
            <th>Date</th>
   
            <th>Score</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
   
          <tr v-for="row in rows" :key="row">
            <td>{{ row.id }}</td>
            <td >{{ row.date }} </td>
   
            <td class="right-td">{{ row.score }}</td>
          </tr>
   
        </tbody>
      </table>
    </div>
 </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
 rows: [
        { id: 1, date: '7 May 2021', score: '7.8' },
        { id: 2, date: '6 May 2021', score: '8.5' },
        { id: 3, date: '6 May 2021', score: '8.9' },
        { id: 4, date: '6 May 2021', score: '8.9' },
        { id: 5, date: '5 May 2021', score: '8.9' },
        { id: 6, date: '2 May 2021', score: '8.9' },
        { id: 7, date: '28 Apr 2021', score: '9.8' }
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

<style >
.title {
  text-align: center;
  padding-top: 90px;
  padding-bottom: 20px;
  font-size: 80px;
  font-weight: bolder;
}
.table__wrap {
  padding: 50px 15px 0 15px;
}
.sub-title {
  text-align: center;
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: bolder;
}
.text-blue {
  color: #167DF0;
}
.text-black {
  color: black;
}
.gcontainer {
  padding: 20px;
}
.text-gradient {
  background: -webkit-linear-gradient(#eee, rgb(27, 133, 165));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 500px;
  height: 200px;
  border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -110px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:300px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td{
  padding:20px 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}


/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: 'Roboto', sans-serif;
}
section{
  margin: 50px;
}


/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}


/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}
.three h1 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.3;
  line-height: 1.5em;
  padding-bottom: 15px;
  color: whitesmoke;
  position: relative;
}
.three h1:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 95px;
  background-color: rgb(185, 185, 185);
}
.three h1:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 1px;
  width: 235%;
  max-width: 555px;
  background-color: rgb(185, 185, 185);
}

</style>