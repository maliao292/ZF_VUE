<template>
  <div style="width:100%;overflow:hidden">
    <nav-bar>商品列表</nav-bar>
    <div>
     
    </div>
    <ul>
        <li v-for='val in newList' :key='val.id'>
          <vue-preview :slides="val"></vue-preview>
          <span>{{val[0].title}}</span>
          <p>{{val[0].add_time | converTime()}}</p>
        </li>
      </ul>  
  </div>
</template>
<script>
import EventBus from '../../EventBus.js'
export default {
    data () {
    return {
      msg: 'list',
      newList: []
    }
  },
  created(){
    this.$axios.get('../../../static/dataJson/newList.json').then( res => this.newList = res.data)
  },
  methods: {
    setBall(){
      EventBus.$emit('addShopcart',this.msg)
    }
  },
}

</script>
<style scoped>
   img,div{
     width: 100%
   }
</style>>
</style>
