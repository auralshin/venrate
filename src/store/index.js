import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '3id-connect'
const API_URL = "https://ceramic-clay.3boxlabs.com"
const ceramic = new CeramicClient(API_URL)
import { IDX } from "@ceramicstudio/idx";
import { definitions } from '../config.json'


const store =  new Vuex.Store({
    state: {
        authenticated: false,
    idx: {},
    ceramic: {},
    ipfs: {},
    recordsList: [],
    did: "",
    ethaddress: "",
    currentRecord: {},
    profile: {},
    profilePic: ""
    },
    getters: {
        records: state => state.recordsList.records
      },
      mutations: {
        initialiseStore(state) {
          if (localStorage.getItem('ethaddress') != null) {
            state.ethaddress = localStorage.getItem('ethaddress');
          }
    
          if (localStorage.getItem('did') != null) {
            state.did = localStorage.getItem('did');
          }
    
          if (localStorage.getItem('profilePic') != null) {
            state.profilePic = localStorage.getItem('profilePic');
          }
    
          if (localStorage.getItem('recordsList') != null) {
            state.recordsList = JSON.parse(localStorage.getItem('recordsList'));
          }
    
          if (localStorage.getItem('authenticated')) {
            state.authenticated = true;
          }
    
          if (localStorage.getItem('currentRecord') != null) {
            state.currentRecord = JSON.parse(localStorage.getItem('currentRecord'));
    
          }
          if (localStorage.getItem('basicProfile') != null) {
            state.profile = JSON.parse(localStorage.getItem('basicProfile'));
          }
    
        },
        auth(state, payload) {
          state.ethaddress = payload.ethaddress;
          localStorage.setItem('ethaddress', payload.ethaddress);
    
          if (payload.profile != null) {
            state.profile = payload.profile;
            let url = "https://ipfs.io/ipfs/";
            let cid = payload.profile.image.original.src.slice(7)
            state.profilePic = url + cid;
            localStorage.setItem('profilePic', state.profilePic);
            localStorage.setItem('basicProfile', JSON.stringify(payload.profile));
          }
    
          state.did = payload.did;
          localStorage.setItem('did', payload.did);
          console.log('Mutation set')
    
          if (payload.recordList != null) {
            state.recordsList = payload.recordList.records;
            localStorage.setItem('recordsList', JSON.stringify(payload.recordList.records));
          }
    
          state.authenticated = true;
          localStorage.setItem('authenticated', true);
    
          console.log('mutation executed and state stored');
        }
    },
    actions: {
        async ceramicAuth() {
            const addresses = await window.ethereum.enable()
const threeIdConnect = new ThreeIdConnect()
        
        const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
        await threeIdConnect.connect(authProvider)
        const provider = await threeIdConnect.getDidProvider()
        await ceramic.setDIDProvider(provider)
        const ethaddress = addresses[0]
        console.log(provider)
        console.log(ceramic.did.id)
        const idx = new IDX({ ceramic, aliases: definitions })
        console.log("idx")
        if (idx.authenticated) {
            console.log("authenticated IDX!!");
            const recordList = await idx.get('Record')
            const profile = await idx.get('basicProfile')
            console.log("Records List");
            console.dir(recordList);
            console.log("Basic Profile")
            console.dir(profile)
            let payload = {
              ethaddress,
              recordList,
              did: ceramic.did.id,
              profile
            }
            setTimeout(() => {
              
              store.commit('auth', payload);
            }, 1000)
            return true;
          } else {
            return false;
          }
        },
    }

})

Vue.prototype.$store = store;
export default store;