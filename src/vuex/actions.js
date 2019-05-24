
import axios from "axios";
export default{
	add:({commit}) => commit('add'),

	reduce:({commit}) => commit('reduce'),
	
	getList:(context)=>{
		axios.get('../../static/list.json')
		.then(data=>{
		    context.commit("setlist",data.data)
		 })
	}
}