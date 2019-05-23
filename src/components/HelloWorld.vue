<template>
  <div class="hello">
    <input type="text" @handlechange="handleInput" :value="value1" />
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      
    }
  },
  props: {
    value1: {
      type:[String,Number],
      default: ''
    }
  },
  methods: {
    handleInput(e){
      const value = e.target.value
      this.$emit('input',value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
