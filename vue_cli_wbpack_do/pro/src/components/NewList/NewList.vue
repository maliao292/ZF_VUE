<template>
  <div>
    <nav-bar>商品列表</nav-bar>
    <ul>
        <li v-for='val in newList' :key='val.id'>
          <img :src="val.img_url" alt="">
          <span>{{val.title}}</span>
          <p>{{val.add_time | converTime()}}</p>
        </li>
      </ul>  
  </div>
</template>
<script>
export default {
    data () {
    return {
      msg: 'list',
      newList: []
    }
  },
  created(){
    this.$axios.get('../../../static/dataJson/newList.json').then( res => this.newList = res.data)
  }
}

</script>
<style scoped>
   img,div{
     width: 100%
   }
</style>>
</style>
