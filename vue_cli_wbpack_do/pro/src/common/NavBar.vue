<template>
  <div class="navBar">
      <span @click="back" v-if="canBack">&lt;</span>
      <b><slot></slot></b>
  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: {
        canBack:{
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
        }
    },
    methods:{
        back(){
           this.$router.go(-1)
        }
    }
}

</script>
<style scoped>
    .navBar{
        height: 50px;
        position: relative;
        border-bottom: 1px solid #cccccc;
        margin-bottom: 2px;
    }
   span{
       position: absolute;
       top: 0;
       left: 5px;
       display: inline-block;
       height: 49px;
       line-height: 49px;
       font-size: 28px
   } 
   .navBar b{
       display: inline-block;
       height: 100%;
       line-height: 49px;
       width: 100%;
       text-align:center;
   }
</style>