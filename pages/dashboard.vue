<template>
    <div class="app">
    <section class="section">
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
  <div class="padding-x">
        <b-table :data="data" :columns="columns"></b-table>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from  'vuex'
export default {
  name: 'HomePage',
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
  components: {
   
  },
  computed: {
  ...mapState(["did", "ethaddress", "profile"])
   
  },

}
</script>

<style>
.app {
    background-color: #0cbaba; 
    background-image: linear-gradient(to bottom, #0cbaba, #008fb3, #00629b, #31346f, #380036);
    height: 100vh;
}  
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
  background: -webkit-linear-gradient(rgb(38, 56, 90), rgb(79, 3, 94));
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