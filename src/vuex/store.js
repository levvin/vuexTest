import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)


const state={
		nodeCount:0,
		vueCount:0,
		count:0,
	    title: '首页',
	    list:[]
}
const mutations={
		add(state) {
			state.count++
		},
		reduce(state) {
			state.count--
		},
		nodeCountAdd(state){
			state.nodeCount++
		},
		vueCountAdd(state){
			state.vueCount++
		},
		setlist(state,v){
			state.list=v
		}
}
const getters = {
	sumCount(state) {
		return state.nodeCount+state.vueCount
	}
}
const actions = {
	getList:(context)=>{
		axios.get('../../static/list.json')
	    .then(data=>{{
	      context.commit("setlist",data.data)
	    }})
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})