<template>
  <div>我是会员
     <mt-button type="danger" size="large" @click="setBall">danger</mt-button>
     </div>
</template>
<script>
import EventBus from '../../EventBus.js'
export default {
  name: 'member',
  data () {
    return {
      msg: ''
    }
  },
methods: {
     setBall(){
      EventBus.$emit('addShopcart',5)
    }
},
}

</script>
<style>
</style>
