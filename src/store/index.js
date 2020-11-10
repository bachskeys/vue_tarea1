import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomFact:null,
    factList:[],
    error:null
  },
  mutations: {
    setFactList(state,payload){
      const{factList} = state;
      return state.factList = [...factList,...payload]
    },
    setError(state,payload){
      state.error = payload;
    },
    setRandomFact(state,payload){
      state.randomFact = payload;
    }
  },
  actions: {
   async getFactList(context){
     const{ commit } = context;
        let response =await axios.get('https://cat-fact.herokuapp.com/facts')
        .catch(e => commit('setError',e));
        commit('setFactList',response.data['all']);
        return response
    },
    async getRandomFact(context){
      console.log('getting random fact')
      const{ commit } = context;
      let response = await axios.get('https://cat-fact.herokuapp.com/facts/random')
      .catch(e => commit('setError',e));
      commit('setRandomFact',response.data);
      return response
    },
    resetError(context){
      return context.commit('setError',null)
    }
  },
  modules: {
  },
  getters:{
   mapFactList(state){
    return state.factList.map((fact)=>{
       return {fact:fact.text,id:fact._id}
     })
   },
   mapRandomFact(state){
     const{randomFact} = state
     if(randomFact){
       const{text, _id} = randomFact;
       return {fact:text,id:_id}
     }
     return {fact:"",id:""}
   },
   mapError(state){
     return state.error;
   }
  }
})
