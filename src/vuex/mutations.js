export default {
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