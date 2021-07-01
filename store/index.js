import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect,  EthereumAuthProvider } from '@3id/connect'
const API_URL = "https://localhost:7007"
const ceramic = new CeramicClient(API_URL)

import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'

import { DID } from 'dids'
const resolver = { ...KeyDidResolver.getResolver(),
                   ...ThreeIdResolver.getResolver(ceramic) }
const did = new DID({ resolver })
ceramic.did = did
export const state = () => ({
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
})

export const getters = {
    records: state => state.recordsList.records
  }

  export const mutations = {
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
}

export const actions = {
    async ceramicAuth({commit}) {
        await ceramic.setDID(did)
        const addresses = await window.ethereum.enable()
        const threeIdConnect = new ThreeIdConnect()
               
        const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
        await threeIdConnect.connect(authProvider)
        const provider = await threeIdConnect.getDidProvider()
        ceramic.did.setProvider(provider)
        console.log(provider)
        var res = await ceramic.did.authenticate()
        console.log(res);
        console.log("set")
        const ethaddress = addresses[0]
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
         
         commit('auth', payload);
       }, 1000)
       return true;
     } else {
       return false;
     }
   },
    
  
}