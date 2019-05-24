
import axios from "axios";
export default{
	getList:(context)=>{
		axios.get('../../static/list.json')
		.then(data=>{
		    context.commit("setlist",data.data)
		 })
	}
}