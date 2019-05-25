<template>
  <div class="hello">
    <p>{{ title }}</p>
    <p>总票数{{sumCount}}</p>
    <div>        
          <h3>如何通过node.js对数据进行MD5加密</h3>
          <Button @click="$store.commit('nodeCountAdd')">投票</Button>票数:{{nodeCount}}
      </div>
      <hr/>
      <div>
          
          <h3>真正掌握vuex的使用方法（一）</h3>
          <Button @click="$store.commit('vueCountAdd')">投票</Button>票数：{{vueCount}}
      </div>

    <hr />

    <Button type="primary" @click="add">+</Button>
    <span>{{ count }}</span>
    <Button type="error" @click="reduce">-</Button>
  </div>
</template>

<script>

import { Button, Table,Input } from 'iview';
import { mapState,mapGetters,mapActions } from 'vuex';
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
  },
  methods: mapActions([
    'add',
    'reduce',
    'getList'
  ]),
  component:{
    Button,
    Table,
    Input
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
