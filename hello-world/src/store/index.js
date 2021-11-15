import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)

export default new Vuex.Store({
  state: {
    API_TOKEN:'df7619e0fc3f39c0a33f3c00bc8ea0711569758b4e2ef51cd78dbb6183a761234a385086fc34a756463f449a3af505989a3c9f85a49e1e0e437239d30fb60c9c',
    API_ENDPOINT:'https://apitesting.plerk.io/get_categories',
    categories:null

  },
  mutations: {
    setCategories(state, categories){
      state.categories=categories;
    }
  },
  actions: {
    setAllCategories({commit,state}){
      axios({
        url:state.API_ENDPOINT,
        method:'get',
        headers:{
          'Authorization':state.API_TOKEN,  
        }
      })
      .then((res)=>res.data)
      .then((res)=>{
        if(res.status=='ok'){
          commit('setCategories',res.data)
        }else{
          console.error("NotFound")
        }
      })
      .catch((error)=>{
        console.error(error);
      })
    }
  },
  getters: {
    _getCategories(state){
      return state.categories

    }
  }
})
