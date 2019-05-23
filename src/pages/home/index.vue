<template>
  <div class="hello">
    <p>{{ title }}</p>
    <p>总票数{{sumCount}}</p>
    <div>
          
          <h3>如何通过node.js对数据进行MD5加密</h3>
          <input type="button" value="投票" @click="$store.commit('nodeCountAdd')">票数:{{nodeCount}}
      </div>
      <hr/>
      <div>
          
          <h3>真正掌握vuex的使用方法（一）</h3>
          <input type="button" value="投票" @click="$store.commit('vueCountAdd')">票数：{{vueCount}}
      </div>

    <hr />

    <button @click="$store.commit('add')">+</button>
    <span>{{ count }}</span>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex';
export default {
  name: 'home',
  computed:{
    ...mapState([
      'nodeCount',
      'vueCount',
      'count',
      'title'
    ]),
    ...mapGetters(['sumCount'])
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
