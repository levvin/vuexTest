<template>
  <div class="news">
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
     <!--对按钮进行遍历-->
    <button v-for="(item,i) in list"  :class="{active:i==index}" @click="index=i">{{item.tagName}}</button>
    <!--对新闻进行遍历-->
    <div v-for="(item,i) in list" v-show="i==index">
        <p v-for="info in item.newList"><a :href="info.newHref">{{info.newTitle}}</a></p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'news',
  data () {
    return {
      msg: 'news pages ',
      index:0
    }   
  },
  computed: mapState([
    'count',
    'title',
    'list'
  ]),
  mounted(){
   this.$store.dispatch('getList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news button,.news p{
  margin:5px;
  padding:5px;
  border:none
}
.news button.active{
  background:red;
}
.news div{
  border:1px solid red;
}

</style>
