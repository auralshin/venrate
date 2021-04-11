import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  ThreeIdConnect,
  EthereumAuthProvider,
} from "3id-connect";

import Ceramic from "@ceramicnetwork/http-client";
import { IDX } from "@ceramicstudio/idx";
import { definitions } from '../config.json'
import web3Modal from "../utils/provider.js";


import ipfsClient from 'ipfs-http-client'

import dagJose from 'dag-jose'
import multiformats from 'multiformats/basics'
import legacy from 'multiformats/legacy'

import socket from '../utils/socket'

multiformats.multicodec.add(dagJose)
const format = legacy(multiformats, dagJose.name)

const DEFAULT_API_URL = "https://ceramic-clay.3boxlabs.com";
const API_URL = "https://ipfs.auralshin.tech"
const threeIdConnect = new ThreeIdConnect();
const ceramic = new Ceramic(DEFAULT_API_URL);
const ipfs = ipfsClient({ url: API_URL, ipld: { formats: [format] } })

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


export default new Vuex.Store({
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
    },
    newRecord(state, payload) {
      state.recordsList = payload.recordList.records;
      localStorage.setItem('recordsList', JSON.stringify(payload.recordList.records));
    },
    updateProfile(state, payload) {
      state.profile = payload.profile;
      let url = "https://ipfs.io/ipfs/";
      let cid = payload.profile.image.original.src.slice(7)
      state.profilePic = url + cid;
      localStorage.setItem('profilePic', state.profilePic);
      localStorage.setItem('basicProfile', JSON.stringify(payload.profile));
    },
    currentRecord(state, payload) {
      state.currentRecord = payload.currentRecord;
      console.log(payload.currentRecord)
      localStorage.setItem('currentRecord', JSON.stringify(payload.currentRecord));

    },
    logoutTriggered(state) {
      state.ethaddress = "";
      localStorage.setItem('ethaddress', "");

      state.did = "";
      localStorage.setItem('did', "");

      state.profile = {};
      localStorage.setItem('basicProfile', {});

      state.recordsList = [];
      localStorage.setItem('recordsList', state.recordsList);

      state.authenticated = false;
      localStorage.setItem('authenticated', false);

      console.log('User Logged out Succesfully');
    }
  },
  actions: {
    async ceramicAuth({ commit }) {
      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      const ethaddress = addresses[0];
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();


      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");
      console.log(ceramic.did.id);

      socket.auth = { did: ceramic.did.id };
      socket.connect();
      console.log('Socket Id ' + socket.id);
      socket.on("session", ({ sessionID, userID }) => {
        // attach the session ID to the next reconnection attempts
        socket.auth = { sessionID };
        // store it in the localStorage
        localStorage.setItem("sessionID", sessionID);
        // save the ID of the user
        socket.userID = userID;
      });

      const idx = new IDX({ ceramic, aliases: definitions });
      console.log("new idx instance created");
      if (idx.authenticated) {
        console.log("authenticated IDX!!");
        const recordList = await idx.get('healthRecord')
        const profile = await idx.get('basicProfile')
        console.log("Health Records List");
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

    async decryptHR({ commit }, payload) {

      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();

      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");

      console.log('ID ' + payload.id)

      const jwe = (await ipfs.dag.get(payload.id)).value
      console.log(jwe)
      const data = await ceramic.did.decryptDagJWE(jwe)
      console.log(data)

      setTimeout(() => {
        commit('currentRecord', { currentRecord: data })
        //loading.close();
      }, 4000)
    },

    async encryptStore({ commit }, payload) {
      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();

      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");
      const idx = new IDX({ ceramic, aliases: definitions });

      const recipients = [ceramic.did.id]
      const jwe = await ceramic.did.createDagJWE(payload.record, recipients)
      console.log(jwe)
      const cid = await ipfs.dag.put(jwe, { format: 'dag-jose', hashAlg: 'sha2-256' });
      console.log('CID')
      const DocID = cid.toString()
      console.log(DocID)

      const recordList = await idx.get('healthRecord')
      console.log("Health Records List");
      console.dir(recordList);
      if (recordList != null) {
        const record = await idx.set('healthRecord', {
          records: [{ id: DocID, title: payload.record.title }, ...recordList.records]
        })
        console.log(record)
      } else if (recordList == null || recordList.records.length <= 0) {
        const record = await idx.set('healthRecord', {
          records: [{ id: DocID, title: payload.record.title }]
        })
        console.log(record)
      }
      //update the index doc with the addition of the newly encrypted IPLD at the top
      const recordList2 = await idx.get('healthRecord')

      setTimeout(() => {
        commit('newRecord', { recordList: recordList2 })
      }, 2000)

    },

    async shareDoc({ state }, payload) {
      console.log("data from store")
      console.dir(payload.did)
      console.dir(payload.record)
      console.log(state.idx)

      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();

      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");

      const recipients = [payload.did]
      const jwe = await ceramic.did.createDagJWE(payload.record, recipients)
      console.log(jwe)
      const cid = await ipfs.dag.put(jwe, { format: 'dag-jose', hashAlg: 'sha2-256' });
      console.log('CID')
      const DocID = cid.toString()
      console.log(DocID)

      socket.emit("private message", {
        Pname: payload.name,
        cid: DocID,
        to: payload.sessionID,
      });

    },

    async retireve({ commit }, payload) {
      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();

      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");
      const idx = new IDX({ ceramic, aliases: definitions });

      console.log('CID ' + payload.cid)

      const recordList = await idx.get('healthRecord')
      console.log("Health Records List");
      console.dir(recordList);

      if (recordList != null) {
        const record = await idx.set('healthRecord', {
          records: [{ id: payload.cid, title: payload.name }, ...recordList.records]
        })
        console.log(record)
      } else if (recordList == null || recordList.records.length <= 0) {
        const record = await idx.set('healthRecord', {
          records: [{ id: payload.cid, title: payload.name }]
        })
        console.log(record)
      }
      //update the index doc with the addition of the newly encrypted IPLD at the top
      const recordList2 = await idx.get('healthRecord')

      setTimeout(() => {
        commit('newRecord', { recordList: recordList2 })
      }, 2000)


    },

    async updateProfile({ commit }, payload) {
      const ethProvider = await web3Modal.connect();
      const addresses = await ethProvider.request({ method: "eth_accounts" });
      console.log("Got the ethaddress");

      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0]);
      await threeIdConnect.connect(authProvider);
      console.log("3id connect func executed");
      const provider = await threeIdConnect.getDidProvider();

      await ceramic.setDIDProvider(provider);
      console.log("Ceramic DID Provider set");
      const idx = new IDX({ ceramic, aliases: definitions });

      console.log('Logging from vuex')
      console.log(payload.selectedImage)

      let imgurl = await infuraUpload(payload.selectedImage)
      console.log(payload.imageWidth)
      console.log(payload.imageHeight)

      let imgSrc = {
        original: {
          src: imgurl, height: payload.imageHeight, width: payload.imageWidth, mimeType: payload.selectedImage.type
        }
      }
      payload.profile.image = imgSrc

      const profile = await idx.set('basicProfile', payload.profile);
      console.log(profile)

      setTimeout(() => {
        commit('updateProfile', { profile: profile })
      }, 2000)

    },

    async logoutTriggered({ commit }) {
      setTimeout(() => {
        commit('logoutTriggered')
      }, 1000)
    }

  },
  modules: {
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
async function infuraUpload(selectedImage) {
  let imgurl = null;

  if (selectedImage != null) {
    let infura = "https://ipfs.infura.io:5001";
    const ipfs = ipfsClient({ url: infura });
    const file = await ipfs.add(selectedImage);
    console.log(file);
    imgurl = "ipfs://" + file.path;
    return imgurl
  }
  return imgurl
}
